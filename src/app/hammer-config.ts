import { Injectable } from '@angular/core';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig } from '@angular/platform-browser';

@Injectable()
export class CustomHammerConfig extends HammerGestureConfig {
  override buildHammer(element: HTMLElement) {
    const mc = new Hammer(element, {
      touchAction: 'pan-y',
    });
    mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    return mc;
  }
}
