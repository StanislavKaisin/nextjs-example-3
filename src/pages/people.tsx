import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";

const People = ({ names }: PeopleProps) => {
  return (
    <div>
      <h1>people page</h1>
      {names.map((name) => (
        <h2 key={name}>{name}</h2>
      ))}
      <Link href="/">
        <a>
          <pre>{"<= Home page"}</pre>
        </a>
      </Link>
    </div>
  );
};

export default People;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return { props: { names: ["john", "mike", "bruno"] } };
};

export interface PeopleProps {
  names: string[];
}
