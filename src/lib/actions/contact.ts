"use server";

import { redirect } from "next/navigation";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");

  console.log({ name, email });
  redirect("/contact/complete");
}
