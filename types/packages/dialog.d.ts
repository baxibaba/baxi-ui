import { baxiUIPopupComponent } from '../component'

interface BtnType {
  text: string
  callback?(): boolean | undefined
  color?: string
  style?: object
}

export declare class baxiDialog extends baxiUIPopupComponent {
  content: string
  maskClosable: boolean
  lockScroll: boolean
  title: string
  btns: BtnType[]
}
