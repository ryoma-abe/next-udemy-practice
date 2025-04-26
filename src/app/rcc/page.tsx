"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ClientComponent() {
  const [count, setCount] = useState(0);
  const router = useRouter();
  console.log("ClientComponent");

  return (
    <div>
      <p>ClientComponent</p>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <Link href="/about">About</Link>
      <button onClick={() => router.push("/about")} className="p-4 bg-red-100">ABOUT</button>
    </div>
  );
}
