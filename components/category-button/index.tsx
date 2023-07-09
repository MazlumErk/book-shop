import Link from "next/link";
import CategoryList from "../category-list";

interface ButtonProps {
  label: string;
  adres: string;
  list: any[];
}

export default function CategoryButton(props: ButtonProps) {
  const { label, adres, list } = props;
  return (
    <div className="category-button">
      <Link href={adres}>{label}</Link>
      <CategoryList list={list} />
    </div>
  );
}
