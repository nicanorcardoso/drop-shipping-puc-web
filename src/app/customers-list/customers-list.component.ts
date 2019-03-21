import { Component, OnInit } from '@angular/core';
import { Customers } from './customers.model';
import { CustomersService } from './customers.service';

@Component({
  selector: 'ds-customers-list',
  templateUrl: './customers-list.component.html',
})
export class CustomersListComponent implements OnInit {

  customers: Customers[]

  constructor(private customerService: CustomersService) { }

  ngOnInit() {
    this.customerService.customers()
    .subscribe(customers => this.customers = customers)
  }

}
