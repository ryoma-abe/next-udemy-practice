"use server";

import { ContactSchema } from "@/validations/contact";
import { redirect } from "next/navigation";

// ActionStateの型定義
type ActionState = {
  success: boolean;
  errors: {
    name?: string[];
    email?: string[];
  };
  serverError?: string;
};

export async function submitContactForm(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = formData.get("name");
  const email = formData.get("email");

  const validationResult = ContactSchema.safeParse({ name, email });
  if (!validationResult.success) {
    const errors = validationResult.error.flatten().fieldErrors;
    console.log("サーバー側でエラーが発生", errors);
    return {
      success: false,
      errors: {
        name: errors.name || [],
        email: errors.email || [],
      },
    };
  }
  console.log({ name, email });
  redirect("/contacts/complete");
}
