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
    <el-col>
      <el-form-item
       :label="$t('analysis.form.license')">
        <el-input
          v-model="_value.estimedTime"
          :placeholder="$t('analysis.form.license')"
          size="normal" />
      </el-form-item>
    </el-col>
    <el-col>
      <el-form-item
       :label="$t('analysis.form.estimedTime')">
        <el-input
          v-model="_value.estimedTime"
          :placeholder="$t('analysis.form.estimedTime')"
          size="normal" />
      </el-form-item>
    </el-col>
 <el-col>
      <el-form-item
       :label="$t('analysis.form.startHour')">
        <el-input
          v-model="_value.start"
          :placeholder="$t('analysis.form.startHour')"
          size="normal" />
      </el-form-item>
    </el-col>

 <el-col>
      <el-form-item
       :label="$t('analysis.form.endHour')">
        <el-input
          v-model="_value.start"
          :placeholder="$t('analysis.form.endHour')"
          size="normal" />
      </el-form-item>
    </el-col>
  <el-col>
      <el-form-item
       :label="$t('analysis.form.lat')">
        <el-input
          v-model="_value.start"
          :placeholder="$t('analysis.form.lat')"
          size="normal" />
      </el-form-item>
    <el-form-item
       :label="$t('analysis.form.long')">
        <el-input
          v-model="_value.start"
          :placeholder="$t('analysis.form.long')"
          size="normal" />
      </el-form-item>
   </el-col>
<el-col>
      <el-form-item
      :label="$t('analysis.form.sitio')">
        <el-input
          v-model="_value.start"
          :placeholder="$t('analysis.form.sitio')"
          size="normal" />
      </el-form-item>
    </el-col>
<el-col>
      <el-form-item
       :label="$t('analysis.form.elevation')">
        <el-input
          v-model="_value.start"
          :placeholder="$t('analysis.form.elevation')"
          size="normal" />
      </el-form-item>
    </el-col>

    <el-col>
      <el-form-item
       :label="$t('analysis.form.criticalAirport')">
        <el-input
          v-model="_value.start"
          :placeholder="$t('analysis.form.criticalAirport')"
          size="normal" />
      </el-form-item>
    </el-col>

    <el-col>
      <el-form-item
       :label="$t('analysis.form.distance')">
        <el-input
          v-model="_value.start"
          :placeholder="$t('analysis.form.distance')"
          size="normal" />
      </el-form-item>
       <el-form-item
       :label="$t('analysis.form.azimuth')">
        <el-input
          v-model="_value.start"
          :placeholder="$t('analysis.form.azimuth')"
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
