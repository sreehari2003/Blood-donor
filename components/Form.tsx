import styles from "./Form.module.scss";
import React from "react";

const Form = () => {
  return (
    <div className={`${styles.formBox}`}>
      <div className={`${styles.txt}`}>
        <h2>Setup your Donor Account</h2>
      </div>
    </div>
  );
};

export default Form;
