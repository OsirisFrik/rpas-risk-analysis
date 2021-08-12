<template>
  <el-dialog
    v-model="_show"
    v-bind="options"
    :title="title"
    :width="width"
    @close="_show = false">
    <template #title>
      <slot name="title"/>
    </template>
    <slot name="body" />
    <template #footer>
      <slot name="footer" />
    </template>
  </el-dialog>
</template>
<script lang="ts">
import { Options } from 'vue-class-component'
import Modal from './index'

@Options({
  name: 'Modal'
})

export default class MainModal extends Modal {
}
</script>
