import { baxiUIPopupComponent } from '../component'

interface OptionsType {
  key: string | number
  value: string | number
}

export declare class baxiPicker extends baxiUIPopupComponent {
  data: OptionsType[] | string[] | number[]
  title: string
  lockScroll: boolean
  maskClosable: boolean
}