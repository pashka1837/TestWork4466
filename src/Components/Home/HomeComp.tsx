"use client";

import { SearchForm } from "./SearchForm";

export function HomeComp() {
  return (
    <div
      className="container-fluid p-2 p-md-3 p-lg-4"
      style={{ height: "100dvh" }}
    >
      <SearchForm />
    </div>
  );
}
