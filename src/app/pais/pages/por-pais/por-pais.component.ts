import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  existsError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.existsError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
      .subscribe(paises => {
        console.log(paises);
        this.paises = paises;
      }, (err) => {
        this.existsError = true;
        this.paises = [];
      })

  }


}
