import ClientComponent from "@/components/ClientComponent";
import Link from "next/link";

export default function ServerComponent() {
  return (
    <div>
      <p>サーバー</p>
      <ClientComponent />
      <Link href="/about">About</Link>
    </div>
  );
}
