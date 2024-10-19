import classes from './info.module.css';

export const Info: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={classes.infoRoot}>{children}</div>;
};
