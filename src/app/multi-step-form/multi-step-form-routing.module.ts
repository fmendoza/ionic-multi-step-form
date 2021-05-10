import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiStepFormPage } from './multi-step-form.page';

const routes: Routes = [
  {
    path: '',
    component: MultiStepFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiStepFormPageRoutingModule {}
