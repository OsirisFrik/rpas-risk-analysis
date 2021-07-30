<template>
  <router-view/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

declare global {
  interface Window {
    $app: App
  }
}

@Options({
  name: 'App'
})
export default class App extends Vue {
  created(): void{
    if (process.env.NODE_ENV === 'development') window.$app = this
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
