<template class="el-form">
        <el-row :gutter="24">
          <el-col :sm="12" :md="16" :lg="16" xl="16">
            <el-form-item
            :label="$t('analysis.form.pilotInCommand')">
               <el-input
                v-model="_value.start"
                :placeholder="$t('analysis.form.pilotInCommand')"
                size="normal">
                <template #suffix>
                      <i class="ri-user-fill"></i>
                </template>
             </el-input>
            </el-form-item>
        </el-col>
          <el-col :sm="12" :md="8" :lg="8" xl="8">
              <el-form-item
              :label="$t('analysis.form.license')">
                <el-input
                    v-model="_value.start"
                    :placeholder="$t('analysis.form.license')"
                    size="normal">
                        <template #suffix>
                            <i class="ri-passport-fill"></i>
                      </template>
                  </el-input>
               </el-form-item>
           </el-col>
       </el-row>
         <el-row :gutter="24">
          <el-col :sm="24" :md="24" :lg="8" xl="8">
            <el-form-item
            :label="$t('analysis.form.estimedTime')">
              <el-input
                v-model="_value.estimedTime"
                :placeholder="$t('analysis.form.estimedTime')"
                size="normal">
                    <template #suffix>
                          <i class="ri-timer-fill"></i>
                      </template>
                  </el-input>
            </el-form-item>
          </el-col>
           <el-col :sm="24" :md="24" :lg="16" xl="16">
             <el-form-item
            :label="$t('analysis.form.startHour')">
            <el-date-picker
            class="date-picker"
              v-model="start"
              type="datetimerange"
              start-placeholder="Start Date"
              end-placeholder="End Date">
            </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
    <el-row :gutter="24">
          <el-col class="lat-padding" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item
            :label="$t('analysis.form.lat')">
              <el-input
                v-model="_value.start"
                :placeholder="$t('analysis.form.lat')"
                size="normal">
                    <template #suffix>
                        <i class="ri-china-railway-fill"></i>
                      </template>
                  </el-input>
            </el-form-item>
           </el-col>
          <el-col class="long-padding" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item
              :label="$t('analysis.form.long')">
                <el-input
                  v-model="_value.start"
                  :placeholder="$t('analysis.form.long')"
                  size="normal">
                    <template #suffix>
                        <i class="ri-china-railway-fill"></i>
                      </template>
                  </el-input>
            </el-form-item>
          </el-col>
    </el-row>
    <el-row :gutter="24">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
              <el-form-item
              :label="$t('analysis.form.sitio')">
                <el-input
                  v-model="_value.start"
                  :placeholder="$t('analysis.form.sitio')"
                  size="normal">
                   <template #suffix>
                          <i class="ri-flight-land-fill"></i>
                      </template>
                  </el-input>
              </el-form-item>
            </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
              <el-form-item
              :label="$t('analysis.form.elevation')">
                <el-input
                  v-model="_value.start"
                  :placeholder="$t('analysis.form.elevation')"
                  size="normal" >
              <template #suffix>
                         <i class="ri-flight-takeoff-fill"></i>
                      </template>
                  </el-input>
              </el-form-item>
            </el-col>
      </el-row>
    <el-row :gutter="24">
        <el-col :xs="24">
          <el-form-item
          :label="$t('analysis.form.criticalAirport')">
            <el-input
              v-model="_value.start"
              :placeholder="$t('analysis.form.criticalAirport')"
              size="normal">
                  <template #suffix>
                        <i class="ri-map-pin-fill"></i>
                      </template>
                  </el-input>
          </el-form-item>
        </el-col>
    </el-row>
    <el-row :gutter="24">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-form-item
          :label="$t('analysis.form.distance')">
            <el-input
              v-model="_value.start"
              :placeholder="$t('analysis.form.distance')"
              size="normal">
               <template #suffix>
                        <i class="ri-pin-distance-fill"></i>
                      </template>
                  </el-input>
          </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <el-form-item
            :label="$t('analysis.form.azimuth')">
              <el-input
                v-model="_value.start"
                :placeholder="$t('analysis.form.azimuth')"
                size="normal">
                    <template #suffix>
                        <i class="ri-line-chart-line"></i>
                      </template>
                  </el-input>
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
