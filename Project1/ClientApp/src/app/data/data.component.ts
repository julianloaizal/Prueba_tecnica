import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html'
})
export class DataComponent {
  public pruebaSD: PruebaSD[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<PruebaSD[]>(baseUrl + 'pruebaSD').subscribe(result => {
      this.pruebaSD = result;
    }, error => console.error(error));
  }
}

interface PruebaSD {
  usuID: number;
  nombre: string;
  apellido: string;
  
}
