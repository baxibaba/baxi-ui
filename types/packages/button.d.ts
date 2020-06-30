import { baxiUIComponent } from '../component'

export type ButtonType = 'default' | 'disabled' | 'light'

export declare class baxiButton extends baxiUIComponent {
  type: ButtonType
  inline: boolean
  outline: boolean
  btnStyle: object
}