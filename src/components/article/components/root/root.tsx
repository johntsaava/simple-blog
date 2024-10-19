import classes from './root.module.css';

export const Root: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <article className={classes.articleRoot}>{children}</article>;
};
