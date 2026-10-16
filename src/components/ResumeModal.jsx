import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

const ResumeModal = ({ onClose }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect mobile/touch device — iframes don't render PDFs well on mobile
        setIsMobile(navigator.maxTouchPoints > 0 && window.innerWidth < 768);

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    const modal = (
        <LazyMotion features={domAnimation}>
            <AnimatePresence>
                <m.div
                    key="resume-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm"
                    onClick={onClose}
                />

                <m.div
                    key="resume-modal"
                    initial={{ opacity: 0, y: 50, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.97 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-x-4 top-[4vh] bottom-[4vh] z-[101] max-w-5xl mx-auto
                        bg-white dark:bg-gray-900
                        border border-slate-200 dark:border-gray-700
                        rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Resume Preview"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-200 dark:border-gray-700 flex-shrink-0">
                        <div className="flex items-center gap-2.5">
                            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                                <FileText size={18} className="text-cyan-500" />
                            </div>
                            <div>
                                <h2 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                                    Resume Preview
                                </h2>
                                <p className="text-xs text-slate-500 dark:text-gray-400">
                                    Prem Shankar Rai — Full Stack Developer
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <a
                                href="/MyResume.pdf"
                                download
                                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white
                                    bg-gradient-to-r from-cyan-500 to-blue-500
                                    hover:shadow-md hover:shadow-cyan-500/25 transition-all duration-200"
                            >
                                <Download size={14} />
                                Download
                            </a>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-xl text-slate-500 dark:text-gray-400
                                    hover:bg-slate-100 dark:hover:bg-gray-800
                                    border border-slate-200 dark:border-gray-700
                                    transition-all duration-200"
                                aria-label="Close resume preview"
                            >
                                <X size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-hidden bg-slate-100 dark:bg-gray-800">
                        {isMobile ? (
                            // Mobile fallback — PDF iframes unreliable on mobile browsers
                            <div className="flex flex-col items-center justify-center h-full gap-6 p-8 text-center">
                                <div className="p-6 rounded-2xl bg-white dark:bg-gray-700/60 border border-slate-200 dark:border-gray-600 shadow-sm">
                                    <FileText size={48} className="text-cyan-500 mx-auto mb-4" />
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                                        Open Resume
                                    </h3>
                                    <p className="text-slate-600 dark:text-gray-400 text-sm mb-6">
                                        For the best viewing experience on mobile, open the PDF in your browser or download it.
                                    </p>
                                    <div className="flex flex-col gap-3">
                                        <a
                                            href="/MyResume.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white
                                                bg-gradient-to-r from-cyan-500 to-blue-500"
                                        >
                                            <ExternalLink size={16} />
                                            Open in Browser
                                        </a>
                                        <a
                                            href="/MyResume.pdf"
                                            download
                                            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold
                                                text-slate-700 dark:text-gray-200
                                                bg-slate-100 dark:bg-gray-700
                                                border border-slate-200 dark:border-gray-600"
                                        >
                                            <Download size={16} />
                                            Download PDF
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // Desktop — embed PDF directly
                            <iframe
                                src="/MyResume.pdf#toolbar=1&navpanes=0&scrollbar=1&view=FitH"
                                title="Prem Shankar Rai Resume"
                                className="w-full h-full"
                                style={{ border: 'none' }}
                            />
                        )}
                    </div>
                </m.div>
            </AnimatePresence>
        </LazyMotion>
    );

    return createPortal(modal, document.body);
};

export default ResumeModal;
