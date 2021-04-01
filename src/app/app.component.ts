import {
  Component,
  ComponentFactoryResolver,
  Inject,
  Injector,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-cli-plugin';
  routerUrl = '';
  routerPath = '';
  constructor(
    private injector: Injector,
    @Inject(ComponentFactoryResolver) private cfr: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private router: Router
  ) {}
  ngOnInit(): void {}
  reset() {
    this.router.resetConfig([
      {
        path: this.routerPath,
        loadChildren: () =>
          loadRemoteModule(this.routerUrl).then((e) => e.module),
      },
    ]);
  }
}
