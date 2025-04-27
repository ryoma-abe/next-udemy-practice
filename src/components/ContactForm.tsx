"use client";

import { submitContactForm } from "@/lib/actions/contact";
import { ContactSchema } from "@/validations/contact";
import { useActionState, useState } from "react";
import { z } from "zod";

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, {
    success: false,
    errors: {},
  });
  const [clientErrors, setClientErrors] = useState({ name: "", email: "" });
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    try {
      if (name === "name") {
        ContactSchema.pick({ name: true }).parse({ name: value });
      } else if (name === "email") {
        ContactSchema.pick({ email: true }).parse({ email: value });
      }
      setClientErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessage = error.errors[0]?.message || "";
        setClientErrors((prev) => ({
          ...prev,
          [name]: errorMessage,
        }));
      }
    }
  };
  return (
    <div className="py-24 text-gray-600">
      <form
        action={formAction}
        className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow"
      >
        <h2 className="text-2xl font-semibold mb-6">お問い合わせ</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            名前
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onBlur={handleBlur}
            className="w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none"
          />
          {state.errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {state.errors.name.join(".")}
            </p>
          )}
          {clientErrors.name && (
            <p className="text-red-500 text-sm mt-1">{clientErrors.name}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onBlur={handleBlur}
            className="w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none"
          />
          {state.errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {state.errors.email.join(".")}
            </p>
          )}
          {clientErrors.email && (
            <p className="text-red-500 text-sm mt-1">{clientErrors.email}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
        >
          送信
        </button>
      </form>
    </div>
  );
}
