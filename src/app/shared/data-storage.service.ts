import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';

@Injectable()
export class DataStorageService {
  storeShoppinglist(): any {
    throw new Error("Method not implemented.");
  }
}