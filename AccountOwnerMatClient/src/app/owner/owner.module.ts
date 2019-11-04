import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerRoutingModule } from './owner-routing/owner-routing.module';
import { MaterialModule } from './../material/material.module';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { OwnerDataComponent } from './owner-details/owner-data/owner-data.component';
import { AccountDataComponent } from './owner-details/account-data/account-data.component';
import { OwnerCreateComponent } from './owner-create/owner-create.component';

@NgModule({
  declarations: [OwnerListComponent, OwnerDetailsComponent, OwnerDataComponent, AccountDataComponent, OwnerCreateComponent],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class OwnerModule { }
