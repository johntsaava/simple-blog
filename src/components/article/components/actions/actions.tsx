import classes from './actions.module.css';

export const Actions: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={classes.actionsRoot}>{children}</div>;
};
