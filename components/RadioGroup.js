import React, { ReactChild } from "react"
import View from "./View"
import Text from "./Text"
import Pressable from "./Pressable"
import { theme } from "../constants"

/**
 * @typedef RadioGroupProps
 * @property {string|string[]} [className] Class names applied to container
 * @property {string|string[]} [buttonClassName] Class names applied to button
 * @property {string|string[]} [labelClassName] Class names applied to label
 * @property {string|string[]} [radioClassName] Class names applied to radio
 * @property {string|string[]} [selectedButtonClassName] Class names applied to button when selected
 * @property {string|string[]} [selectedLabelClassName] Class names applied to label when selected
 * @property {string|string[]} [selectedRadioClassName] Class names applied to radio when selected
 * @property {ReactChild} [labelComponent] Component to replace the label component with
 * @property {ReactChild} [radioComponent] Component to replace the radio component with
 * @property {(string|number)} [value] Value of current option selected
 * @property {VoidFunction} [onChangeValue] On change value
 * @property {number} [size] Size of radio
 * @property {string} [color] Selected color of radio
 * @property {*} [buttonProps] Props for pressable component
 * @property {{label: string, value: (string|number)}[]} [options] Class names applied to container
 *
 */

/**
 * Use for radio buttons component
 * @param {RadioGroupProps} props
 */
export default function RadioGroup({
  className,
  buttonClassName,
  labelClassName,
  radioClassName,
  selectedButtonClassName,
  selectedLabelClassName,
  selectedRadioClassName,
  buttonComponent,
  labelComponent,
  radioComponent,
  onChangeValue,
  options,
  value,
  size,
  color,
  buttonProps,
  ...props
}) {
  return (
    <View className={["mgv12", className]} {...props}>
      {options.map((option) => {
        const isSelected = value === option.value
        return buttonComponent ? (
          buttonComponent({ isSelected, option })
        ) : (
          <Pressable
            key={option.value}
            onPress={() => onChangeValue(option)}
            className={["flexRow alignItemsCenter pdh8 pdv6", buttonClassName, isSelected && selectedButtonClassName]}
            {...buttonProps}
          >
            {radioComponent ? (
              radioComponent({ isSelected, option })
            ) : (
              <View
                className={["border2 alignItemsCenter justifyContentCenter pd4"]}
                style={{
                  width: size,
                  height: size,
                  borderRadius: theme.sizes.borderRadiusPill,
                  borderColor: isSelected ? theme.colors[color] || color : theme.colors["muted"]
                }}
              >
                <View
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: theme.sizes.borderRadiusPill,
                    backgroundColor: isSelected ? theme.colors[color] || color : theme.colors["transparent"]
                  }}
                />
              </View>
            )}
            {labelComponent ? (
              labelComponent({ isSelected, option })
            ) : (
              <Text className={["h5 mgl8", labelClassName, isSelected && selectedLabelClassName]}>{option.label}</Text>
            )}
          </Pressable>
        )
      })}
    </View>
  )
}

RadioGroup.defaultProps = {
  options: [],
  onChangeValue: () => {},
  value: "",
  size: 20,
  color: "primary"
}
