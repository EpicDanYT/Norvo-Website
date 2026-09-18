"use client";

import { useState } from "react";
import { faq } from "@/content/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-line border-y border-line">
      {faq.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="text-xl font-semibold text-white sm:text-2xl">{item.q}</span>
              <span
                className={`display shrink-0 text-2xl text-amber transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && <p className="body-text max-w-2xl pb-7">{item.a}</p>}
          </li>
        );
      })}
    </ul>
  );
}
