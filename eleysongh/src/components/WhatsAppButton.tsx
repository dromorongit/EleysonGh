import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+233XXXXXXXXX';
  const message = encodeURIComponent('Hello, I\'m interested in your engineering services. Can we discuss my project?');

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </Link>
  );
};

export default WhatsAppButton;