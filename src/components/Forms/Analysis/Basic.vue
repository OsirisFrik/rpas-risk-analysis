<template>
  <el-row :gutter="24">
    <el-col
      :sm="12">
      <el-form-item
        :label="$t('analysis.form.pilotInCommand')"
        size="normal">
        <el-input
          v-model="_value.pilot"
          :placeholder="$t('analysis.form.pilotInCommand')"
          size="normal" />
      </el-form-item>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import { Options, prop, Vue } from 'vue-class-component'

interface BasicData {
  pilot: string
  licence: string
  estimeTime: string
  start: string
  end: string
  airport: string
  elevation: string
  mark: string
  dist: string
}

class BasicInfoAnalysisProps {
  modelValue = prop<BasicData>({
    type: Object,
    required: true
  })
}

@Options({
  name: 'BasicInfoAnalysis'
})

export default class BasicInfoAnalysis extends Vue.with(BasicInfoAnalysisProps) {
  get _value(): BasicData {
    return this.modelValue
  }

  set _value(val: BasicData) {
    this.$emit('update', val)
  }
}
</script>
