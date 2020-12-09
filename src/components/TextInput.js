import React, { useContext } from "react"
import { TextInput as RNTextInput, TextInputProps } from "react-native"
import { theme } from "../constants"
import { StylesContext } from "../context"

/**
 * @typedef CustomTextInputPropsExtention
 * @property {string|string[]} [className] Class names to apply
 * @property {'brand'|'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'|'white'|'muted'|'transparent'} [placeholderColor] Color of placeholder text
 *
 * @typedef {TextInputProps | CustomTextInputPropsExtention} CustomTextInputProps
 */

/**
 * A wrapper for react-native TextInput with className
 * @param {CustomTextInputProps} props
 */
export default function TextInput({ className, style, placeholderColor, children, ...props }) {
  const classnames = useContext(StylesContext)

  if (typeof className === "object") {
    className = className.map((cn) => (cn ? cn : "")).join(" ")
  }

  const styles = [...className.split(" ").map((cn) => classnames[cn]), style]

  return <RNTextInput style={styles} placeholderTextColor={theme.colors[placeholderColor] || placeholderColor} {...props} />
}

TextInput.defaultProps = {
  className: ""
}
