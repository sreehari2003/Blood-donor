import styles from "../styles/index.module.scss";
import type { NextPage } from "next";
import Quotes from "../components/Quotes";
import Form from "../components/Form";

const Home: NextPage = () => {
  return (
    <div className={`${styles.box}`}>
      <Quotes />
      <Form />
    </div>
  );
};

export default Home;
