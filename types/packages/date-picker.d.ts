import { baxiUIPopupComponent } from '../component'

export declare class baxiDatePicker extends baxiUIPopupComponent {
  format: string
  min: Date | string
  max: Date | string
  title: string
  lockScroll: boolean
  maskClosable: boolean
}