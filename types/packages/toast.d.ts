import { baxiUIPopupComponent } from '../component'

export type ToastType = 'down' | 'up' | 'left' | 'right'

export declare class baxiToast extends baxiUIPopupComponent {
  value: string
  text: string
  type: ToastType
  time: number
  maskVisible: boolean
}
