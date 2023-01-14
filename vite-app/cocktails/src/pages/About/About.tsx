import styles from "./About.module.css";

function About(): JSX.Element {
  return (
    <section className={styles.aboutSection}>
      <h1 className="section-title">about us</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
        temporibus dicta repellendus unde reprehenderit quam modi totam eos!
        Iure doloremque eveniet quam mollitia! Ducimus, impedit cum provident
        itaque animi corrupti!
      </p>
    </section>
  );
}

export default About;
