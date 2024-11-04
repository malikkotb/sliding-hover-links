"use client";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import ListElement from "./link";

const menu = [
  {
    title: "Projects",
    description: "To See Everything",
    images: ["projects1.jpg", "projects2.jpg"],
  },
  {
    title: "Agence",
    description: "To Learn Everything",
    images: ["agence1.jpg", "agence2.jpg"],
  },
  {
    title: "Contact",
    description: "To Send a FAX",
    images: ["contact1.jpg", "contact2.jpg"],
  },
];

export default function index() {
  return (
    <motion.div className={styles.menu}>
      <div className={styles.body}>
        {menu.map((el, index) => {
          return <ListElement data={el} index={index} key={index} />;
        })}
      </div>
    </motion.div>
  );
}
