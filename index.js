const backgroundColor = '#3A124E'
const foregroundColor = '#6B818C'
const darkerBackground = '#00000'

const RED = '#CC2936'
const GREEN = '#99DF45'
const YELLOW = '#CDDE33'
const BLUE = '#2255BD'
const PINK = '#D983D6'
const CYAN = '#33DED0'
const LIGHT_GRAY = '#EEE5E9'
const MEDIUM_GRAY = '#7A7A7A'
const WHITE = '#FFFFFF'

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
