import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {XyzComponent} from "./xyz/xyz.component";
import {AppComponent} from "./app.component";
import {GetItemsComponent} from "./get-items/get-items.component";

export const routes: Routes = [
  { path: 'xyz', component: XyzComponent },
  { path: 'get-items', component: GetItemsComponent },
  {
    path: '**', component: AppComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
