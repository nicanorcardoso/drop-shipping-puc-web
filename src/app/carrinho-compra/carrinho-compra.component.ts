import { Component, OnInit } from '@angular/core';
import { CarrinhoCompraService } from './carrinho-compra.service';
import { ItemCatalogo } from 'app/catalogo/item-catalogo/item-catalogo.model';
import { ItemCarrinho } from './item-carrinho.model';
import { CatalogoService } from 'app/catalogo/catalogo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ds-carrinho-compra',
  templateUrl: './carrinho-compra.component.html',
})
export class CarrinhoCompraComponent implements OnInit {

  itemCatalogo: ItemCatalogo
  
  constructor(private catalogoService: CatalogoService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.catalogoService.itemCatalogoById(this.route.snapshot.params['id'])
    .subscribe(itemCatalogo => this.itemCatalogo = itemCatalogo) 
  }


}
