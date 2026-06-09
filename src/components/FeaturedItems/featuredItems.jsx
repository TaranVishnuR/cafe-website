import { FaArrowRight } from "react-icons/fa";
import styles from "./FeaturedItems.module.css";
import featuredItems from "../../data/featuredData";

function FeaturedItems() {
  return (
    <section className={styles.featured}>
      <div className={styles.heading}>
        <span>Customer Favorites</span>

        <h2>Most Loved Desserts</h2>

        <p>
          Discover the treats our customers keep
          coming back for.
        </p>
      </div>

      <div className={styles.slider}>
        <div className={styles.track}>
          {[...featuredItems, ...featuredItems].map(
            (item, index) => (
              <div
                key={index}
                className={styles.item}
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

                <h3>{item.name}</h3>
              </div>
            )
          )}
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <a href="#menu" className={styles.menuBtn}>
          View Full Menu
          <FaArrowRight />
        </a>
      </div>
    </section>
  );
}

export default FeaturedItems;