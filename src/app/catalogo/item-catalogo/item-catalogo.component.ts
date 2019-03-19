import { Component, OnInit, Input } from '@angular/core';
import { ItemCatalogo } from './item-catalogo.model';

@Component({
  selector: 'ds-item-catalogo',
  templateUrl: './item-catalogo.component.html',

})
export class ItemCatalogoComponent implements OnInit {

  @Input() itemCatalogo: ItemCatalogo


  constructor() { }

  ngOnInit() {
  }

}
