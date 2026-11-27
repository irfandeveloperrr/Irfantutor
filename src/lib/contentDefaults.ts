// Built-in default content for every editable text field on the site.
// The site always renders from this map; if the admin has saved an override
// in Supabase, that value takes precedence. This keeps the site fully
// functional even before any database edits, and gives the admin sensible
// starting text to edit.

export interface ContentField {
  section: string;
  field_key: string;
  value: string;
  label: string; // human-friendly label shown in the dashboard
  multiline?: boolean;
}

export const DEFAULT_CONTENT: ContentField[] = [
  // ---- SEO ----
  { section: 'seo', field_key: 'title', value: 'Irfan Tutor | Personal Home Tuition in Hyderabad — Maths & Science Tutor', label: 'SEO Title' },
  { section: 'seo', field_key: 'description', value: 'Irfan Tutor offers personal one-on-one home tuition in Hyderabad for Classes 6–12 — Maths, Science and more. Patient, adaptable teaching built around how your child learns.', label: 'SEO Description', multiline: true },

  // ---- Hero ----
  { section: 'hero', field_key: 'badge', value: 'Personal Home Tuition in Hyderabad', label: 'Badge text' },
  { section: 'hero', field_key: 'headline', value: 'Personal Attention.\nBetter Understanding.\nBrighter Futures.', label: 'Headline', multiline: true },
  { section: 'hero', field_key: 'intro', value: "Every child learns differently. My job is to understand how your child learns best and teach accordingly. I believe in patience, personal attention and making even difficult concepts easier to understand.", label: 'Intro paragraph', multiline: true },
  { section: 'hero', field_key: 'cta_primary', value: "Let's Talk on WhatsApp", label: 'Primary button label' },
  { section: 'hero', field_key: 'cta_secondary', value: 'Know My Teaching Approach', label: 'Secondary button label' },
  { section: 'hero', field_key: 'status', value: 'Happy to discuss your child\u2019s needs', label: 'Status line' },

  // ---- About ----
  { section: 'about', field_key: 'eyebrow', value: 'A little about how I teach', label: 'Eyebrow' },
  { section: 'about', field_key: 'heading', value: 'Teaching, for me, is about understanding — not just finishing the syllabus', label: 'Heading' },
  { section: 'about', field_key: 'paragraph_1', value: 'Teaching has always been something I genuinely enjoy. What makes me happiest is when a student finally understands something they were struggling with.', label: 'Paragraph 1', multiline: true },
  { section: 'about', field_key: 'paragraph_2', value: "I don\u2019t want students to feel that tuition is just another place where they have to sit and memorise. I want them to feel comfortable, ask questions freely and enjoy the process of learning.", label: 'Paragraph 2', multiline: true },
  { section: 'about', field_key: 'paragraph_3', value: 'I am always willing to adjust my teaching method according to what works best for the student. Because at the end of the day, what matters to me is that the student understands, feels confident and is satisfied with their progress.', label: 'Paragraph 3', multiline: true },
  { section: 'about', field_key: 'signoff', value: '— Irfan', label: 'Sign-off' },

  // ---- Philosophy ----
  { section: 'philosophy', field_key: 'eyebrow', value: 'My teaching philosophy', label: 'Eyebrow' },
  { section: 'philosophy', field_key: 'heading', value: 'I don\u2019t believe in one teaching method for every student', label: 'Heading' },
  { section: 'philosophy', field_key: 'subtitle', value: 'Some students learn by listening. Some understand better through examples. Others need to practise a concept several times before it becomes clear. That\u2019s completely okay. I adapt my teaching to the student — not the other way around.', label: 'Subtitle', multiline: true },
  { section: 'philosophy', field_key: 'principle_1_title', value: 'Understand the student first', label: 'Principle 1 title' },
  { section: 'philosophy', field_key: 'principle_1_text', value: 'Before I teach anything, I take time to understand how your child learns — their comfort level, their difficulties, and what already confuses them.', label: 'Principle 1 text', multiline: true },
  { section: 'philosophy', field_key: 'principle_2_title', value: 'Explain concepts in different ways', label: 'Principle 2 title' },
  { section: 'philosophy', field_key: 'principle_2_text', value: 'Some students learn by listening, some through examples, some through practice. If one explanation doesn\u2019t work, I happily try another until it clicks.', label: 'Principle 2 text', multiline: true },
  { section: 'philosophy', field_key: 'principle_3_title', value: 'Make sure they feel confident', label: 'Principle 3 title' },
  { section: 'philosophy', field_key: 'principle_3_text', value: 'Understanding isn\u2019t enough if a child still feels unsure. I want every student to feel satisfied and confident with what they\u2019ve learnt before we move on.', label: 'Principle 3 text', multiline: true },
  { section: 'philosophy', field_key: 'closing', value: 'I take time to understand each student\u2019s learning style, difficulties and comfort level. I adapt my teaching approach so that the student doesn\u2019t just memorise an answer — they actually understand what they are learning.', label: 'Closing paragraph', multiline: true },

  // ---- Approach ----
  { section: 'approach', field_key: 'eyebrow', value: 'My approach', label: 'Eyebrow' },
  { section: 'approach', field_key: 'heading', value: 'How I help your child understand, step by step', label: 'Heading' },
  { section: 'approach', field_key: 'subtitle', value: 'No rushed lectures. Each session follows a simple, patient rhythm so your child builds real understanding — and never feels left behind.', label: 'Subtitle', multiline: true },
  { section: 'approach', field_key: 'step_1_title', value: 'Understand the student first', label: 'Step 1 title' },
  { section: 'approach', field_key: 'step_1_text', value: 'We start by talking — what your child finds easy, what feels difficult, and how they currently approach the subject. No assumptions.', label: 'Step 1 text', multiline: true },
  { section: 'approach', field_key: 'step_2_title', value: 'Explain in the way that suits them', label: 'Step 2 title' },
  { section: 'approach', field_key: 'step_2_text', value: 'Each topic is broken down with simple language and everyday examples. If one explanation doesn\u2019t land, I try another until it does.', label: 'Step 2 text', multiline: true },
  { section: 'approach', field_key: 'step_3_title', value: 'Practise together, patiently', label: 'Step 3 title' },
  { section: 'approach', field_key: 'step_3_text', value: 'We work through problems side by side. Mistakes are completely welcome — they show exactly what to focus on next.', label: 'Step 3 text', multiline: true },
  { section: 'approach', field_key: 'step_4_title', value: 'Revise until it feels easy', label: 'Step 4 title' },
  { section: 'approach', field_key: 'step_4_text', value: 'Regular, gentle revision keeps earlier topics fresh and builds the confidence to take on new ones without fear.', label: 'Step 4 text', multiline: true },

  // ---- Subjects ----
  { section: 'subjects', field_key: 'eyebrow', value: 'Subjects & classes', label: 'Eyebrow' },
  { section: 'subjects', field_key: 'heading', value: 'Support across the subjects that matter most', label: 'Heading' },
  { section: 'subjects', field_key: 'subtitle', value: "From building basics in middle school to senior secondary concepts, sessions are tailored to your child's class and syllabus.", label: 'Subtitle', multiline: true },
  { section: 'subjects', field_key: 'subject_1_name', value: 'Mathematics', label: 'Subject 1 name' },
  { section: 'subjects', field_key: 'subject_1_desc', value: 'Arithmetic to algebra, geometry, trigonometry and calculus foundations.', label: 'Subject 1 desc', multiline: true },
  { section: 'subjects', field_key: 'subject_2_name', value: 'Physics', label: 'Subject 2 name' },
  { section: 'subjects', field_key: 'subject_2_desc', value: 'Motion, energy, light and electricity — explained with real-world examples.', label: 'Subject 2 desc', multiline: true },
  { section: 'subjects', field_key: 'subject_3_name', value: 'Chemistry', label: 'Subject 3 name' },
  { section: 'subjects', field_key: 'subject_3_desc', value: 'Atoms, reactions and equations made simple and memorable.', label: 'Subject 3 desc', multiline: true },
  { section: 'subjects', field_key: 'subject_4_name', value: 'Accountancy', label: 'Subject 4 name' },
  { section: 'subjects', field_key: 'subject_4_desc', value: 'Bookkeeping, journal entries and accounts basics for senior classes.', label: 'Subject 4 desc', multiline: true },
  { section: 'subjects', field_key: 'subject_5_name', value: 'English & Social Studies', label: 'Subject 5 name' },
  { section: 'subjects', field_key: 'subject_5_desc', value: 'Reading, writing, comprehension and social science support.', label: 'Subject 5 desc', multiline: true },
  { section: 'subjects', field_key: 'subject_6_name', value: 'General Science', label: 'Subject 6 name' },
  { section: 'subjects', field_key: 'subject_6_desc', value: 'Concept-building for younger classes across science topics.', label: 'Subject 6 desc', multiline: true },
  { section: 'subjects', field_key: 'class_1_range', value: 'Classes 6–8', label: 'Class band 1' },
  { section: 'subjects', field_key: 'class_1_note', value: 'Foundation years', label: 'Class band 1 note' },
  { section: 'subjects', field_key: 'class_2_range', value: 'Classes 9–10', label: 'Class band 2' },
  { section: 'subjects', field_key: 'class_2_note', value: 'Board exam readiness', label: 'Class band 2 note' },
  { section: 'subjects', field_key: 'class_3_range', value: 'Classes 11–12', label: 'Class band 3' },
  { section: 'subjects', field_key: 'class_3_note', value: 'Senior subjects', label: 'Class band 3 note' },
  { section: 'subjects', field_key: 'cta', value: 'Ask about a specific subject', label: 'Button label' },

  // ---- Wants (For Every Student) ----
  { section: 'wants', field_key: 'eyebrow', value: 'For every student', label: 'Eyebrow' },
  { section: 'wants', field_key: 'heading', value: 'What I want for every student', label: 'Heading' },
  { section: 'wants', field_key: 'subtitle', value: 'Personal attention does more than cover the syllabus — it can gently uncover the small learning difficulties that often go unnoticed in a crowded classroom. That\u2019s where real progress begins.', label: 'Subtitle', multiline: true },
  { section: 'wants', field_key: 'want_1_title', value: 'Confidence to ask questions', label: 'Want 1 title' },
  { section: 'wants', field_key: 'want_1_text', value: 'I want every student to feel comfortable asking anything, without hesitation. Questions are how understanding begins.', label: 'Want 1 text', multiline: true },
  { section: 'wants', field_key: 'want_2_title', value: 'No fear of making mistakes', label: 'Want 2 title' },
  { section: 'wants', field_key: 'want_2_text', value: 'Mistakes are part of learning, not something to hide. In our sessions, they simply show us what to work on next.', label: 'Want 2 text', multiline: true },
  { section: 'wants', field_key: 'want_3_title', value: 'Strong understanding of fundamentals', label: 'Want 3 title' },
  { section: 'wants', field_key: 'want_3_text', value: 'When the basics are clear, everything built on top becomes easier. I make sure the foundations are truly solid.', label: 'Want 3 text', multiline: true },
  { section: 'wants', field_key: 'want_4_title', value: 'Learning at a comfortable pace', label: 'Want 4 title' },
  { section: 'wants', field_key: 'want_4_text', value: 'We move forward only when your child is ready — never at a speed set by a crowded classroom.', label: 'Want 4 text', multiline: true },
  { section: 'wants', field_key: 'want_5_title', value: 'Gradual academic improvement', label: 'Want 5 title' },
  { section: 'wants', field_key: 'want_5_text', value: 'Progress may be step by step, but it\u2019s honest and lasting. I value steady understanding over quick, shaky results.', label: 'Want 5 text', multiline: true },
  { section: 'wants', field_key: 'highlight_title', value: 'The quiet value of one-to-one', label: 'Highlight title' },
  { section: 'wants', field_key: 'highlight_text', value: 'In a large class, a small difficulty can quietly slip by. Sitting with one student, I notice the little hesitations — and we sort them out before they grow.', label: 'Highlight text', multiline: true },
  { section: 'wants', field_key: 'cta', value: 'Discuss your child on WhatsApp', label: 'Button label' },

  // ---- Outcomes ----
  { section: 'outcomes', field_key: 'eyebrow', value: 'Learning outcomes', label: 'Eyebrow' },
  { section: 'outcomes', field_key: 'heading', value: 'What I hope personal attention helps your child achieve', label: 'Heading' },
  { section: 'outcomes', field_key: 'subtitle', value: 'The goal isn\u2019t only better marks — it\u2019s a child who understands, enjoys the subject, and starts to believe in their own ability.', label: 'Subtitle', multiline: true },
  { section: 'outcomes', field_key: 'outcome_1_title', value: 'Clearer understanding', label: 'Outcome 1 title' },
  { section: 'outcomes', field_key: 'outcome_1_text', value: 'Concepts finally make sense. Children move from memorising to genuinely understanding the \u201Cwhy\u201D behind each topic.', label: 'Outcome 1 text', multiline: true },
  { section: 'outcomes', field_key: 'outcome_2_title', value: 'Steady improvement', label: 'Outcome 2 title' },
  { section: 'outcomes', field_key: 'outcome_2_text', value: 'With regular practice and revision, performance improves gradually and consistently over the term.', label: 'Outcome 2 text', multiline: true },
  { section: 'outcomes', field_key: 'outcome_3_title', value: 'Renewed confidence', label: 'Outcome 3 title' },
  { section: 'outcomes', field_key: 'outcome_3_text', value: 'As gaps close, hesitation fades. Children start answering in class and attempting problems on their own.', label: 'Outcome 3 text', multiline: true },
  { section: 'outcomes', field_key: 'outcome_4_title', value: 'Less exam anxiety', label: 'Outcome 4 title' },
  { section: 'outcomes', field_key: 'outcome_4_text', value: 'Familiar topics, guided practice and a calm approach help children face tests with far less stress.', label: 'Outcome 4 text', multiline: true },
  { section: 'outcomes', field_key: 'disclaimer', value: 'Every child is different, and progress depends on effort, starting level and consistency. My aim is always steady, honest understanding — not rushed results.', label: 'Disclaimer', multiline: true },

  // ---- Testimonials ----
  { section: 'testimonials', field_key: 'eyebrow', value: 'Testimonials', label: 'Eyebrow' },
  { section: 'testimonials', field_key: 'heading', value: 'Real parent voices from my Instagram', label: 'Heading' },
  { section: 'testimonials', field_key: 'subtitle', value: 'I share genuine parent experiences over on Instagram. Visit the page to see what families say about learning with me.', label: 'Subtitle', multiline: true },
  { section: 'testimonials', field_key: 'card_text', value: 'See what parents share about their child\u2019s journey with me on my Instagram page.', label: 'Card text', multiline: true },
  { section: 'testimonials', field_key: 'cta', value: 'Visit @irfan__tutor on Instagram', label: 'Instagram button label' },
  { section: 'testimonials', field_key: 'note', value: 'Prefer to talk directly? Enquiries are welcome on WhatsApp.', label: 'Note', multiline: true },
  { section: 'testimonials', field_key: 'whatsapp_label', value: 'Message on WhatsApp', label: 'WhatsApp button label' },

  // ---- Areas ----
  { section: 'areas', field_key: 'eyebrow', value: 'Service areas', label: 'Eyebrow' },
  { section: 'areas', field_key: 'heading', value: 'Looking for a tutor in your area?', label: 'Heading' },
  { section: 'areas', field_key: 'subtitle', value: 'I provide tuition in selected areas of Hyderabad, including Malakpet, Saidabad, Kishanbagh, Bahadurpura, Puranapool and Chanchalguda. Are you from a nearby locality? Just send me a WhatsApp message — I\u2019ll personally confirm whether I can provide tuition in your area.', label: 'Subtitle', multiline: true },
  { section: 'areas', field_key: 'note', value: "From a nearby locality that isn\u2019t listed here? Send me a message with your area and I\u2019ll personally confirm whether I can come there. Tuition in surrounding areas is always subject to confirmation.", label: 'Note', multiline: true },
  { section: 'areas', field_key: 'cta', value: 'Check Tuition Availability in My Area', label: 'Button label' },

  // ---- FAQ ----
  { section: 'faq', field_key: 'eyebrow', value: 'FAQ', label: 'Eyebrow' },
  { section: 'faq', field_key: 'heading', value: 'Questions parents often ask', label: 'Heading' },
  { section: 'faq', field_key: 'subtitle', value: 'Still have a question? A quick WhatsApp message is the fastest way to get a clear answer.', label: 'Subtitle', multiline: true },
  { section: 'faq', field_key: 'cta', value: 'Ask your question on WhatsApp', label: 'Button label' },

  // ---- Final CTA ----
  { section: 'finalcta', field_key: 'badge', value: 'Available on WhatsApp', label: 'Badge' },
  { section: 'finalcta', field_key: 'heading', value: 'Give your child the attention they deserve', label: 'Heading' },
  { section: 'finalcta', field_key: 'subtitle', value: 'Send me a quick WhatsApp message today. Tell me your child\u2019s class, subject and area — and we\u2019ll take it from there. I\u2019m happy to listen and help.', label: 'Subtitle', multiline: true },
  { section: 'finalcta', field_key: 'cta', value: "Let's Talk on WhatsApp", label: 'Button label' },

  // ---- Footer ----
  { section: 'footer', field_key: 'tagline', value: 'Personal Attention. Better Understanding. Brighter Futures. One-to-one home tuition for children across Hyderabad.', label: 'Tagline', multiline: true },
  { section: 'footer', field_key: 'bottom_note', value: 'Home tuition in Hyderabad · Maths & Science tutor · Enquiries on WhatsApp', label: 'Bottom note' },
];

// Quick lookup: default value for a (section, field_key).
export const DEFAULT_CONTENT_MAP: Record<string, string> = Object.fromEntries(
  DEFAULT_CONTENT.map((f) => [`${f.section}.${f.field_key}`, f.value])
);

export function defaultFor(section: string, fieldKey: string): string {
  return DEFAULT_CONTENT_MAP[`${section}.${fieldKey}`] ?? '';
}
