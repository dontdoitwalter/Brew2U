import { Component, OnInit, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StoresService } from 'src/app/services/stores/stores.service';

@Component({
  selector: 'app-display-stores',
  templateUrl: './display-stores.component.html',
  styleUrls: ['./display-stores.component.css']
})
export class DisplayStoresComponent implements OnInit {
  error = '';
  stores=[]

  constructor(private router: Router,
    private storesservice: StoresService,
     ) { }

  ngOnInit() {
    this.displayStores()

  }
  displayStores(): void {
    this.storesservice.getStores().subscribe(Store => {
      this.stores = Store
      console.log(this.stores)
    })
  }
}
