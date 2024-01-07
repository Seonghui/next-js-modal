"use client";
import "./../app/globals.css";
import styles from "./styles.module.css";

import Link from "next/link";

export default function Page() {
  const items = Array(100)
    .fill("")
    .map((v, i) => i + 1);

  console.log(items);

  return (
    <main>
      <div>
        {items.map((item, index) => {
          return (
            <div key={index} className={styles.wrap}>
              <Link href={`/items/${item}`}>open {item} modal</Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
