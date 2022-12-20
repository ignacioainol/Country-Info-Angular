import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  existsError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.existsError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino)
      .subscribe(paises => {
        this.paises = paises;
      }, (err) => {
        this.existsError = true;
        this.paises = [];
      })

  }

  sugerencias(termino: string) {
    this.existsError = false;
    //todo crear sugerencias
  }


}
