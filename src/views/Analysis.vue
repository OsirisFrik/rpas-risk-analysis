<template>
  <div>
    <el-steps :active="currentStape" direction="horizontal" process-status="wait" finish-status="finish">
      <el-step
        :title="$t('analysis.planification')"
        :description="$t('analysis.descriptions.planification')"
        icon="ri-flight-takeoff-line">
      </el-step>
    </el-steps>
    <main class="el-main main-background ">
    <div class="title-upper"> Inspecci&oacute;n de prevuelo para detectar amenazas en la operaci&oacute;n de rpas</div>
  <el-container class="el-container-center input-analysis">
    <el-form label-position="top">
      <template v-if="currentStape === steps.basic">
        <basic-info v-model="formData" />
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
    </el-form>
    </el-container>
  </main>
  </div>
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
