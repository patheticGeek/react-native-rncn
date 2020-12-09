import React, { useContext } from "react"
import { TouchableOpacity as RNTouchableOpacity, TouchableOpacityProps } from "react-native"
import { StylesContext } from "../context"

/**
 * @typedef CustomTouchableOpacityPropsExtention
 * @property {string|string[]} [className] Class names to apply
 *
 * @typedef {CustomTouchableOpacityPropsExtention | TouchableOpacityProps} CustomTouchableOpacityProps
 */

/**
 * A wrapper for react-native View with className
 * @param {CustomTouchableOpacityProps} props
 */
export default function TouchableOpacity({ className, style, children, ...props }) {
  const classnames = useContext(StylesContext)

  if (typeof className === "object") {
    className = className.map((cn) => (cn ? cn : "")).join(" ")
  }

  const styles = [...className.split(" ").map((cn) => classnames[cn]), style]

  return (
    <RNTouchableOpacity style={styles} activeOpacity={0.75} {...props}>
      {children}
    </RNTouchableOpacity>
  )
}

TouchableOpacity.defaultProps = {
  className: ""
}
