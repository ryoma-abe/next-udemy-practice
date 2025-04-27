("use server");

import { ContactSchema } from "@/validations/contact";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

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
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

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
  // DB
  // メールアドレスが存在しているかの確認
  const existingRecord = await prisma.contact.findUnique({
    where: { email: email },
  });

  if (existingRecord) {
    return {
      success: false,
      errors: {
        name: [],
        email: ["このアドレスはすでに登録されています"],
      },
    };
  }
  await prisma.contact.create({
    data: { name, email },
  });
  console.log({ name, email });
  redirect("/contacts/complete");
}
