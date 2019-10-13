import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const store = useSelector(store => store);
  return (
    <>
      <h1>Home Page</h1>
      <pre>{JSON.stringify(store)}</pre>
    </>
  );
}
