/*
# Irfan Tutor CMS — schema for content, images, sections, admin allowlist

Creates the database foundation for a private admin CMS. Public visitors can READ
all content and images; only authorised admin emails (listed in admin_emails) can
WRITE. Writes are gated by the is_admin() helper (SECURITY DEFINER).

## Tables
- admin_emails(email PK, created_at) — authorised admin emails.
- site_content(id, section, field_key, value, updated_at, UNIQUE(section,field_key)).
- sections(id PK, label, visible, sort_order).
- images(id, section, storage_path, caption, alt_text, sort_order, created_at).

## Security
- RLS on all tables.
- admin_emails: no anon access; authenticated may read their own membership row.
- site_content / sections / images: anon+authenticated SELECT (public website);
  admin-only INSERT/UPDATE/DELETE gated by is_admin().
- is_admin(): SECURITY DEFINER sql function; EXECUTE granted to authenticated only.

## Seed
- Default section rows inserted (visible=true). Content rows are seeded by the app
  from built-in defaults on first load if missing.
*/

-- ---------- tables (no policies yet) ----------
CREATE TABLE IF NOT EXISTS public.admin_emails (
  email text PRIMARY KEY,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.site_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section text NOT NULL,
  field_key text NOT NULL,
  value text NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (section, field_key)
);

CREATE TABLE IF NOT EXISTS public.sections (
  id text PRIMARY KEY,
  label text NOT NULL,
  visible boolean NOT NULL DEFAULT true,
  sort_order int NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS public.images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section text NOT NULL,
  storage_path text NOT NULL,
  caption text,
  alt_text text,
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- ---------- helper function (must exist before policies reference it) ----------
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.admin_emails
    WHERE admin_emails.email = (
      SELECT email FROM auth.users WHERE id = auth.uid()
    )
  );
$$;

REVOKE EXECUTE ON FUNCTION public.is_admin() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated;

-- ---------- enable RLS ----------
ALTER TABLE public.admin_emails ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.images ENABLE ROW LEVEL SECURITY;

-- ---------- grants ----------
-- admin_emails: only authenticated can check own membership (no anon grant).
GRANT SELECT ON public.admin_emails TO authenticated;

GRANT SELECT ON public.site_content TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.site_content TO authenticated;

GRANT SELECT ON public.sections TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.sections TO authenticated;

GRANT SELECT ON public.images TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.images TO authenticated;

-- ---------- policies: admin_emails ----------
DROP POLICY IF EXISTS "auth_read_own_admin_membership" ON public.admin_emails;
CREATE POLICY "auth_read_own_admin_membership"
ON public.admin_emails FOR SELECT
TO authenticated
USING (
  email = (SELECT email FROM auth.users WHERE id = auth.uid())
);

-- ---------- policies: site_content ----------
DROP POLICY IF EXISTS "public_read_site_content" ON public.site_content;
CREATE POLICY "public_read_site_content"
ON public.site_content FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "admin_insert_site_content" ON public.site_content;
CREATE POLICY "admin_insert_site_content"
ON public.site_content FOR INSERT
TO authenticated WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "admin_update_site_content" ON public.site_content;
CREATE POLICY "admin_update_site_content"
ON public.site_content FOR UPDATE
TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "admin_delete_site_content" ON public.site_content;
CREATE POLICY "admin_delete_site_content"
ON public.site_content FOR DELETE
TO authenticated USING (public.is_admin());

-- ---------- policies: sections ----------
DROP POLICY IF EXISTS "public_read_sections" ON public.sections;
CREATE POLICY "public_read_sections"
ON public.sections FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "admin_insert_sections" ON public.sections;
CREATE POLICY "admin_insert_sections"
ON public.sections FOR INSERT
TO authenticated WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "admin_update_sections" ON public.sections;
CREATE POLICY "admin_update_sections"
ON public.sections FOR UPDATE
TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "admin_delete_sections" ON public.sections;
CREATE POLICY "admin_delete_sections"
ON public.sections FOR DELETE
TO authenticated USING (public.is_admin());

-- ---------- policies: images ----------
DROP POLICY IF EXISTS "public_read_images" ON public.images;
CREATE POLICY "public_read_images"
ON public.images FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "admin_insert_images" ON public.images;
CREATE POLICY "admin_insert_images"
ON public.images FOR INSERT
TO authenticated WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "admin_update_images" ON public.images;
CREATE POLICY "admin_update_images"
ON public.images FOR UPDATE
TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "admin_delete_images" ON public.images;
CREATE POLICY "admin_delete_images"
ON public.images FOR DELETE
TO authenticated USING (public.is_admin());

-- ---------- seed default sections ----------
INSERT INTO public.sections (id, label, visible, sort_order) VALUES
  ('hero', 'Hero', true, 1),
  ('about', 'About Irfan', true, 2),
  ('philosophy', 'Teaching Philosophy', true, 3),
  ('approach', 'My Approach', true, 4),
  ('subjects', 'Subjects & Classes', true, 5),
  ('wants', 'For Every Student', true, 6),
  ('outcomes', 'Learning Outcomes', true, 7),
  ('testimonials', 'Testimonials', true, 8),
  ('areas', 'Service Areas', true, 9),
  ('faq', 'FAQ', true, 10),
  ('finalcta', 'Final Enquiry', true, 11)
ON CONFLICT (id) DO NOTHING;

-- ---------- indexes ----------
CREATE INDEX IF NOT EXISTS idx_site_content_section ON public.site_content (section);
CREATE INDEX IF NOT EXISTS idx_images_section ON public.images (section);
