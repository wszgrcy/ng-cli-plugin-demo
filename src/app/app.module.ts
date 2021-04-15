import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MainService } from './main.service';
import { ShowInMainModule } from './show-in-main';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {
          path: 'sub1',
          loadChildren: () => {
            return fetch(`${environment.sub1Prefix}bootstrap.json`)
              .then((item) => item.json())
              .then((res) => loadRemoteModuleManifest(res))
              .then((item) => item.module);
          },
        },
      ],
      { relativeLinkResolution: 'legacy' }
    ),
    ShowInMainModule,
  ],
  providers: [MainService],
  bootstrap: [AppComponent],
})
export class AppModule {}
