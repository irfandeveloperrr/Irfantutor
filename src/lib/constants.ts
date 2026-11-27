export const WHATSAPP_NUMBER = '918297406171';
export const WHATSAPP_DISPLAY = '+91 8297 40 6171';
export const INSTAGRAM_URL = 'https://www.instagram.com/irfan__tutor/';

// A friendly, consistent default enquiry message in the tutor's own voice.
export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello Irfan, I'm looking for tuition for my child. Could you please share the details?";

export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

// Area-specific WhatsApp link that prefills the locality name in the message.
export function areaWhatsAppLink(area: string): string {
  const message = `Hello Irfan, I am looking for tuition for my child. We live in ${area}. Could you please confirm whether you provide tuition in our area?`;
  return whatsappLink(message);
}

// Generic "check availability" link (parent fills in their own area).
export const AREA_AVAILABILITY_LINK = whatsappLink(
  'Hello Irfan, I am looking for tuition for my child. We live in [Your Area]. Could you please confirm whether you provide tuition in our area?'
);
