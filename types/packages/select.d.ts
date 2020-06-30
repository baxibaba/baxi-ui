import { baxiUIComponent } from '../component'

interface OptionsType {
  key: string | number
  value: string | number
}

export declare class baxiSelect extends baxiUIComponent {
  value: string | number
  data: OptionsType[] | string[] | number[]
  title: string
  placeholder: string
  lockScroll: boolean
  maskClosable: boolean
  zIndex: number
  maskStyle: object
  containerStyle: object
}
