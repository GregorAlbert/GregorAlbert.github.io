import {Directive, HostListener, Output, EventEmitter} from '@angular/core';
import * as screenfull from 'screenfull';

@Directive({
  selector: '[appToggleFullscreen]'
})
export class ToggleFullscreenDirective {constructor() {}@HostListener('click') onClick() {
  if (screenfull.enabled) {
    screenfull.toggle();
  }
}
}
