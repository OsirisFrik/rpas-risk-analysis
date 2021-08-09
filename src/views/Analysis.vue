<template>
  <el-steps :active="currentStape" direction="horizontal" process-status="wait" finish-status="finish">
    <el-step
      :title="$t('analysis.planification')"
      :description="$t('analysis.descriptions.planification')"
      icon="ri-flight-takeoff-line">
    </el-step>
  </el-steps>
  <template v-if="currentStape === steps.basic">
    basic
  </template>
  <template v-else-if="currentStape === steps.metar">
    metar
  </template>
  <template v-else-if="currentStape === steps.observations">
    observations
  </template>
  <span>
    <button @click="currentStape += 1">next</button>
  </span>
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
  public currentStape = 0
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

  onCreated(): void {
    this.currentStape = this.steps.basic
  }
}
</script>
