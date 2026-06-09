import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaInstagram,
  FaDirections,
} from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";

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

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <motion.div
  className={styles.content}
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
        <span className={styles.tag}>
          Visit Us
        </span>

        <h2>
          Visit Chill & Swirl
          <span> Today</span>
        </h2>

        <p className={styles.description}>
          Fresh gelatos, thick shakes, hot chocolates,
          desserts and munchies waiting for you in
          Saravanampatti. Come experience handcrafted
          treats made fresh every day.
        </p>

        <div className={styles.infoCards}>
          <div className={styles.infoCard}>
            <div className={styles.icon}>
              <FaMapMarkerAlt />
            </div>

            <div>
              <h4>Address</h4>

              <p>
                86/3 Athipalayam Road,
                Saravanampatti,
                Coimbatore - 641035
              </p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.icon}>
              <FaPhoneAlt />
            </div>

            <div>
              <h4>Call Us</h4>

              <p>+91 73734 83838</p>
            </div>
          </div>

          <motion.div
  className={styles.infoCard}
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
    duration: 0.5,
  }}
>
            <div className={styles.icon}>
              <FaClock />
            </div>

            <div>
              <h4>Opening Hours</h4>

              <p>Open Daily • 12 PM Onwards</p>
            </div>
          </motion.div>
        </div>

        <motion.div
  className={styles.buttons}
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
    duration: 0.6,
    delay: 0.4,
  }}
>
          <a
            href="tel:7373483838"
            className={styles.primaryBtn}
          >
            <FaPhoneAlt />
            Call Now
          </a>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className={styles.secondaryBtn}
          >
            <FaDirections />
            Directions
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className={styles.outlineBtn}
          >
            <FaInstagram />
            Instagram
          </a>
        </motion.div>

        
      </motion.div>

      <motion.div
  className={styles.mapSection}
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
        <div className={styles.mapHeading}>
          <h3 className={styles.mapTitle}>
           <FaMapMarkedAlt />
           Find Us Easily
          </h3>

          <p>
            Located in the heart of
            Saravanampatti, Coimbatore.
          </p>
        </div>

        <div className={styles.mapContainer}>
          <iframe
            title="Chill & Swirl Location"
            src="https://maps.google.com/maps?q=86/3%20Athipalayam%20Road%20Saravanampatti%20Coimbatore&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;