<template>
  <el-steps :active="step" direction="horizontal" process-status="wait" finish-status="finish">
    <el-step
      :title="$t('analysis.planification')"
      :description="$t('analysis.descriptions.planification')"
      icon="ri-flight-takeoff-line">
      test
    </el-step>
  </el-steps>
</template>
<script>
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'AnalysisForm'
})

export default class AnalysisForm extends Vue {

}
</script>
