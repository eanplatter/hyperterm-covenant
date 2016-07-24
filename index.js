const backgroundColor = '#B0B0B0'
const foregroundColor = '#77DFD8'
const darkerBackground = '#5D5D5D'

const RED = '#C75646'
const GREEN = '#8EB33B'
const YELLOW = '#D0B03C'
const BLUE = '#72B3CC'
const PINK = '#C8A0D1'
const CYAN = '#218693'
const LIGHT_GRAY = '#B0B0B0'
const MEDIUM_GRAY = '#F7F7F7'
const WHITE = '#B0B0B0'

const colors = [
  backgroundColor,
  RED,
  GREEN,
  YELLOW,
  BLUE,
  PINK,
  CYAN,
  LIGHT_GRAY,
  MEDIUM_GRAY,
  RED,
  GREEN,
  YELLOW,
  BLUE,
  PINK,
  CYAN,
  WHITE,
  foregroundColor,
]

exports.decorateConfig = (config) => (
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: MEDIUM_GRAY,
    cursorColor: foregroundColor,
    colors,
        css: `
              ${config.css || ''} 
              .tabs_list {
                background-color: ${darkerBackground} !important;
              }
              .tab_tab {
                color: ${foregroundColor} !important;
                background-color: ${darkerBackground} !important;
                border-left: 1px solid ${MEDIUM_GRAY};
              }
              .tab_active {
                background-color: ${backgroundColor} !important;
                height: calc(100% + 1px);
              }
              .tab_active:before {
                border-bottom: none !important;
              }
              .tab_text {
                border-color: transparent !important;
              }
          `
  })
)

exports.middleware = () => (next) => (action) => {
  switch(action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      action.config.foregroundColor = foregroundColor
      action.config.backgroundColor = backgroundColor
      actoun.config.cursorColor = foregroundColor
      action.config.colors = colors
  }
  next(action)
}
