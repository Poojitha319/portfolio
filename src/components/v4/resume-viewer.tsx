"use client";

import { useDialog } from "@/lib/use-dialog";
import { opensResumeInline } from "@/lib/v4-logic";
import { Download, ExternalLink, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const RESUME = "/resume.pdf";
const DOWNLOAD_NAME = "Sai_Poojitha_Sajjavarapu_Resume.pdf";
const noopSubscribe = () => () => {};

function ResumeDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  useDialog(open, onClose, dialogRef, closeRef);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-dialog-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 z-[70] flex h-[90vh] w-[min(92vw,880px)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border bg-card shadow-2xl"
          >
            <div className="flex items-center justify-between gap-4 border-b px-5 py-3">
              <h2 id="resume-dialog-title" className="font-mono text-sm text-foreground">
                <span className="text-primary">~/</span>résumé.pdf
              </h2>
              <div className="flex items-center gap-1">
                <a href={RESUME} download={DOWNLOAD_NAME} className="btn-outline btn-sm mr-2 gap-2">
                  <Download className="size-3.5" aria-hidden />
                  Download
                </a>
                <a
                  href={RESUME}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open résumé in a new tab"
                  className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                >
                  <ExternalLink className="size-4" />
                </a>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>
            <iframe src={`${RESUME}#navpanes=0&view=FitH`} title="Sai Poojitha's résumé" className="h-full w-full flex-1 bg-white" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// A real link to /resume.pdf. A plain click on desktop opens it in the in-page viewer;
// everything else (phones, Cmd/Ctrl/Shift-click, middle-click) behaves like a normal link.
export default function ResumeLink({
  className,
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  // true in the browser, false during server rendering (document.body only exists client-side).
  const isClient = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const close = useCallback(() => setOpen(false), []);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const wide = window.matchMedia("(min-width: 768px)").matches;
    if (!opensResumeInline(e, wide)) return;
    e.preventDefault();
    setOpen(true);
  };

  return (
    <>
      <a href={RESUME} target="_blank" rel="noopener noreferrer" onClick={onClick} className={className} style={style}>
        {children}
      </a>
      {isClient && createPortal(<ResumeDialog open={open} onClose={close} />, document.body)}
    </>
  );
}
