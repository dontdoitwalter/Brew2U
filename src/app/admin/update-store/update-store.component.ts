import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, FormControl, NgModel } from '@angular/forms'
// import { HttpClient } from '@angular/common/http';
// import { Store } from '../../models/storesModel';
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
   stores = [];
   storeName = '';

  constructor(private router: Router,
    private storesservice: StoresService,
    route: ActivatedRoute
    
  ) { 
    this.id = route.snapshot.params['id'];

  }

  ngOnInit() {
    // call the store in here a{nd throw it in inputs
    // findOneStore(id: number);
      //  this.findOneStoreNow(id);
       this.findOneStoreNow(this.id);
       console.log(this.id)
      
  }

  findOneStoreNow(id) {
    this.storesservice.findOneStore(id)
    .subscribe(
      data => {
 console.log(data);
 console.log(data.store.storeName);
 var storeName = data.store.storeName

        // this.router.navigate([`/admin/storesadmin`]);
      },
      error => {
        this.error = error;
      });
}
  //   .subscribe(Store => {
  //     this.stores = Store;
  //     console.log('findOneStoreNow are we ever here');
  //       },
  //       error => {
  //         this.error = error;
  //         console.log(this.error);
  //       });
  // }

  updateStore(id, storeName, streetAddress, storeState, storeCity, storeZip, storePhone, storeHours) {
    this.storesservice.updateStore(id, storeName, streetAddress, storeState, storeCity, storeZip, storePhone, storeHours)
      .subscribe(
        data => {
          // this.router.navigate([`/admin/storesadmin`]);
        },
        error => {
          this.error = error;
          console.log(this.error)
        });
  }

}
