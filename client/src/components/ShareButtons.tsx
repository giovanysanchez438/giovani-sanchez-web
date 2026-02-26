import { Linkedin, Twitter, Facebook, MessageCircle, Link2, Copy } from "lucide-react";
import { useState } from "react";

/**
 * Share Buttons Component
 * 
 * Diseño: Minimalismo Corporativo Elegante
 * - Botones para compartir en redes sociales
 * - Copiar enlace al portapapeles
 * - Iconos limpios y profesionales
 */

interface ShareButtonsProps {
  title: string;
  url: string;
  description?: string;
}

export default function ShareButtons({ title, url, description }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-semibold text-gray-700">Compartir:</span>
      
      <div className="flex gap-3">
        {/* LinkedIn */}
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full transition-smooth duration-200 hover:shadow-md"
          title="Compartir en LinkedIn"
        >
          <Linkedin size={18} />
        </a>

        {/* Twitter */}
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-sky-100 hover:bg-sky-500 text-sky-600 hover:text-white rounded-full transition-smooth duration-200 hover:shadow-md"
          title="Compartir en Twitter"
        >
          <Twitter size={18} />
        </a>

        {/* Facebook */}
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-indigo-100 hover:bg-indigo-600 text-indigo-600 hover:text-white rounded-full transition-smooth duration-200 hover:shadow-md"
          title="Compartir en Facebook"
        >
          <Facebook size={18} />
        </a>

        {/* WhatsApp */}
        <a
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-green-100 hover:bg-green-600 text-green-600 hover:text-white rounded-full transition-smooth duration-200 hover:shadow-md"
          title="Compartir en WhatsApp"
        >
          <MessageCircle size={18} />
        </a>

        {/* Copy Link */}
        <button
          onClick={handleCopyLink}
          className={`p-2 rounded-full transition-smooth duration-200 hover:shadow-md ${
            copied
              ? "bg-green-100 text-green-600"
              : "bg-gray-100 hover:bg-gray-300 text-gray-600 hover:text-gray-800"
          }`}
          title="Copiar enlace"
        >
          {copied ? <Link2 size={18} /> : <Copy size={18} />}
        </button>
      </div>
    </div>
  );
}
