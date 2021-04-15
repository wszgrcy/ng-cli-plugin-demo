import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private random = Math.random();
  constructor() {}
  run() {
    console.log('random value', this.random);
  }
}
