import React, { useContext } from "react"
import { Image as RNImage, ImageProps } from "react-native"
import { StylesContext } from "../context"

/**
 * @typedef CustomImagePropsExtention
 * @property {string|string[]} [className] Class names to apply
 *
 * @typedef {CustomImagePropsExtention | ImageProps} CustomImageProps
 */

/**
 * A wrapper for react-native View with className
 * @param {CustomImageProps} props
 */
export default function Image({ className, style, ...props }) {
  const classnames = useContext(StylesContext)

  if (typeof className === "object") {
    className = className.map((cn) => (cn ? cn : "")).join(" ")
  }

  const styles = [...className.split(" ").map((cn) => classnames[cn]), style]

  return <RNImage style={styles} {...props} />
}

Image.defaultProps = {
  className: ""
}
