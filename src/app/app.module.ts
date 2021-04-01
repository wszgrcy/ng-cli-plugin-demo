import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      // {
      //   path: 'remote',
      //   loadChildren: () => {
      //     return (window as any).loadRemoteModule('./Remote.js').then((e) => {
      //       console.log(e);
      //       return e.RemoteModule;
      //     });
      //   },
      // },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
