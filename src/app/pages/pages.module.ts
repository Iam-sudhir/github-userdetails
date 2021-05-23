import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesComponent} from './pages.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';
import {SharedModule} from '../shared/shared.module';
@NgModule({
  declarations: [PagesComponent, UserDetailsComponent, RepositoryDetailsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgbModule,
    SharedModule
  ],
  bootstrap: [RepositoryDetailsComponent]
})
export class PagesModule { }
