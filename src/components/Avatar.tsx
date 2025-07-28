import styles from "./Avatar.module.css";

type AvatarProps = {
  src: string;
  hasBorder?: boolean;
  alt?: string;
}
/**
 * @typedef {Object} Props
 * @prop {string} src
 * @prop {boolean} hasBorder
 */

/**
 * @param {AvatarProps} props
 * @returns {import("react").JSX.Element}
 */
export function Avatar({ hasBorder = true, src, alt }: AvatarProps): React.JSX.Element {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  );
}
