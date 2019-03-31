import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { CustomersListComponent } from "./customers-list/customers-list.component";
import { CatalogoComponent } from "./catalogo/catalogo.component";
import { ItemCatalogoComponent } from "./catalogo/item-catalogo/item-catalogo.component";
import { CarrinhoCompraComponent } from "./carrinho-compra/carrinho-compra.component";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'catalogo', component: CatalogoComponent},
    {path: 'item-catalogo', component: ItemCatalogoComponent},
    {path: 'catalogo/:id', component: CarrinhoCompraComponent},
    {path: 'customers-list', component: CustomersListComponent}/*
        children:[
            {path: '', redirectTo: 'menu', pathMatch: 'full'}, //quando não for informado nada após /restaurant/id redireciona para o menu
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent}
    ]}*/
]; 