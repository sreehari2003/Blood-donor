import React from "react";
import styles from "./quote.module.scss";
import { BiDonateBlood } from "react-icons/bi";
const Quotes = () => {
  return (
    <div className={`${styles.qt}`}>
      <div className={`${styles.qtbox}`}>
        <h2>
          <BiDonateBlood />
        </h2>
        <blockquote>
          &quot;Excuses never save a life, Blood donation does&quot;
        </blockquote>
      </div>
    </div>
  );
};

export default Quotes;
