import SignUp from "@/components/form/SignUp";
import React from "react";
import styles from "./Sign.module.css";
const Page = () => {
  return (
    <div className={styles.body}>
      <SignUp />;
    </div>
  );
};

export default Page;
