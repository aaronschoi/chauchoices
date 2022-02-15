import Link from "next/link";

import styles from "../../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
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