import React, { useContext } from "react"
import RNLinearGradient, { LinearGradientProps } from "react-native-linear-gradient"
import { StylesContext } from "../context"

/**
 * @typedef CustomLinearGradientPropsExtention
 * @property {string|string[]} [className] Class names to apply
 * @property {Array<string>} [colors] Array of colors for gradient
 * @property {number|'to right'|'to left'|'to bottom'|'to top'|'to top right'|'to top left'|'to bottom left'|'to bottom right'} [direction] Direction of gradient
 * @property {{ x: number, y: number }} [gradientCenter] Center of gradient
 *
 * @typedef {CustomLinearGradientPropsExtention | LinearGradientProps} CustomLinearGradientProps
 */

/**
 * A wrapper for react-native-linear-gradient LinearGradient with className
 * @param {CustomLinearGradientProps} props
 */
export default function LinearGradient({ direction, grdientCenter, className, style, children, ...props }) {
  const classnames = useContext(StylesContext)

  if (typeof className === "object") {
    className = className.map((cn) => (cn ? cn : "")).join(" ")
  }

  const styles = [...className.split(" ").map((cn) => classnames[cn]), style]

  if (direction) {
    props.useAngle = true
    props.angleCenter = grdientCenter || { x: 0.5, y: 0.5 }
    props.angle = 0
    if (direction === "to top right") {
      props.angle = 45
    } else if (direction === "to top left") {
      props.angle = 315
    } else if (direction === "to bottom right") {
      props.angle = 115
    } else if (direction === "to bottom left") {
      props.angle = 205
    } else if (direction === "to right") {
      props.angle = 90
    } else if (direction === "to left") {
      props.angle = 270
    } else if (direction === "to top") {
      props.angle = 0
    } else if (direction === "to bottom") {
      props.angle = 180
    } else if (typeof direction === "number") {
      props.angle = direction
    }
  }

  return (
    <RNLinearGradient style={styles} {...props}>
      {children}
    </RNLinearGradient>
  )
}

LinearGradient.defaultProps = {
  className: ""
}
