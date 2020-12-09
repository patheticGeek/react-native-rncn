import React, { useContext } from "react"
import { ScrollView as RNScrollView, ScrollViewProps } from "react-native"
import { StylesContext } from "../context"

/**
 * @typedef CustomScrollViewPropsExtention
 * @property {string|string[]} [className] Class names to apply
 *
 * @typedef {CustomScrollViewPropsExtention | ScrollViewProps} CustomScrollViewProps
 */

/**
 * A wrapper for react-native View with className
 * @param {CustomScrollViewProps} props
 */
export default function ScrollView({ className, contentContainerClassName, contentContainerStyle, style, children, ...props }) {
  const classnames = useContext(StylesContext)

  if (typeof className === "object") {
    className = className.map((cn) => (cn ? cn : "")).join(" ")
  }

  if (typeof contentContainerClassName === "object") {
    contentContainerClassName = contentContainerClassName.map((cn) => (cn ? cn : "")).join(" ")
  }

  const styles = [...className.split(" ").map((cn) => classnames[cn]), style]
  const contentContainerStyles = [...contentContainerClassName.split(" ").map((cn) => classnames[cn]), contentContainerStyle]

  return (
    <RNScrollView style={styles} contentContainerStyle={contentContainerStyles} {...props}>
      {children}
    </RNScrollView>
  )
}

ScrollView.defaultProps = {
  className: "",
  contentContainerClassName: ""
}
