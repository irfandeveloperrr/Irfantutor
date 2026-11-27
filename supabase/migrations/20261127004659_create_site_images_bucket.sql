/*
# Site images storage bucket + policies

## What this does
- Creates a public storage bucket 'site-images' for the Irfan Tutor CMS image library.
- Public (anon) can READ objects (so the website can display images).
- Only authenticated admin users (email in admin_emails, via is_admin()) can
  INSERT, UPDATE, DELETE objects.
- Adds the storage policies on storage.objects scoped to the 'site-images' bucket.

## Security
- RLS on storage.objects is managed by Supabase; these policies add bucket-scoped rules.
- Public read is intentional (website images are public content).
- Writes gated by public.is_admin() so only the authorised owner can upload/replace/delete.
*/

INSERT INTO storage.buckets (id, name, public)
VALUES ('site-images', 'site-images', true)
ON CONFLICT (id) DO NOTHING;

-- Public read for site-images
DROP POLICY IF EXISTS "public_read_site_images" ON storage.objects;
CREATE POLICY "public_read_site_images"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id = 'site-images');

-- Admin upload
DROP POLICY IF EXISTS "admin_insert_site_images" ON storage.objects;
CREATE POLICY "admin_insert_site_images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'site-images' AND public.is_admin());

-- Admin update (replace)
DROP POLICY IF EXISTS "admin_update_site_images" ON storage.objects;
CREATE POLICY "admin_update_site_images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'site-images' AND public.is_admin())
WITH CHECK (bucket_id = 'site-images' AND public.is_admin());

-- Admin delete
DROP POLICY IF EXISTS "admin_delete_site_images" ON storage.objects;
CREATE POLICY "admin_delete_site_images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'site-images' AND public.is_admin());
