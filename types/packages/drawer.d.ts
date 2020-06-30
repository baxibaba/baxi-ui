import { baxiUIPopupComponent } from '../component'

export type PlacementType = 'down' | 'up' | 'left' | 'right'

export declare class baxiDrawer extends baxiUIPopupComponent {
  maskClosable: boolean
  placement: PlacementType
  lockScroll: boolean
}