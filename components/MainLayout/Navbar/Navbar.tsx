import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Link href="/">
        <a>CHAUY ICON</a>
      </Link>
      <Link href="/choices">
        <a>CHOICES</a>
      </Link>
    </div>
  );
};

export default Navbar