<template>
  <el-dialog
    v-model="_show"
    :title="title"
    :width="width"
    @close="_show = false">
    <slot name="body" />
    <template #footer>
      <slot name="footer">
        <el-button type="info" size="medium" @click="close">

        </el-button>
      </slot>
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
