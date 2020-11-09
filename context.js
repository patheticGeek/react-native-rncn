import React from "react"

const StylesContext = React.createContext({})

const StylesProvider = StylesContext.Provider
const StylesConsumer = StylesContext.Consumer

export { StylesContext, StylesProvider, StylesConsumer }
