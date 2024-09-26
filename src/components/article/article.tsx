import classes from "./article.module.css";

export const Article: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <article className={classes.root}>{children}</article>;
};
