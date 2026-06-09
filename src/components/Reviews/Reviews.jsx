import { FaStar, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./Reviews.module.css";

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

const reviews = [
  {
    name: "Aprameya Krishna",
    text: "One of the best dessert spots in the city already! The owner really knows his craft and you can feel his passion in every detail.",
  },
  {
    name: "Amarnath Krishnan",
    text: "One of the best spots to chill out near Athipalayam Pirivu. The ambience is excellent and the food quality is top-notch.",
  },
  {
    name: "Shakthi B",
    text: "One of the greatest spots for dessert lovers. Hot chocolate is a must try!",
  },
  {
    name: "Pavithra Selvarajan",
    text: "Absolutely loved the gelato here! They use real fruits and you can taste the freshness.",
  },
  {
    name: "Len Lenin",
    text: "Classic Tres Leches was extraordinary and Strawberry Pudding is amazing.",
  },
  {
    name: "Mohammed Irfan",
    text: "Absolutely delicious chicken momos. Fresh, flavorful and totally satisfying.",
  },
];

function Reviews() {
  return (
    <section id="reviews" className={styles.reviews}>
      <motion.div
  className={styles.left}
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
          Testimonials
        </span>

        <h2>
          What Our
          <span> Customers </span>
          Say
        </h2>

        <p>
          Loved by dessert lovers across
          Coimbatore. From handcrafted gelatos
          to rich hot chocolates, our customers
          keep coming back for more.
        </p>

        <motion.div
  className={styles.rating}
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
    delay: 0.4,
    duration: 0.6,
  }}
>
          <FaStar />
          <span>4.9 Google Rating</span>
        </motion.div>
      </motion.div>

      <motion.div
  className={styles.right}
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
        <div className={styles.reviewTrack}>
          {[...reviews, ...reviews].map(
            (review, index) => (
              <div
                key={index}
                className={styles.card}
              >
                <FaQuoteRight
                  className={styles.quote}
                />

                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p>{review.text}</p>

                <div className={styles.user}>
                  <div className={styles.avatar}>
                    {review.name.charAt(0)}
                  </div>

                  <h4>{review.name}</h4>
                </div>
              </div>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default Reviews;