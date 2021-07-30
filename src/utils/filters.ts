import { App } from 'vue'

export default function filters(app: App): void {
  app.config.globalProperties.$filters = {
    capitalize: (str: string): string => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }
}
