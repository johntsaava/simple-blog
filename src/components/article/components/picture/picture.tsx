import classes from './picture.module.css';

type PictureProps = React.ComponentProps<'img'>;

export const Picture: React.FC<PictureProps> = ({ className, ...props }) => {
  return <img className={[classes.pictureRoot, className].join(' ')} {...props} />;
};
