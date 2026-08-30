"use client";

import { useRef, useState } from "react";

const tabs = [
  {
    id: "overview",
    label: "Overview",
    content: "This is the Overview tab content.",
  },
  {
    id: "details",
    label: "Details",
    content: "This is the Details tab content.",
  },
  {
    id: "settings",
    label: "Settings",
    content: "This is the Settings tab content.",
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function selectTab(index: number) {
    setActiveTab(index);
    tabRefs.current[index]?.focus();
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) {
    let nextIndex = index;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      nextIndex = (index + 1) % tabs.length;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    }

    if (event.key === "Home") {
      event.preventDefault();
      nextIndex = 0;
    }

    if (event.key === "End") {
      event.preventDefault();
      nextIndex = tabs.length - 1;
    }

    if (nextIndex !== index) {
      selectTab(nextIndex);
    }
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold">Accessible Tabs</h2>

      <div
        role="tablist"
        aria-label="Example tabs"
        className="mt-6 flex gap-2 border-b"
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={activeTab === index}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => selectTab(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={`px-4 py-2 font-medium ${
              activeTab === index
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab, index) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={activeTab !== index}
          tabIndex={0}
          className="mt-6 rounded-lg border p-6"
        >
          <p>{tab.content}</p>
        </div>
      ))}
    </section>
  );
}