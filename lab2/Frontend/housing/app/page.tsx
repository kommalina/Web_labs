import styles from './page.module.css';
export default function Home() {
  return (
    <div className={styles.main}>
      <h1>Top Housing</h1>
      <br/>
      <h2>Добро пожаловать на сайт агенства недвижимости &quot;Top Housing&quot;</h2>
      
      <div className={styles.images}>
      <img src="/images/house1.jpg" alt="Image 1" className={styles.image} /> 
      <img src="/images/house2.jpg" alt="Image 2" className={styles.image} />
      <img src="/images/house3.jpg" alt="Image 3" className={styles.image} />
      </div>

    </div>
  );
}
