import { useRouter } from "next/router";
import React from "react";

export default function SelectedClientProject() {
  const router = useRouter();
  console.log(router.query);
  return <h1>Selected Client Project specific to client</h1>;
}
