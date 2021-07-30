<template>
  <main-modal
    v-bind="$props">
    <template #title>
      <slot name="title" />
    </template>
    <template #body>
      <slot name="body"></slot>
    </template>
    <template #footer v-if="!hiddeBtns">
      <slot name="bts">
        <el-button
          type="danger"
          class="txt-upper"
          @click="cancel">
          {{ $t('btn.cancel') }}
        </el-button>
        <el-button
          type="primary"
          class="txt-upper"
          @click="confirm()">
          {{ $t('btn.confirm') }}
        </el-button>
      </slot>
    </template>
  </main-modal>
</template>
<script lang="ts">
import { Options } from 'vue-class-component'
import Modal from './index'
import MainModal from './index.vue'

@Options({
  name: 'ConfirmModal',
  components: {
    MainModal
  },
  emits: [
    'confirm',
    'cancel'
  ]
})

export default class ConfirmModal extends Modal {
  confirm(): void {
    this.$emit('confirm')
  }

  cancel(): void {
    this.$emit('cancel')
  }
}
</script>
