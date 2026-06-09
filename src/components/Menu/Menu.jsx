import { motion } from "framer-motion";
import styles from "./Menu.module.css";
import menuData from "../../data/menuData";

function Menu() {
  return (
    <section id="menu" className={styles.menu}>
      <div className={styles.heading}>
        <span>Our Menu</span>

        <h2>Sweet Treats & Munchies</h2>

        <p>
          Handcrafted desserts, thick shakes,
          hot chocolates and munchies made
          fresh for every craving.
        </p>
      </div>

      <div className={styles.menuGrid}>
        {menuData.map((section, index) => (
          <motion.div
            key={index}
            className={styles.menuCategory}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
            }}
          >
            <div className={styles.categoryTitle}>
              {section.category}
            </div>

            <div className={styles.itemList}>
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className={styles.item}
                >
                  <span>{item.name}</span>

                  <strong>
                    ₹{item.price}
                  </strong>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Menu;