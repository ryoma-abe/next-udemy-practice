import { getContact, getContacts } from "@/lib/contact";

export default async function ListPage() {
  const contacts = await getContacts();
  const first = await getContact("1");
  return (
    <div>
      複数
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.email}:{contact.name}
          </li>
        ))}
      </ul>
      1件
      <div>{first ? first.name : "登録されていません"}</div>
    </div>
  );
}
