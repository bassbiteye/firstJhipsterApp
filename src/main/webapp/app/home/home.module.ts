import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FirstJhipsterAppSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [FirstJhipsterAppSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class FirstJhipsterAppHomeModule {}
