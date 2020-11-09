import { StyleSheet } from "react-native"
import { defaultTheme } from "./constants"

/**
 * Create a styles object
 * @param {{ colors: { brand: string, primary: string, secondary: string, success: string, danger: string, warning: string, info: string, light: string, dark: string, white: string, muted: string, transparent: string, borderColor: string, transducent: string }, sizes: { borderRadiusRounded: number, borderRadiusRoundedSm: number, borderRadiusRoundedLg: number, borderRadiusPill: number } }} theme The theme object to apply
 */
export default (theme = defaultTheme) =>
  StyleSheet.create({
    // flex
    flexRow: {
      flexDirection: "row"
    },
    row: {
      flexDirection: "row",
      marginHorizontal: -8
    },
    col: {
      flex: 1,
      marginHorizontal: 8
    },
    flexWrap: {
      flexWrap: "wrap"
    },
    flex1: { flex: 1 },
    flex2: { flex: 2 },
    flex3: { flex: 3 },
    flex4: { flex: 4 },
    flex5: { flex: 5 },
    flex6: { flex: 6 },
    flex7: { flex: 7 },
    flex8: { flex: 8 },
    flex9: { flex: 9 },
    flex10: { flex: 10 },
    flex11: { flex: 11 },
    flex12: { flex: 12 },
    alignItemsCenter: {
      alignItems: "center"
    },
    alignItemsStart: {
      alignItems: "flex-start"
    },
    alignItemsEnd: {
      alignItems: "flex-end"
    },
    alignItemsStretch: {
      alignItems: "stretch"
    },
    justifyContentCenter: {
      justifyContent: "center"
    },
    justifyContentStart: {
      justifyContent: "flex-start"
    },
    justifyContentEnd: {
      justifyContent: "flex-end"
    },
    justifyContentEvenly: {
      justifyContent: "space-evenly"
    },
    justifyContentBetween: {
      justifyContent: "space-between"
    },
    justifyContentAround: {
      justifyContent: "space-around"
    },
    centerAll: {
      alignItems: "center",
      justifyContent: "center"
    },
    // width & height autogenrated
    width25: { width: "25%" },
    height25: { height: "25%" },
    width33: { width: "33%" },
    height33: { height: "33%" },
    width50: { width: "50%" },
    height50: { height: "50%" },
    width66: { width: "66%" },
    height66: { height: "66%" },
    width75: { width: "75%" },
    height75: { height: "75%" },
    width100: { width: "100%" },
    height100: { height: "100%" },
    // backgrounds
    bgPrimary: {
      backgroundColor: theme.colors.primary
    },
    bgSecondary: {
      backgroundColor: theme.colors.secondary
    },
    bgSuccess: {
      backgroundColor: theme.colors.success
    },
    bgDanger: {
      backgroundColor: theme.colors.danger
    },
    bgWarning: {
      backgroundColor: theme.colors.warning
    },
    bgInfo: {
      backgroundColor: theme.colors.info
    },
    bgLight: {
      backgroundColor: theme.colors.light
    },
    bgDark: {
      backgroundColor: theme.colors.dark
    },
    bgWhite: {
      backgroundColor: theme.colors.white
    },
    bgTransparent: {
      backgroundColor: theme.colors.transparent
    },
    bgMuted: {
      backgroundColor: theme.colors.muted
    },
    bgBrand: {
      backgroundColor: theme.colors.brand
    },
    bgTransducent: {
      backgroundColor: theme.colors.transducent
    },
    // border width
    border0: { borderWidth: 0 },
    borderTop0: { borderTopWidth: 0 },
    borderBottom0: { borderBottomWidth: 0 },
    borderRight0: { borderRightWidth: 0 },
    borderLeft0: { borderLeftWidth: 0 },
    border1: { borderWidth: 1 },
    borderTop1: { borderTopWidth: 1 },
    borderBottom1: { borderBottomWidth: 1 },
    borderRight1: { borderRightWidth: 1 },
    borderLeft1: { borderLeftWidth: 1 },
    border2: { borderWidth: 2 },
    borderTop2: { borderTopWidth: 2 },
    borderBottom2: { borderBottomWidth: 2 },
    borderRight2: { borderRightWidth: 2 },
    borderLeft2: { borderLeftWidth: 2 },
    border4: { borderWidth: 4 },
    borderTop4: { borderTopWidth: 4 },
    borderBottom4: { borderBottomWidth: 4 },
    borderRight4: { borderRightWidth: 4 },
    borderLeft4: { borderLeftWidth: 4 },
    border6: { borderWidth: 6 },
    borderTop6: { borderTopWidth: 6 },
    borderBottom6: { borderBottomWidth: 6 },
    borderRight6: { borderRightWidth: 6 },
    borderLeft6: { borderLeftWidth: 6 },
    // border colors
    borderPrimary: {
      borderColor: theme.colors.primary
    },
    borderSecondary: {
      borderColor: theme.colors.secondary
    },
    borderSuccess: {
      borderColor: theme.colors.success
    },
    borderDanger: {
      borderColor: theme.colors.danger
    },
    borderWarning: {
      borderColor: theme.colors.warning
    },
    borderInfo: {
      borderColor: theme.colors.info
    },
    borderLight: {
      borderColor: theme.colors.light
    },
    borderDark: {
      borderColor: theme.colors.dark
    },
    borderWhite: {
      borderColor: theme.colors.white
    },
    borderTransparent: {
      borderColor: theme.colors.transparent
    },
    borderMuted: {
      borderColor: theme.colors.muted
    },
    borderTransducent: {
      borderColor: theme.colors.transducent
    },
    // border radius
    rounded: {
      borderRadius: theme.sizes.borderRadiusRounded
    },
    roundedLg: {
      borderRadius: theme.sizes.borderRadiusRoundedLg
    },
    roundedSm: {
      borderRadius: theme.sizes.borderRadiusRoundedSm
    },
    roundedPill: {
      borderRadius: theme.sizes.borderRadiusPill
    },
    borderTopRounded: {
      borderTopRightRadius: theme.sizes.borderRadiusRounded,
      borderTopLeftRadius: theme.sizes.borderRadiusRounded
    },
    borderBottomRounded: {
      borderBottomRightRadius: theme.sizes.borderRadiusRounded,
      borderBottomLeftRadius: theme.sizes.borderRadiusRounded
    },
    borderTopRightRounded: {
      borderTopRightRadius: theme.sizes.borderRadiusRounded
    },
    borderTopLeftRounded: {
      borderTopLeftRadius: theme.sizes.borderRadiusRounded
    },
    borderBottomRightRounded: {
      borderBottomRightRadius: theme.sizes.borderRadiusRounded
    },
    borderBottomLeftRounded: {
      borderBottomLeftRadius: theme.sizes.borderRadiusRounded
    },
    borderTopRoundedLg: {
      borderTopRightRadius: theme.sizes.borderRadiusRoundedLg,
      borderTopLeftRadius: theme.sizes.borderRadiusRoundedLg
    },
    borderBottomRoundedLg: {
      borderBottomRightRadius: theme.sizes.borderRadiusRoundedLg,
      borderBottomLeftRadius: theme.sizes.borderRadiusRoundedLg
    },
    borderTopRightRoundedLg: {
      borderTopRightRadius: theme.sizes.borderRadiusRoundedLg
    },
    borderTopLeftRoundedLg: {
      borderTopLeftRadius: theme.sizes.borderRadiusRoundedLg
    },
    borderBottomRightRoundedLg: {
      borderBottomRightRadius: theme.sizes.borderRadiusRoundedLg
    },
    borderBottomLeftRoundedLg: {
      borderBottomLeftRadius: theme.sizes.borderRadiusRoundedLg
    },
    borderTopRoundedSm: {
      borderTopRightRadius: theme.sizes.borderRadiusRoundedSm,
      borderTopLeftRadius: theme.sizes.borderRadiusRoundedSm
    },
    borderBottomRoundedSm: {
      borderBottomRightRadius: theme.sizes.borderRadiusRoundedSm,
      borderBottomLeftRadius: theme.sizes.borderRadiusRoundedSm
    },
    borderTopRightRoundedSm: {
      borderTopRightRadius: theme.sizes.borderRadiusRoundedSm
    },
    borderTopLeftRoundedSm: {
      borderTopLeftRadius: theme.sizes.borderRadiusRoundedSm
    },
    borderBottomRightRoundedSm: {
      borderBottomRightRadius: theme.sizes.borderRadiusRoundedSm
    },
    borderBottomLeftRoundedSm: {
      borderBottomLeftRadius: theme.sizes.borderRadiusRoundedSm
    },
    // shadows
    elevation1: { elevation: 1 },
    elevation2: { elevation: 2 },
    elevation3: { elevation: 3 },
    elevation4: { elevation: 4 },
    elevation5: { elevation: 5 },
    elevation6: { elevation: 6 },
    elevation7: { elevation: 7 },
    elevation8: { elevation: 8 },
    elevation9: { elevation: 9 },
    elevation10: { elevation: 10 },
    elevation11: { elevation: 11 },
    elevation12: { elevation: 12 },
    elevation13: { elevation: 13 },
    elevation14: { elevation: 14 },
    elevation15: { elevation: 15 },
    elevation16: { elevation: 16 },
    elevation17: { elevation: 17 },
    elevation18: { elevation: 18 },
    // opacity
    opacity0: { opacity: 0.0 },
    opacity12: { opacity: 0.12 },
    opacity25: { opacity: 0.25 },
    opacity33: { opacity: 0.33 },
    opacity50: { opacity: 0.5 },
    opacity62: { opacity: 0.62 },
    opacity75: { opacity: 0.75 },
    opacity84: { opacity: 0.84 },
    opacity100: { opacity: 1 },
    // misc
    positionAbsolute: {
      position: "absolute"
    },
    positionReletive: {
      position: "relative"
    },
    positionTopRight: {
      top: 0,
      right: 0
    },
    positionTopLeft: {
      top: 0,
      left: 0
    },
    positionBottomLeft: {
      bottom: 0,
      left: 0
    },
    positionBottomRight: {
      bottom: 0,
      right: 0
    },
    // padding & margins
    pd2: {
      padding: 2
    },
    pdv2: {
      paddingVertical: 2
    },
    pdh2: {
      paddingHorizontal: 2
    },
    pdt2: {
      paddingTop: 2
    },
    pdb2: {
      paddingBottom: 2
    },
    pdr2: {
      paddingRight: 2
    },
    pdl2: {
      paddingLeft: 2
    },
    pd4: {
      padding: 4
    },
    pdv4: {
      paddingVertical: 4
    },
    pdh4: {
      paddingHorizontal: 4
    },
    pdt4: {
      paddingTop: 4
    },
    pdb4: {
      paddingBottom: 4
    },
    pdr4: {
      paddingRight: 4
    },
    pdl4: {
      paddingLeft: 4
    },
    pd6: {
      padding: 6
    },
    pdv6: {
      paddingVertical: 6
    },
    pdh6: {
      paddingHorizontal: 6
    },
    pdt6: {
      paddingTop: 6
    },
    pdb6: {
      paddingBottom: 6
    },
    pdr6: {
      paddingRight: 6
    },
    pdl6: {
      paddingLeft: 6
    },
    pd8: {
      padding: 8
    },
    pdv8: {
      paddingVertical: 8
    },
    pdh8: {
      paddingHorizontal: 8
    },
    pdt8: {
      paddingTop: 8
    },
    pdb8: {
      paddingBottom: 8
    },
    pdr8: {
      paddingRight: 8
    },
    pdl8: {
      paddingLeft: 8
    },
    pd12: {
      padding: 12
    },
    pdv12: {
      paddingVertical: 12
    },
    pdh12: {
      paddingHorizontal: 12
    },
    pdt12: {
      paddingTop: 12
    },
    pdb12: {
      paddingBottom: 12
    },
    pdr12: {
      paddingRight: 12
    },
    pdl12: {
      paddingLeft: 12
    },
    pd14: {
      padding: 14
    },
    pdv14: {
      paddingVertical: 14
    },
    pdh14: {
      paddingHorizontal: 14
    },
    pdt14: {
      paddingTop: 14
    },
    pdb14: {
      paddingBottom: 14
    },
    pdr14: {
      paddingRight: 14
    },
    pdl14: {
      paddingLeft: 14
    },
    pd16: {
      padding: 16
    },
    pdv16: {
      paddingVertical: 16
    },
    pdh16: {
      paddingHorizontal: 16
    },
    pdt16: {
      paddingTop: 16
    },
    pdb16: {
      paddingBottom: 16
    },
    pdr16: {
      paddingRight: 16
    },
    pdl16: {
      paddingLeft: 16
    },
    pd18: {
      padding: 18
    },
    pdv18: {
      paddingVertical: 18
    },
    pdh18: {
      paddingHorizontal: 18
    },
    pdt18: {
      paddingTop: 18
    },
    pdb18: {
      paddingBottom: 18
    },
    pdr18: {
      paddingRight: 18
    },
    pdl18: {
      paddingLeft: 18
    },
    pd24: {
      padding: 24
    },
    pdv24: {
      paddingVertical: 24
    },
    pdh24: {
      paddingHorizontal: 24
    },
    pdt24: {
      paddingTop: 24
    },
    pdb24: {
      paddingBottom: 24
    },
    pdr24: {
      paddingRight: 24
    },
    pdl24: {
      paddingLeft: 24
    },
    mg2: {
      margin: 2
    },
    mgv2: {
      marginVertical: 2
    },
    mgh2: {
      marginHorizontal: 2
    },
    mgt2: {
      marginTop: 2
    },
    mgb2: {
      marginBottom: 2
    },
    mgr2: {
      marginRight: 2
    },
    mgl2: {
      marginLeft: 2
    },
    mg4: {
      margin: 4
    },
    mgv4: {
      marginVertical: 4
    },
    mgh4: {
      marginHorizontal: 4
    },
    mgt4: {
      marginTop: 4
    },
    mgb4: {
      marginBottom: 4
    },
    mgr4: {
      marginRight: 4
    },
    mgl4: {
      marginLeft: 4
    },
    mg6: {
      margin: 6
    },
    mgv6: {
      marginVertical: 6
    },
    mgh6: {
      marginHorizontal: 6
    },
    mgt6: {
      marginTop: 6
    },
    mgb6: {
      marginBottom: 6
    },
    mgr6: {
      marginRight: 6
    },
    mgl6: {
      marginLeft: 6
    },
    mg8: {
      margin: 8
    },
    mgv8: {
      marginVertical: 8
    },
    mgh8: {
      marginHorizontal: 8
    },
    mgt8: {
      marginTop: 8
    },
    mgb8: {
      marginBottom: 8
    },
    mgr8: {
      marginRight: 8
    },
    mgl8: {
      marginLeft: 8
    },
    mg12: {
      margin: 12
    },
    mgv12: {
      marginVertical: 12
    },
    mgh12: {
      marginHorizontal: 12
    },
    mgt12: {
      marginTop: 12
    },
    mgb12: {
      marginBottom: 12
    },
    mgr12: {
      marginRight: 12
    },
    mgl12: {
      marginLeft: 12
    },
    mg14: {
      margin: 14
    },
    mgv14: {
      marginVertical: 14
    },
    mgh14: {
      marginHorizontal: 14
    },
    mgt14: {
      marginTop: 14
    },
    mgb14: {
      marginBottom: 14
    },
    mgr14: {
      marginRight: 14
    },
    mgl14: {
      marginLeft: 14
    },
    mg16: {
      margin: 16
    },
    mgv16: {
      marginVertical: 16
    },
    mgh16: {
      marginHorizontal: 16
    },
    mgt16: {
      marginTop: 16
    },
    mgb16: {
      marginBottom: 16
    },
    mgr16: {
      marginRight: 16
    },
    mgl16: {
      marginLeft: 16
    },
    mg18: {
      margin: 18
    },
    mgv18: {
      marginVertical: 18
    },
    mgh18: {
      marginHorizontal: 18
    },
    mgt18: {
      marginTop: 18
    },
    mgb18: {
      marginBottom: 18
    },
    mgr18: {
      marginRight: 18
    },
    mgl18: {
      marginLeft: 18
    },
    mg24: {
      margin: 24
    },
    mgv24: {
      marginVertical: 24
    },
    mgh24: {
      marginHorizontal: 24
    },
    mgt24: {
      marginTop: 24
    },
    mgb24: {
      marginBottom: 24
    },
    mgr24: {
      marginRight: 24
    },
    mgl24: {
      marginLeft: 24
    },
    mgauto: {
      margin: "auto"
    },
    mgvauto: {
      marginVertical: "auto"
    },
    mghauto: {
      marginHorizontal: "auto"
    },
    mgtauto: {
      marginTop: "auto"
    },
    mgbauto: {
      marginBottom: "auto"
    },
    mgrauto: {
      marginRight: "auto"
    },
    mglauto: {
      marginLeft: "auto"
    },
    // text style
    textDefault: {
      fontSize: 14,
      color: "#3d3d3d"
    },
    textCenter: {
      textAlign: "center"
    },
    textUppercase: {
      textTransform: "uppercase"
    },
    textLowercase: {
      textTransform: "lowercase"
    },
    textCapitalize: {
      textTransform: "capitalize"
    },
    h1: {
      color: "#212529",
      fontSize: 26
    },
    h2: {
      color: "#212529",
      fontSize: 22
    },
    h3: {
      color: "#212529",
      fontSize: 18
    },
    h4: {
      color: "#212529",
      fontSize: 16
    },
    h5: {
      color: "#212529",
      fontSize: 15
    },
    p: {
      fontSize: 14
    },
    sm: {
      fontSize: 13
    },
    xsm: {
      fontSize: 12
    },
    // colors
    textPrimary: {
      color: theme.colors.primary
    },
    textSecondary: {
      color: theme.colors.secondary
    },
    textSuccess: {
      color: theme.colors.success
    },
    textDanger: {
      color: theme.colors.danger
    },
    textWarning: {
      color: theme.colors.warning
    },
    textInfo: {
      color: theme.colors.info
    },
    textLight: {
      color: theme.colors.light
    },
    textDark: {
      color: theme.colors.dark
    },
    textWhite: {
      color: theme.colors.white
    },
    textTransparent: {
      color: theme.colors.transparent
    },
    textMuted: {
      color: theme.colors.muted
    },
    textBrand: {
      color: theme.colors.brand
    }
  })
