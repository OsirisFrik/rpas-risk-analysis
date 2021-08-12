<template>
  <div>
    <p>
      <el-button
        type="primary"
        size="medium"
        :disabled="loading"
        @click="login">
        <i class="ri-google-fill" /> {{ $t('login.login') }}
      </el-button>
    </p>

    <form-modal
      v-model:show="showSignUp"
      :title="$t('login.signup')"
      :options="options"
      label-position="top"
      @submit="next">
      <template #title>
        <el-steps
          :active="currentStep"
          class="txt-upper"
          align-center>
          <el-step
            :title="$t('general.registry')"
            icon="ri-user-line" />
          <el-step
            :title="$t('login.termsAndConditions')"
            icon="ri-draft-line" />
          <el-step
            :title="$t('general.confirmInfo')"
            icon="ri-shield-check-line" />
        </el-steps>
      </template>
      <template #body>
        <template v-if="currentStep === steps.userData">
          <user-info-form ref="userForm" v-model="userData"/>
        </template>
        <template v-else-if="currentStep === steps.terms">
          <h3>
            {{ $t('login.terms') }}
          </h3>
          <p>
            <el-checkbox
              v-model="acceptTerms"
              :label="$t('btn.accept')"
              :indeterminate="false"
              class="txt-upper" />
          </p>
        </template>
      </template>
      <template #footer>
        <el-button
          type="danger"
          @click="cancel">
          {{ $t('btn.cancel') }}
        </el-button>&nbsp;
        <el-button-group>
          <el-button
            type="primary"
            :disabled="currentStep === 0"
            @click="currentStep += -1">
            <i class="ri-arrow-left-s-line" /> {{ $t('btn.back') }}
          </el-button>
          <el-button
            :disabled="currentStep === steps.terms && !acceptTerms"
            type="primary"
            native-type="submit">
            {{ $t(currentStep !== lastStep ? 'btn.next' : 'btn.confirm') }} <i class="ri-arrow-right-s-line" />
          </el-button>
        </el-button-group>
      </template>
    </form-modal>
  </div>
</template>

<script lang="ts">
import { ElNotification } from 'element-plus'
import { Vue, Options } from 'vue-class-component'
import { createUserDoc, UserFormData, validateUser } from '@/utils/user'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Components
import FormModal from '@/components/Modal/Form.vue'
import { ModalOptions } from '@/components/Modal'
import UserInfoForm from '@/components/Forms/UserInfo.vue'

// Utils
import { UserInfoRules } from '@/components/Forms/rules'

@Options({
  name: 'Login',
  components: {
    FormModal,
    UserInfoForm
  }
})

export default class Login extends Vue {
  private gprovider = new firebase.auth.GoogleAuthProvider()
  private auth = firebase.auth()

  private user?: firebase.User
  private userData: UserFormData = {
    firstName: '',
    middleName: '',
    lastName: '',
    country: '',
    birthday: ''
  }

  public acceptTerms = false
  public showSignUp = false
  public loading = true
  public rules = UserInfoRules
  public steps: { [key: string]: number } = {
    userData: 0,
    terms: 1,
    confim: 2
  }

  public currentStep = this.steps.userData
  public lastStep = this.steps[Object.keys(this.steps).pop() || '']
  public options: ModalOptions = {
    closeOnClickModal: false,
    closeOnPressEscape: false,
    showClose: false,
    destroyOnClose: true,
    fullscreen: true
  }

  async created(): Promise<void> {
    setTimeout(async() => {
      const user = this.auth.currentUser

      if (user) {
        this.user = user
        this.validateUser()
      } else this.loading = false
    }, 1000)
  }

  async login(): Promise<void> {
    try {
      this.loading = true

      const auth = await this.auth.signInWithPopup(this.gprovider)

      this.user = auth.user!
      this.validateUser(auth.additionalUserInfo?.isNewUser)
    } catch (err) {
      this.loading = false

      ElNotification({
        title: 'Error',
        message: this.$t('error.errorOnLogin'),
        type: 'error'
      })
    }
  }

  async validateUser(isNew = false): Promise<void> {
    if (!await validateUser(this.user!, isNew)) this.showSignUp = true
    else this.$router.push('/')
  }

  async signUp(): Promise<void> {
    try {
      await createUserDoc(this.user!, this.userData)

      this.validateUser()
    } catch (err) {
      console.trace(err)

      ElNotification({
        type: 'error',
        title: 'Error',
        message: this.$t('error.general')
      })
    }
  }

  async cancel(): Promise<void> {
    await this.auth.currentUser!.delete()

    this.loading = false
  }

  async next(): Promise<void> {
    if (this.currentStep < this.lastStep) {
      if (this.currentStep === this.steps.terms && !this.acceptTerms) return

      this.currentStep += 1

      return
    }

    this.signUp()
  }
}
</script>
