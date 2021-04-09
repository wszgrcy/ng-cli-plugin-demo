import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor() {}
  run() {
    console.log('main!!!!主模块');
  }
}
