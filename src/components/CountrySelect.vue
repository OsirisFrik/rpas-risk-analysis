<template>
  <el-select-v2
    v-model="_value"
    :placeholder="$t('general.select', { a: $t('general.country') })"
    :options="countries"
    clearable
    filterable
    @change="updateVal">
  </el-select-v2>
</template>
<script lang="ts">
import { Options, prop, Vue } from 'vue-class-component'
import countries from 'country-region-data'

class SelectCountryProps {
  modelValue = prop({
    type: String,
    required: true
  })

  top = prop<string[]>({
    type: Array,
    default: []
  })
}

interface CountrySelect {
    label: string
    value: string
  }

interface CustomCountries {
  options: CountrySelect[]
  label?: string
}

@Options({
  name: 'SelectCountry'
})

export default class SelectCountry extends Vue.with(SelectCountryProps) {
  get _value(): string {
    return this.modelValue
  }

  set _value(val: string) {
    this.$emit('update', val)
  }

  get countries(): CustomCountries[] {
    if (this.top.length === 0) {
      return [{
        options: this.formatOptions(),
        label: this.$t('general.countries')
      }]
    }

    return [
      {
        options: this.formatOptions(this.top),
        label: this.$t('general.topCountries')
      },
      {
        options: this.formatOptions(this.top, true),
        label: this.$t('general.countries')
      }
    ]
  }

  formatOptions(filter?: string[], invert = false): CountrySelect[] {
    const res = (
      !filter ? countries
        : (
          !invert
            ? countries.filter((value) => this.top.includes(value.countryShortCode))
            : countries.filter((value) => !this.top.includes(value.countryShortCode))
        )
    )

    return res.map((country) => ({
      label: country.countryName,
      value: country.countryShortCode
    }))
  }

  flag(country: string): string {
    return `https://www.countryflags.io/${country}/flat/16.png`
  }

  updateVal(country: string): void {
    this.$emit('change', country)
  }
}
</script>
