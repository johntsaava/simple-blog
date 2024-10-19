import classes from "./main.module.css";

export const Main: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <main className={classes.mainRoot}>{children}</main>;
};
