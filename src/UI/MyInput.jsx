import React from "react";
import styles from "./MyInput.module.css";

const MyInput = (props) => {
  return <input className={styles.MyInput} {...props} type="text" />;
};

export default MyInput;
