import CategoryButton from "../category-button";
import Logo from "../logo";

const headerButtons = [
  {
    label: "Home",
    href: "/home",
    listItems: [],
  },
  {
    label: "Pages",
    href: "/home",
    listItems: [
      { title: "Home", pages: [{ label: "Home", href: "/home" }] },
      {
        title: "Others",
        pages: [
          { label: "404", href: "/wrong-url" },
          { label: "About Us", href: "about-us" },
        ],
      },
    ],
  },
];

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <div>
        {headerButtons.map((item) => (
          <CategoryButton
            list={item.listItems}
            key={item.label}
            label={item.label}
            adres={item.href}
          />
        ))}
      </div>
    </header>
  );
}
