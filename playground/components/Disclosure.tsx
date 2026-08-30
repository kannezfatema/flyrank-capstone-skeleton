"use client";

import { useId, useState } from "react";

export default function Disclosure() {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold">Accessible Disclosure</h2>

      <div className="mt-6">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={() => setIsOpen(!isOpen)}
          className="rounded bg-gray-200 px-4 py-2 font-medium"
        >
          {isOpen ? "Hide details" : "Show details"}
        </button>

        {isOpen && (
          <div
            id={contentId}
            className="mt-4 rounded-lg border p-6"
          >
            <p>
              This disclosure contains additional information that can be
              shown or hidden using the button above.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}