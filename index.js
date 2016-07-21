const backgroundColor = ''
const foregroundColor = ''
const darkerBackground = ''

const RED = ''
const GREEN = ''
const YELLOW = ''
const BLUE = ''
const PINK = ''
const CYAN = ''
const LIGHT_GRAY = ''
const MEDIUM_GRAY = ''
const WHITE = ''

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

exports.decorateConfig = (config) => {
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
}

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
