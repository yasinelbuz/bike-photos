/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "./image.module.css";

export default function Image({ ImageUrl }: { ImageUrl: string }) {
  return (
    <div className={styles.photo}>
      <img src={ImageUrl} />
    </div>
  );
}
