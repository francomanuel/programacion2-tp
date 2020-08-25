import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ClienteSharedModule } from 'app/shared/shared.module';
import { ClienteCoreModule } from 'app/core/core.module';
import { ClienteAppRoutingModule } from './app-routing.module';
import { ClienteHomeModule } from './home/home.module';
import { ClienteEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ClienteSharedModule,
    ClienteCoreModule,
    ClienteHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ClienteEntityModule,
    ClienteAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class ClienteAppModule {}
