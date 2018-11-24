import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
