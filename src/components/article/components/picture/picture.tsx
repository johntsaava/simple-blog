import classes from './picture.module.css';

type PictureProps = React.ComponentProps<'img'>;

export const Picture: React.FC<PictureProps> = ({ className, ...props }) => {
  return (
    <div className={classes.pictureRoot}>
      <img className={[classes.pictureImg, className].join(' ')} {...props} />
    </div>
  );
};
