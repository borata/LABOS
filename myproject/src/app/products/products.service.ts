import { environment } from './../../environments/environment';
// konstruktor połączeni z firebasem getBYi

import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

    environment
  constructor() { }

  
  getProducts(): any {
    this.newMethod();
  }

    private newMethod() {
        throw new Error("Method not implemented.");
    }
}
