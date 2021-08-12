<template>
  <el-form
    v-bind="$attrs"
    @submit.prevent="$emit('submit')">
    <main-modal
      v-bind="$props">
      <template #title>
        <slot name="title" />
      </template>
      <template #body>
        <slot name="body" />
      </template>
      <template #footer>
        <slot name="footer">
          <el-button
          type="danger"
          class="txt-upper"
          @click="cancel">
          {{ $t('btn.cancel') }}
        </el-button>
        <el-button
          type="primary"
          class="txt-upper"
          native-type="submit">
          {{ $t('btn.save') }}
        </el-button>
        </slot>
      </template>
    </main-modal>
  </el-form>
</template>
<script lang="ts">
import { Options } from 'vue-class-component'
import Modal from './index'
import MainModal from './index.vue'

@Options({
  name: 'FormModal',
  components: {
    MainModal
  }
})

export default class FormModal extends Modal {

}
</script>
