import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/233XXXXXXXXX" // Replace with actual number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6 group-hover:scale-110 transition-transform" />
      <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-primary-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}