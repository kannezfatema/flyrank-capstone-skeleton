"use client";

import { useRef, useState } from "react";
import Modal from "../../playground/components/Modal";
import Tabs from "../../playground/components/Tabs";
import Disclosure from "../../playground/components/Disclosure";

export default function PlaygroundPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Accessibility Playground
        </p>

        <h1 className="mt-4 text-4xl font-bold">
          Interactive Components
        </h1>

        {/* Modal Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Modal Dialog</h2>

          <button
            ref={openButtonRef}
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="mt-4 rounded bg-blue-600 px-4 py-2 font-medium text-white"
          >
            Open Modal
          </button>

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            returnFocusRef={openButtonRef}
          />
        </section>

        {/* Tabs Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Tabs</h2>

          <div className="mt-4">
            <Tabs />
          </div>
        </section>

        {/* Disclosure Section */}
        <section className="mt-16">
          <Disclosure />
        </section>
      </div>
    </main>
  );
}