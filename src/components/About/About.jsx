import {
  FaIceCream,
  FaLeaf,
} from "react-icons/fa";

import { GiFruitBowl } from "react-icons/gi";
import { MdLocalCafe } from "react-icons/md";

import { motion } from "framer-motion";

import styles from "./About.module.css";

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

function About() {
  return (
    <section id="about" className={styles.about}>
      {/* DESKTOP IMAGE */}
      <motion.div
        className={styles.imageSection}
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1200"
          alt="Cafe Interior"
          className={styles.aboutImage}
        />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        className={styles.content}
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <span className={styles.sectionTag}>
          About Chill & Swirl
        </span>

        <h2>
          Crafting Desserts
          <span> Worth </span>
          Remembering
        </h2>

        {/* MOBILE IMAGE */}
        <div className={styles.mobileImage}>
          <img
            src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1200"
            alt="Cafe Interior"
            className={styles.mobileAboutImage}
          />
        </div>

        <p>
          Chill & Swirl is a destination for dessert lovers
          in Coimbatore. Every scoop, shake and dessert is
          carefully crafted using quality ingredients,
          authentic recipes and fresh flavours.
        </p>

        <p>
          From Italian-style gelato thick shakes to rich hot
          chocolates and signature desserts, every visit is
          designed to bring a smile and create a memorable
          experience.
        </p>

        <div className={styles.stats}>
          <div className={styles.card}>
            <FaIceCream />
            <span>25+ Flavours</span>
          </div>

          <div className={styles.card}>
            <GiFruitBowl />
            <span>Real Fruit Gelato</span>
          </div>

          <div className={styles.card}>
            <MdLocalCafe />
            <span>Hot Chocolate Speciality</span>
          </div>

          <div className={styles.card}>
            <FaLeaf />
            <span>Freshly Made Daily</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;