import {
  Component,
  ComponentFactoryResolver,
  Inject,
  Injector,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-cli-plugin';
  routerUrl = '';
  routerPath = '';
  constructor(private main: MainService) {}
  ngOnInit(): void {
    this.main.run()
  }

}
