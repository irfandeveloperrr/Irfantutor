// Database row types for the Irfan Tutor CMS.

export interface SiteContentRow {
  id: string;
  section: string;
  field_key: string;
  value: string;
  updated_at: string;
}

export interface SectionRow {
  id: string;
  label: string;
  visible: boolean;
  sort_order: number;
}

export interface ImageRow {
  id: string;
  section: string;
  storage_path: string;
  caption: string | null;
  alt_text: string | null;
  sort_order: number;
  created_at: string;
}
