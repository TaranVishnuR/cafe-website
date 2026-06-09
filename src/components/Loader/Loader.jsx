import { motion } from "framer-motion";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <motion.div
      className={styles.loader}
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className={styles.bubble1}></div>
      <div className={styles.bubble2}></div>
      <div className={styles.bubble3}></div>

      <div className={styles.iceCreamWrapper}>
        {/* Cup */}
        <motion.div
          className={styles.cup}
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
          }}
        >
          <motion.span
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 1.2,
              duration: 0.4,
            }}
          >
            C&S
          </motion.span>
        </motion.div>

        {/* Ice Cream */}
        <motion.div
          className={styles.swirl}
          initial={{
            y: -200,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
        >
          <div className={styles.top}></div>
          <div className={styles.middle}></div>
          <div className={styles.bottom}></div>

          <motion.div
            className={`${styles.topping} ${styles.t1}`}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          />

          <motion.div
            className={`${styles.topping} ${styles.t2}`}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          />

          <motion.div
            className={`${styles.topping} ${styles.t3}`}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          />
        </motion.div>
      </div>

      <motion.div
        className={styles.content}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.4,
          duration: 0.5,
        }}
      >
        <h1>CHILL & SWIRL</h1>
        <p>Freshly Scooped Happiness</p>
      </motion.div>
    </motion.div>
  );
}

export default Loader;