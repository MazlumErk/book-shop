import Link from "next/link";
import { ReactNode } from "react";

interface ContactButtonProps {
  icon: ReactNode;
  link: string;
  label: string;
}

export default function ContactButton(props: ContactButtonProps) {
  const { icon, link, label } = props;
  return (
    <div className="contact-button">
      {icon}
      <Link rel="stylesheet" href={link} >{label}</Link>
    </div>
  );
}
