import clsx from "clsx";
import classes from "./styles.module.scss";

export interface MainButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  hovered?: boolean;
}

export const MainButton: React.FC<MainButtonProps> = ({
  title,
  hovered,
  className,
  children,
  color = "",
  ...rest
}) => {
  return (
    <div
      className={clsx(classes.MainButton)}
    >
      {children ? (
        children
      ) : (
        <div className={classes.titleWrapper} >
          <div id="target-1" className={clsx(
            classes.target,
            hovered ? classes.targetActive : classes.targetDisabled
          )}>• {title}</div>

          <div id="target-2" className={clsx(
            classes.target,
            !hovered ? classes.targetActive : classes.targetDisabled
          )}>{title}</div>
        </div>
      )}
    </div>
  );
};

export default MainButton;
