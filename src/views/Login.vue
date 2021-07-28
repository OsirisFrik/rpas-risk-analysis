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

    <confirm-modal
      v-model:show="showTerms"
      :title="$t('login.termsAndConditions')"
      @confirm="signUp">
      <template #body>
        <h3 class="word">
          {{ $t('login.terms') }}
        </h3>
      </template>
    </confirm-modal>
  </div>
</template>

<script lang="ts">
import { ElNotification } from 'element-plus'
import { Vue, Options } from 'vue-class-component'
import { createUserDoc, validateUser } from '@/utils/user'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Components
import ConfirmModal from '@/components/Modal/Confirm.vue'

@Options({
  name: 'Login',
  components: {
    ConfirmModal
  }
})

export default class Login extends Vue {
  private gprovider = new firebase.auth.GoogleAuthProvider()
  private auth = firebase.auth()

  private user?: firebase.User

  public acceptTerms = false
  public showTerms = false
  public loading = true

  async created(): Promise<void> {
    setTimeout(async() => {
      const user = this.auth.currentUser

      if (user) {
        this.user = user
        this.validateUser()
      } else this.loading = false
    }, 500)
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
    if (!await validateUser(this.user!, isNew)) this.showTerms = true
    else this.$router.push('/')
  }

  async signUp(): Promise<void> {
    try {
      await createUserDoc(this.user!)

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
}
</script>
