"use client";

import Link from "next/link";

interface ListButtonProps {
  href: string;
  label: string;
}

export default function ListButton(props: ListButtonProps) {
  const { href, label } = props;
  return (
    <Link className="list-button" href={href} >
      {label}
    </Link>
  );
}