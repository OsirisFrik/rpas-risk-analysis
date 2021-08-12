import i18n from '../../i18n'

const $t = i18n.global.t

const fieldRequired = (field: string, extraRules = []) => [
  {
    required: true,
    message: $t('error.fieldRequired', {
      field: $t(`general.${field}`)
    }),
    trigger: 'blur'
  },
  {
    min: 1,
    trigger: 'blur'
  },
  ...extraRules
]

export const UserInfoRules = {
  firstName: fieldRequired('firstName'),
  lastName: fieldRequired('lastName')
}
