import i18next from 'i18next'

export const errorCatcher = e => i18next.t(JSON.parse(e))
