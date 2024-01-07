"use client";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import { useEffect } from "react";

export default function Page(props: { params: { id: string } }) {
  const router = useRouter();
  const { id } = props.params;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header} />
        <div className={styles.body}>
          <div>modal</div>
          <div>{id}</div>
        </div>
        <div className={styles.footer}>
          <button className={styles.button} onClick={() => router.back()}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
