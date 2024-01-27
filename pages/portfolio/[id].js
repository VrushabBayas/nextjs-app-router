import { useRouter } from "next/router";
import React from "react";

export default function DynamicPage() {
  const router = useRouter();
  const { id } = router.query;
  return <div>DynamicPage - {id}</div>;
}
