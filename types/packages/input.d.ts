import { baxiUIComponent } from '../component'

export type InputType = 'text' | 'tel' | 'password'

export declare class baxiInput extends baxiUIComponent {
  value: string | number
  type: InputType
  placeholder: string
  disabled: boolean
  readonly: boolean
  autofocus: boolean
  autocomplete: boolean
  maxLength: number
  clearable: boolean | object
  eye: boolean
}