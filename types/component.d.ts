import Vue from 'vue'

export declare class baxiUIComponent extends Vue {
  static install (vue: typeof Vue): void
}

export declare class baxiUIPopupComponent extends baxiUIComponent {
  visible: boolean
  zIndex: number
  maskStyle: object
  containerStyle: object
  show (): any
  hide (): any
}
