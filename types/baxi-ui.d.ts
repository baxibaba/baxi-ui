import Vue from 'vue'

import { baxiUIComponent } from './component'

/**
 * component common definition
 */
export type Component = baxiUIComponent

export function install (vue: typeof Vue): void

import { baxiButton } from './packages/button'
import { baxiButtonGroup } from './packages/button-group'
import { baxiDatePicker } from './packages/date-picker'
import { baxiDialog } from './packages/dialog'
import { baxiDrawer } from './packages/drawer'
import { baxiInputGroup } from './packages/input-group'
import { baxiInput } from './packages/input'
import { baxiPicker } from './packages/picker'
import { baxiRange } from './packages/range'
import { baxiSelectGroup } from './packages/select-group'
import { baxiSelect } from './packages/select'
import { baxiSwitch } from './packages/switch'
import { baxiTabs } from './packages/tabs'
import { baxiToast } from './packages/toast'

export class Button extends baxiButton {}
export class ButtonGroup extends baxiButtonGroup {}
export class DatePicker extends baxiDatePicker {}
export class Dialog extends baxiDialog {}
export class Drawer extends baxiDrawer {}
export class InputGroup extends baxiInputGroup {}
export class Input extends baxiInput {}
export class Picker extends baxiPicker {}
export class Range extends baxiRange {}
export class SelectGroup extends baxiSelectGroup {}
export class Select extends baxiSelect {}
export class Switch extends baxiSwitch {}
export class Tabs extends baxiTabs {}
export class Toast extends baxiToast {}

declare module 'vue/types/vue' {
  interface Vue {
    /** create Drawer instance */
    $drawer(options: object): Drawer
    /** create Dialog instance */
    $dialog(options: object): Dialog
    /** create DatePicker instance */
    $datePicker(options: object): DatePicker
    /** create Picker instance */
    $picker(options: object): Picker
    /** create Toast instance */
    $toast(options: object | string): Toast
  }
}
