"use client";

import { useEffect, useRef } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  returnFocusRef: React.RefObject<HTMLButtonElement | null>;
};

export default function Modal({
  isOpen,
  onClose,
  returnFocusRef,
}: ModalProps) {
  const firstFocusableRef = useRef<HTMLButtonElement>(null);
  const lastFocusableRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const returnFocusElement = returnFocusRef.current;

    firstFocusableRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const first = firstFocusableRef.current;
      const last = lastFocusableRef.current;

      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      returnFocusElement?.focus();
    };
  }, [isOpen, onClose, returnFocusRef]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 p-4"
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg"
      >
        <h2 id="modal-title" className="text-xl font-bold">
          Accessible Modal
        </h2>

        <p className="mt-3 text-gray-600">
          Press Tab to move between buttons and Escape to close the dialog.
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            ref={firstFocusableRef}
            type="button"
            onClick={onClose}
            className="rounded bg-gray-200 px-4 py-2"
          >
            Cancel
          </button>

          <button
            ref={lastFocusableRef}
            type="button"
            onClick={onClose}
            className="rounded bg-blue-600 px-4 py-2 text-white"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}