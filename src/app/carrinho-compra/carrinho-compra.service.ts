import { ItemCarrinho } from "./item-carrinho.model";
import { ItemCatalogo } from "app/catalogo/item-catalogo/item-catalogo.model"


export class CarrinhoCompraService {

    items: ItemCarrinho[] = []

    addItem(item: ItemCatalogo) {
        let foundItem = this.items.find((mItem) => mItem.itemCatalogo.id == item.id)     
        if(foundItem){
            foundItem.quantity = foundItem.quantity + 1
        }else{
            this.items.push(new ItemCarrinho(item))
        }
    }    
}
