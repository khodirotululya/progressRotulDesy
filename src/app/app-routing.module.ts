import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes:Routes=[
    { path:'shopping-list',component:ShoppingListComponent },
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}