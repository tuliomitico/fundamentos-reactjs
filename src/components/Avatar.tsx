import type { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>  {
  hasBorder?: boolean;
}

/**
 * 
 * @typedef {Object} Props
 * @prop {string} src
 * @prop {boolean} hasBorder
 */

/**
 * @param {AvatarProps} props
 * @returns {import("react").JSX.Element}
 */
export function Avatar({ hasBorder = true, ...props }: AvatarProps): React.JSX.Element {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
