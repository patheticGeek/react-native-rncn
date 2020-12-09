import React, { useContext } from "react"
import { Pressable as RNPressable, PressableProps } from "react-native"
import { StylesContext } from "../context"

/**
 * @typedef CustomPressablePropsExtention
 * @property {string|string[]} [className] Class names to apply
 *
 * @typedef {CustomPressablePropsExtention | PressableProps} CustomPressableProps
 */

/**
 * A wrapper for react-native Pressable with className
 * @param {CustomPressableProps} props
 */
export default function Pressable({ className, style, children, ...props }) {
  const classnames = useContext(StylesContext)

  if (typeof className === "object") {
    className = className.map((cn) => (cn ? cn : "")).join(" ")
  }

  const styles = [...className.split(" ").map((cn) => classnames[cn]), style]

  return (
    <RNPressable style={styles} android_ripple={{ color: "#e7e7e7" }} {...props}>
      {children}
    </RNPressable>
  )
}

Pressable.defaultProps = {
  className: ""
}
