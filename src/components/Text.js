import React, { useContext } from "react"
import { Text as RNText, TextProps } from "react-native"
import { StylesContext } from "../context"

/**
 * @typedef CustomTextPropsExtention
 * @property {string|string[]} [className] Class names to apply
 *
 * @typedef {CustomTextPropsExtention | TextProps} CustomTextProps
 */

/**
 * A wrapper for react-native View with className
 * @param {CustomTextProps} props
 */
export default function Text({ className, style, children, ...props }) {
  const classnames = useContext(StylesContext)

  if (typeof className === "object") {
    className = className.map((cn) => (cn ? cn : "")).join(" ")
  }

  const styles = [classnames["textDefault"], ...className.split(" ").map((cn) => classnames[cn]), style]

  return (
    <RNText style={styles} {...props}>
      {children}
    </RNText>
  )
}

Text.defaultProps = {
  className: ""
}
