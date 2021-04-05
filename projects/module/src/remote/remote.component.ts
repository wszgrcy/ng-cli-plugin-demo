import { Component, OnInit } from '@angular/core';
import { MainService } from '@main/main.service';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.scss'],
})
export class RemoteComponent implements OnInit {
  constructor(private main: MainService) {}

  ngOnInit() {}
  run() {
    console.log('准备执行主模块服务');
    this.main.run();
  }
}
