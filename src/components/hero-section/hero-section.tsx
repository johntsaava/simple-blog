import classes from "./hero-section.module.css";

export const HeroSection: React.FC = () => {
  return (
    <section className={classes.heroSectionRoot}>
      <h2 className={classes.title}>Welcome to My Blog</h2>
      <p>Sharing thoughts, stories, and experiences</p>
    </section>
  );
};
