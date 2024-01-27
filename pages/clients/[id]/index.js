import { useRouter } from "next/router";
import React from "react";

export default function ClientsProjects() {
  const router = useRouter();
  function loadProjectHandler() {
    // load data...
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  }
  return (
    <>
      <h1>Projects of given clients</h1>
      <button onClick={loadProjectHandler}>Load Projects</button>
    </>
  );
}
