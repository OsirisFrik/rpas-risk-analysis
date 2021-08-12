import { UseDialogProps } from 'element-plus/lib/el-dialog/src/dialog'
import { prop, Vue } from 'vue-class-component'

export interface ModalOptions extends Partial<UseDialogProps> {
  showClose?: boolean
}
export class ModalProps {
  public show = prop({
    type: Boolean,
    required: true
  })

  public title = prop({
    type: String,
    default: ''
  })

  public options = prop<ModalOptions>({
    type: Object,
    default: () => ({})
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

  cancel(): void {
    this.$emit('cancel')
  }

  confirm(): void {
    this.$emit('confirm')
  }
}
