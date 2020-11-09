import React, { useContext } from "react"
import { View as RNView, ViewProps } from "react-native"
import { StylesContext } from "../context"

/**
 * @typedef CustomViewPropsExtention
 * @property {string|string[]} [className] Class names to apply
 *
 * @typedef {CustomViewPropsExtention | ViewProps} CustomViewProps
 */

/**
 * A wrapper for react-native View with className
 * @param {CustomViewProps} props
 */
export default function View({ className, style, children, ...props }) {
  const classnames = useContext(StylesContext)

  if (typeof className === "object") {
    className = className.map((cn) => (cn ? cn : "")).join(" ")
  }

  const styles = [...className.split(" ").map((cn) => classnames[cn]), style]

  return (
    <RNView style={styles} {...props}>
      {children}
    </RNView>
  )
}

View.defaultProps = {
  className: ""
}
