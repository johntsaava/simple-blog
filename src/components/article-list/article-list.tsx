import classes from "./article-list.module.css";

export const ArticleList: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <section className={classes.articleListRoot}>{children}</section>;
};
