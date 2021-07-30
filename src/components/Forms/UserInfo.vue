<template>
  <el-row :gutter="24">
    <el-col :sm="6" :xs="24">
      <el-form-item
        :label="$t('general.firstName')"
        required
        class="txt-cap">
        <el-input
          v-model="_value.firstName"
          :placeholder="$t('general.firstName')"
          required />
      </el-form-item>
    </el-col>
    <el-col :sm="6" :offset="0" :xs="24">
      <el-form-item
        :label="$t('general.middleName')"
        class="txt-cap">
        <el-input
          v-model="_value.middleName"
          :placeholder="$t('general.middleName')" />
      </el-form-item>
    </el-col>
    <el-col :sm="6" :xs="24">
      <el-form-item
        :label="$t('general.lastName')"
        required
        class="txt-cap">
        <el-input
          v-model="_value.lastName"
          :placeholder="$t('general.lastName')"
          required />
      </el-form-item>
    </el-col>
    <el-col :sm="6" :xs="24">
      <el-form-item
        :label="$t('general.secondLastName')"
        class="txt-cap">
        <el-input
          v-model="_value.secondLastName"
          :placeholder="$t('general.secondLastName')" />
      </el-form-item>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :sm="6" :xs="24">
      <el-form-item
        :label="$t('general.birthday')"
        class="txt-cap">
        <el-date-picker
          v-model="_value.birthday"
          :placeholder="$t('general.birthday')"
          format="DD/MM/YYYY"
          value-format="YYYY-MM-DD" />
      </el-form-item>
    </el-col>
    <el-col :sm="6" :xs="24">
      <el-form-item
        :label="$t('general.licenceNumber')"
        class="txt-cap">
        <el-input
          v-model="_value.licence"
          :placeholder="$t('general.licenceNumber')" />
      </el-form-item>
    </el-col>
    <el-col :sm="6" :xs="24">
      <el-form-item
        :label="$t('general.expirationDate')"
        class="txt-cap">
        <el-date-picker
          v-model="_value.expiration"
          :placeholder="$t('general.expirationDate')"
          format="DD/MM/YYYY"
          value-format="YYYY-MM-DD" />
      </el-form-item>
    </el-col>
    <el-col :sm="6" :xs="24">
      <el-form-item
        :label="$t('general.country')"
        class="txt-cap">
        <country-select
          v-model="country"
          :top="['MX', 'US']"
          @change="setCountry" />
      </el-form-item>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import { Options, prop, Vue } from 'vue-class-component'

// Utils
import { UserFormData } from '@/utils/user'

// Components
import CountrySelect from '@/components/CountrySelect.vue'

class UserInfoFormProps {
  public modelValue = prop<UserFormData>({
    type: Object,
    required: true,
    default: () => ({})
  })
}

@Options({
  name: 'UserInfoForm',
  components: {
    CountrySelect
  }
})

export default class UserInfoForm extends Vue.with(UserInfoFormProps) {
  get _value(): UserFormData {
    return this.modelValue
  }

  set _value(val: UserFormData) {
    this.$emit('update', val)
  }

  get country(): string {
    return this._value.country
  }

  set country(val: string) {
    this._value.country = val
  }

  setCountry(val: string): void {
    this.country = val
  }
}
</script>
