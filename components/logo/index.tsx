interface LogoProps {
  className?: string;
}

export default function Logo(props: LogoProps) {
  const { className = "logo-light" } = props;
  return <h1 className={className}>Book Shop</h1>;
}