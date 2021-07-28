import { prop, Vue } from 'vue-class-component'

export class ModalProps {
  public show = prop({
    type: Boolean,
    required: true
  })

  public title = prop({
    type: String,
    default: ''
  })

  public width?: string | number
  public hiddeBtns?: boolean = false
}

export default class Modal extends Vue.with(ModalProps) {
  get _show(): boolean {
    return this.show
  }

  set _show(val: boolean) {
    this.$emit('update:show', val)
  }
}
