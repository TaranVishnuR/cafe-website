import {
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

import styles from "./Footer.module.css";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function Footer() {
  return (
    <footer className={styles.footer}>
      <motion.div
  className={styles.content}
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: false,
    amount: 0.2,
  }}
  transition={{
    duration: 0.8,
  }}
>
        

        <h3>
          Crafting Sweet Memories
          <span> One Scoop At A Time</span>
        </h3>

        <p>
          Freshly scooped happiness with handcrafted
          desserts, gelatos, thick shakes and munchies
          in Coimbatore.
        </p>

        <div className={styles.actions}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
            Instagram
          </a>

          <a href="tel:7373483838">
            <FaPhoneAlt />
            Call Now
          </a>
        </div>

        <motion.div
  className={styles.info}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: false }}
  transition={{ delay: 0.2 }}
>
          <div className={styles.infoCard}>
            <FaMapMarkerAlt />
            <span>
              Saravanampatti, Coimbatore
            </span>
          </div>

          <div className={styles.infoCard}>
            <FaPhoneAlt />
            <span>
              +91 73734 83838
            </span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
  className={styles.bottom}
  initial={{
    opacity: 0,
    y: 30,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: false,
  }}
  transition={{
    duration: 0.8,
    delay: 0.2,
  }}
>
        <p>
          © {new Date().getFullYear()}
          {" "}
          Chill & Swirl. All Rights Reserved.
        </p>

        <p className={styles.credit}>
          Made with
          <FaHeart />
          by Taran Vishnu
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;