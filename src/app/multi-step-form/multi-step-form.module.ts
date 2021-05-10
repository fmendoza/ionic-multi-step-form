import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiStepFormPage } from './multi-step-form.page';
import { MultiStepFormPageRoutingModule } from './multi-step-form-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
   MultiStepFormPageRoutingModule,
  ],
  declarations: [MultiStepFormPage]
})
export class MultiStepFormPageModule {}
