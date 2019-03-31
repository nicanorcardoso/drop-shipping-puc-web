import {ItemCatalogo} from '../catalogo/item-catalogo/item-catalogo.model'

export class ItemCarrinho{

    constructor(public itemCatalogo: ItemCatalogo,
        public quantity: number = 1){}
  
    value(): number{
        return this.itemCatalogo.vlrVenda * this.quantity 
    }
} 