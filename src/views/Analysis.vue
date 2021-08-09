<template>
  <el-steps :active="step" direction="horizontal" process-status="wait" finish-status="finish">
    <el-step
      :title="$t('analysis.planification')"
      :description="$t('analysis.descriptions.planification')"
      icon="ri-flight-takeoff-line">
    </el-step>
  </el-steps>
  <template>
    <basic-info v-model="formData" />
  </template>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import BasicInfo from '@/components/Forms/Analysis/Basic.vue'

@Options({
  name: 'AnalysisForm',
  components: {
    BasicInfo
  }
})

export default class AnalysisForm extends Vue {
  public currentStape: number
  public steps = {
    basic: 0,
    metar: 1,
    observations: 2
  }

  public formData = {
    pilot: '',
    licence: '',
    estimeTime: '',
    start: '',
    end: '',
    airport: '',
    elevation: '',
    mark: '',
    dist: ''
  }

  constructor() {
    super()

    this.currentStape = this.steps.basic
  }
}
</script>
