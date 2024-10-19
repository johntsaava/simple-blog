import classes from './container.module.css';

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={classes.containerRoot}>{children}</div>;
};
