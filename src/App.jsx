import styles from "./App.module.css";

export const App = () => {
  return (
    <main className={styles.card}>
      <img
        src="/image-qr-code.png"
        alt="Scan the QR code to visit frontend mentor website"
        className={styles.image}
      />
      <div className={styles.text}>
        <h1 className={styles.title}>
          Improve your front-end skills by building projects
        </h1>
        <p className={styles.description}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </main>
  );
};
