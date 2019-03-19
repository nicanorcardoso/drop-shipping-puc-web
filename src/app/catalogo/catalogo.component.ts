import { Component, OnInit } from '@angular/core';
import { CatalogoService } from './catalogo.service';
import { ItemCatalogo } from './item-catalogo/item-catalogo.model';

@Component({
  selector: 'ds-catalogo',
  templateUrl: './catalogo.component.html',
})
export class CatalogoComponent implements OnInit {

  catalogo: ItemCatalogo[]

  constructor(private catalogoService: CatalogoService) { }

  ngOnInit() {
    this.catalogoService.catalogo()
    .subscribe(catalogo => this.catalogo = catalogo)
  }

}
