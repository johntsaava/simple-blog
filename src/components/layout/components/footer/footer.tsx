import classes from "./footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={classes.footerRoot}>
      © {new Date().getFullYear()} Simple Blog. All Rights Reserved
    </footer>
  );
};
