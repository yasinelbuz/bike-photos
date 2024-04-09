/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import { useEffect, useState } from "react";
import Image from "./component/Image";
import styles from "./page.module.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Home() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetch("https://bike-photos.vercel.app/api")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <b>bike</b> photos
          <br />
          <br />
          <a href="https://x.com/yasinelbuz" target="_blank">
            @yasinelbuz
          </a>
        </div>
        <div className={styles.content}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1250: 3 }}
          >
            <Masonry gutter="20px" columnsCount={3}>
              {data?.bikes?.map((bike: any, index: number) => {
                return <Image key={index} ImageUrl={bike?.imageUrl} />;
              })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  );
}
