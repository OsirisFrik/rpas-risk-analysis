import { createI18n } from 'vue-i18n'
import * as messages from './local'

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    ...messages
  }
})
