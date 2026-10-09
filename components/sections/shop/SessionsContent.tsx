"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, CreditCard, ShieldCheck } from "lucide-react";
import type { SessionsPageData, SessionItem, PaymentInstructions } from "@/types/sessions";

interface SessionsContentProps {
  data: SessionsPageData;
}

export function SessionsContent({ data }: SessionsContentProps) {
  const [selectedItem, setSelectedItem] = useState<SessionItem | null>(null);

  const handleBuyNow = (item: SessionItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-[860px] px-4 sm:px-6 space-y-10 sm:space-y-12">
        {/* Render Sessions Groups */}
        {data.groups.map((group, gIdx) => (
          <div key={group.id} className="space-y-4">
            {/* Group Header */}
            <div className={gIdx === 0 ? "border-t border-[#dfdfdf] pt-4" : "border-t border-[#dfdfdf] pt-6"}>
              <h2 className="text-[16px] sm:text-[17.5px] font-bold text-[#17193b] leading-snug">
                {group.heading}
              </h2>
              {group.description && (
                <p className="text-[13.5px] sm:text-[14px] text-[#484552] mt-1.5 leading-relaxed">
                  {group.description}
                </p>
              )}
            </div>

            {/* Items List */}
            <div className="divide-y divide-[#ececec]">
              {group.items.map((item) => (
                <div key={item.id} className="py-4 sm:py-5 space-y-1.5">
                  <p className="text-[14px] sm:text-[15px] font-bold text-[#d2537c]">
                    {item.itemNumber}
                  </p>
                  <h3 className="text-[15.5px] sm:text-[16.5px] font-semibold text-[#d2537c]">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-3.5 pt-1.5">
                    <span className="text-[13.5px] sm:text-[14px] text-[#3e3b47] font-medium">
                      Price: {item.price}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleBuyNow(item)}
                      className="cursor-pointer px-5 sm:px-6 py-1.5 rounded-full bg-gradient-to-r from-[#f04c94] via-[#e24587] to-[#d23875] text-[#ffe24a] text-xs sm:text-[13px] font-bold shadow-[0_4px_12px_rgba(230,76,148,0.35)] hover:brightness-105 hover:shadow-[0_6px_16px_rgba(230,76,148,0.45)] transition-all transform active:scale-95"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Payment Instructions Notice Box matching screenshot */}
            {group.showPaymentNoticeAfter && (
              <PaymentNoticeBox instructions={data.paymentInstructions} />
            )}
          </div>
        ))}

        {/* Section 3: Assisting the Death Process Note */}
        <div className="border-t border-[#dfdfdf] pt-6 space-y-2.5">
          <h2 className="text-[16px] sm:text-[17px] font-bold text-[#17193b]">
            {data.deathProcessNote.heading}
          </h2>
          <p className="text-[13.5px] sm:text-[14px] text-[#3e3b47] leading-relaxed">
            {data.deathProcessNote.priceNote}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1 text-[13.5px] sm:text-[14px] text-[#3e3b47]">
            <span className="font-medium">{data.deathProcessNote.prompt}</span>
            <Link
              href={data.deathProcessNote.buttonHref}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f04c94] via-[#e24587] to-[#d23875] px-6 py-2 text-xs sm:text-[13px] font-bold text-[#ffe24a] shadow-[0_4px_12px_rgba(230,76,148,0.35)] transition-all hover:brightness-105 hover:shadow-[0_6px_16px_rgba(230,76,148,0.45)] focus:outline-none"
            >
              {data.deathProcessNote.buttonText}
            </Link>
          </div>
        </div>
      </div>

      {/* Checkout / Payment Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl p-6 sm:p-7 border border-neutral-200"
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-4 right-4 p-1 rounded-full text-neutral-400 hover:text-neutral-800 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <div className="border-b border-neutral-100 pb-3">
                  <span className="text-xs font-semibold text-[#d2537c] uppercase tracking-wider">
                    {selectedItem.itemNumber}
                  </span>
                  <h3 className="text-lg font-bold text-[#17193b] mt-0.5">
                    {selectedItem.title}
                  </h3>
                  <p className="text-xl font-bold text-[#d2537c] mt-1">
                    {selectedItem.price}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-[#17193b] uppercase tracking-wider">
                    Select Payment Method
                  </h4>

                  <div className="space-y-2.5 text-xs text-neutral-700">
                    <div className="p-3 rounded-lg border border-neutral-200 bg-neutral-50/70 hover:border-[#d2537c] transition-colors">
                      <p className="font-semibold text-neutral-900 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#d2537c]" />
                        1. Zelle Transfer
                      </p>
                      <p className="text-neutral-600 mt-1 pl-5.5">
                        Send to: <strong className="text-neutral-900">daniel@giniol.com</strong>
                      </p>
                      <p className="text-[11px] text-neutral-500 mt-0.5 pl-5.5">
                        * Please note &ldquo;{selectedItem.itemNumber}&rdquo; in the comment section.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg border border-neutral-200 bg-neutral-50/70 hover:border-[#d2537c] transition-colors">
                      <p className="font-semibold text-neutral-900 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#d2537c]" />
                        2. Venmo
                      </p>
                      <p className="text-neutral-600 mt-1 pl-5.5">
                        Account: <strong className="text-neutral-900">@Daniel-Metraux-1</strong> (Verification digits: <strong>9202</strong>)
                      </p>
                      <p className="text-[11px] text-neutral-500 mt-0.5 pl-5.5">
                        * Please mention &ldquo;{selectedItem.itemNumber}&rdquo; in the comment section.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg border border-neutral-200 bg-neutral-50/70 hover:border-[#d2537c] transition-colors">
                      <p className="font-semibold text-neutral-900 flex items-center gap-1.5">
                        <CreditCard className="w-4 h-4 text-[#d2537c]" />
                        3. PayPal / Credit Card
                      </p>
                      <p className="text-neutral-600 mt-1 pl-5.5">
                        Pay securely with your PayPal account or any credit/debit card.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Secure Payment Processing</span>
                  </div>
                  <Link
                    href={`/contact?session=${selectedItem.id}`}
                    onClick={closeModal}
                    className="px-6 py-2 rounded-full text-[#ffe24a] text-xs sm:text-[13px] font-bold bg-gradient-to-r from-[#f04c94] via-[#e24587] to-[#d23875] hover:brightness-105 shadow-[0_4px_12px_rgba(230,76,148,0.35)] transition-all"
                  >
                    Confirm & Contact
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function PaymentNoticeBox({ instructions }: { instructions: PaymentInstructions }) {
  return (
    <div className="my-8 mx-auto max-w-[620px] rounded-xs border-2 border-[#e85472] bg-[#fff6f7] p-5 sm:p-6 text-center select-text">
      <h3 className="text-xs sm:text-[13px] font-semibold text-[#2c3e50] leading-snug">
        {instructions.heading}
      </h3>
      <p className="text-xs sm:text-[13px] font-medium text-[#2c3e50] mb-3">
        {instructions.subheading}
      </p>

      <ol className="text-xs sm:text-[12.5px] text-[#2c3e50] text-left mx-auto max-w-[500px] space-y-2 list-decimal pl-5">
        {instructions.methods.map((method, idx) => (
          <li key={idx} className="leading-relaxed">
            <span className="font-semibold text-[#1c2e40]">{method.name}</span>{" "}
            <span>{method.detail}</span>
            {method.note && (
              <span className="block text-[11px] text-[#555] mt-0.5">
                {method.note}
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
