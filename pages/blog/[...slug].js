import { useRouter } from "next/router";
import React from "react";

export default function BlogPostPage() {
  const { query } = useRouter();
  console.log("query: ", query);
  return <h1>The Blog Post Page</h1>;
}
