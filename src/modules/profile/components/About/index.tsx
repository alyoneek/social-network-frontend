import { FC } from "react";

import { AiOutlineFieldTime } from "react-icons/ai";
import { TbSchool } from "react-icons/tb";
import { TfiLocationPin } from "react-icons/tfi";

import styles from "./about.module.scss";

const About: FC = () => {
  return (
    <div className={styles.about}>
      <div className={styles.item}>
        <AiOutlineFieldTime className={styles.icon} />
        <span>Возраст: 19</span>
      </div>
      <div className={styles.item}>
        <TfiLocationPin className={styles.icon} />
        <span>Город: Санкт-Петербург</span>
      </div>
      <div className={styles.item}>
        <TbSchool className={styles.icon} />
        <span>Вуз: ИТМО</span>
      </div>
    </div>
  );
};

export default About;
