import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Phone, Copy, Mail, Check, ArrowUpRight, X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber: string;
  email: string;
  phoneCopied: boolean;
  emailCopied: boolean;
  onCopyPhone: () => void;
  onCopyEmail: () => void;
  onCall: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  phoneNumber,
  email,
  phoneCopied,
  emailCopied,
  onCopyPhone,
  onCopyEmail,
  onCall,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-md bg-white dark:bg-brand-darkCard rounded-3xl shadow-2xl transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </button>

        {/* Content */}
        <div className="p-4 md:p-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-brand-black dark:text-white mb-2">
              Let's Connect
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Choose how you'd like to reach out
            </p>
          </div>

          <div className="space-y-5">
            {/* Phone Number Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-5 bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-white/5 dark:to-white/10 rounded-2xl border border-gray-200/50 dark:border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 dark:from-brand-orange/30 dark:to-brand-orange/20 rounded-2xl shadow-sm">
                    <Phone className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">
                      Phone
                    </p>
                    <p className="font-bold text-sm md:text-lg text-brand-black dark:text-white">
                      {phoneNumber}
                    </p>
                  </div>
                </div>
                <button
                  onClick={onCopyPhone}
                  className="p-2.5 hover:bg-white/50 dark:hover:bg-white/10 rounded-xl transition-all hover:scale-110 active:scale-95"
                  title="Copy phone number"
                >
                  {phoneCopied ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  )}
                </button>
              </div>

              <button
                onClick={onCall}
                className="w-full flex items-center justify-center gap-3 bg-brand-black dark:bg-white text-white dark:text-brand-black px-6 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm md:text-lg">Call Now</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>

            {/* Email Section */}
            <div className="flex items-center justify-between p-5 bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-white/5 dark:to-white/10 rounded-2xl border border-gray-200/50 dark:border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-500/10 dark:from-blue-500/30 dark:to-blue-500/20 rounded-2xl shadow-sm">
                  <Mail className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">
                    Email
                  </p>
                  <p className="font-bold text-sm md:text-lg text-brand-black dark:text-white">
                    {email}
                  </p>
                </div>
              </div>
              <button
                onClick={onCopyEmail}
                className="p-2.5 hover:bg-white/50 dark:hover:bg-white/10 rounded-xl transition-all hover:scale-110 active:scale-95"
                title="Copy email"
              >
                {emailCopied ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ContactModal;
