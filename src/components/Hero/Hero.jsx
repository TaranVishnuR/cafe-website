import {
  FaArrowRight,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { LuIceCreamCone } from "react-icons/lu";
import { MdVerified } from "react-icons/md";
import { TbMilkshake } from "react-icons/tb";

import { motion } from "framer-motion";

import styles from "./Hero.module.css";

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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* LEFT CONTENT */}

      <motion.div
        className={styles.content}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.3,
        }}
      >
        <motion.span
          variants={fadeLeft}
          transition={{ duration: 0.6 }}
          className={styles.badge}
        >
          <LuIceCreamCone />
          Best Dessert Shop in Coimbatore
        </motion.span>

        <motion.h1
          variants={fadeLeft}
          transition={{ duration: 0.7 }}
        >
          Freshly Scooped
          <span> Happiness </span>
          Every Day
        </motion.h1>

        {/* MOBILE IMAGE */}

        <div className={styles.mobileImageWrapper}>
          <div className={styles.mobileCircle}></div>

          <motion.img
            variants={fadeRight}
            transition={{ duration: 0.8 }}
            src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=900"
            alt="Chill & Swirl Dessert"
            className={styles.mobileHeroImage}
          />
        </div>

        <motion.p
          variants={fadeLeft}
          transition={{ duration: 0.7 }}
        >
          Indulge in handcrafted ice creams, thick shakes,
          hot chocolates, desserts and munchies made to
          satisfy every craving.
        </motion.p>

        <motion.div
          variants={fadeLeft}
          transition={{ duration: 0.8 }}
          className={styles.buttons}
        >
          <a href="#menu" className={styles.primaryBtn}>
            Explore Menu
            <FaArrowRight />
          </a>

          <a href="#contact" className={styles.secondaryBtn}>
            <FaMapMarkerAlt />
            Visit Store
          </a>
        </motion.div>

        <motion.div
          variants={fadeLeft}
          transition={{ duration: 0.8 }}
          className={styles.stats}
        >
          <div>
            <h3>4.9★</h3>
            <span>Google Rating</span>
          </div>

          <div>
            <h3>50+</h3>
            <span>Dessert Options</span>
          </div>

          <div>
            <h3>100%</h3>
            <span>Fresh Ingredients</span>
          </div>
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}

      <motion.div
        className={styles.imageSection}
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.3,
        }}
        transition={{
          duration: 0.9,
        }}
      >
        <div className={styles.circle}></div>

        <motion.img
          src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=900"
          alt="Chill & Swirl Dessert"
          className={styles.heroImage}
          whileHover={{
            scale: 1.03,
          }}
          transition={{
            duration: 0.3,
          }}
        />

        <motion.div
          className={styles.floatingCard}
          initial={{
            opacity: 0,
            y: -20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            delay: 0.4,
          }}
        >
          <MdVerified />
          Premium Desserts
        </motion.div>

        <motion.div
          className={styles.floatingCard2}
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            delay: 0.6,
          }}
        >
          <TbMilkshake />
          Thick Shakes
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;