import Link from "next/link";

interface ListButtonProps {
  href: string;
  label: string;
}

export default function LisrButton(props: ListButtonProps) {
  const { href, label } = props;
  return (
    <Link className="list-button" href={href}>
      {label}
    </Link>
  );
}
