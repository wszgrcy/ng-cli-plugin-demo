import {
  Component,
  ComponentFactoryResolver,
  Inject,
  Injector,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-cli-plugin';
  constructor(
    private injector: Injector,
    @Inject(ComponentFactoryResolver) private cfr: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}
  ngOnInit(): void {
    const load = (window as any).OtherModule;
    const factory = this.cfr.resolveComponentFactory(load.OtherComponent);
    this.viewContainerRef.createComponent(factory, null, this.injector);
  }
}
