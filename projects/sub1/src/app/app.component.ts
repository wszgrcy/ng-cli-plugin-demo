import { Component } from '@angular/core';
import { MainService } from '@center-main/app/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sub1';
  constructor(private main: MainService) {}
  click() {
    import('./const').then((item) => console.log(item.PRINT_LOG));
  }
  runMainService() {
    this.main.run();
  }
}
