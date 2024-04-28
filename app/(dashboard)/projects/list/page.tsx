import Link from "next/link";
import styles from "./projects.module.css";

export default function Home() {
  return (
    <main>
      <h1>ProjectsList</h1>

      <ul className={styles.ul}>
        <li>
          <Link href="/projects/jobit">Jobit</Link>
        </li>
        <li>
          <Link href="/projects/carrent">Car Rent</Link>
        </li>
        <li>
          <Link href="/projects/hipnode">hipnode</Link>
        </li>
      </ul>
    </main>
  );
}
