import Link from "next/link";
import React from "react";

export default function ClientPage() {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manual", name: "Manual" },
    { id: "vrush", name: "Vrushabh" },
  ];
  return (
    <>
      <h1>Main ClientPage</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
