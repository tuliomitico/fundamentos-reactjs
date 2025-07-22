import styles from "./Avatar.module.css";

/**
 * @typedef {Object} Props
 * @prop {string} src
 * @prop {boolean} hasBorder
 */

/**
 *
 * @param {Props} props
 * @returns {import("react").JSX.Element}
 */
export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt="avatar"
    />
  );
}
