import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, FormControl, NgModel } from '@angular/forms'
// import { HttpClient } from '@angular/common/http';
import { Store } from '../../models/storesModel';
import { StoresService } from '../../services/stores/stores.service';
import { ActivatedRoute } from '@angular/router';

// document.body.appendChild(form);

@Component({
  selector: 'app-update-store',
  templateUrl: './update-store.component.html',
  styleUrls: ['./update-store.component.css']
})
export class UpdateStoreComponent implements OnInit {
  error = '';
  id: number;
  store: Store;
  stores = [];


  constructor(private router: Router,
    private storesservice: StoresService,
    route: ActivatedRoute

  ) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.findOneStoreNow(this.id);
    // console.log("are we in update ", this.id)
  }

  findOneStoreNow(id) {
    this.storesservice.findOneStore(id)
      .subscribe(
        storeObjfromServer => {
          this.store = storeObjfromServer.store;
          console.log(this.store);
          console.log(this.store.storeName);
          console.log(this.store.storeState);

        },
        error => {
          this.error = error;
        });
  }

  updateStore(id, storeName, streetAddress, storeState, storeCity, storeZip, storePhone, storeHours) {
    this.storesservice.updateStore(id, storeName, streetAddress, storeState, storeCity, storeZip, storePhone, storeHours)
      .subscribe(
        data => {
        },
        error => {
          this.error = error;
          console.log(this.error)
        });
    this.storesservice.getStores().subscribe(Store => {
      this.stores = Store
      console.log(this.stores)
      this.router.navigate([`/admin/storesadmin`]);
    })
  }
} 
