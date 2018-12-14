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
  // storeName = '';
  onestore = [];
  data = [];

  constructor(private router: Router,
    private storesservice: StoresService,
    route: ActivatedRoute

  ) {
    this.id = route.snapshot.params['id'];
    // console.log(this.onestore)
  }

  ngOnInit() {
    // call the store in here a{nd throw it in inputs
    // findOneStore(id: number);
    //  this.findOneStoreNow(id);
    this.findOneStoreNow(this.id);
    console.log("are we in update ", this.id)


  }

  findOneStoreNow(id) {
    this.storesservice.findOneStore(id)
      .subscribe(
        data => {
          console.log(data);
          // console.log(data.storeName);
          this.onestore = data
          console.log('thisonestore ', this.onestore)
          // console.log('thisonestore ', this.onestore.storeName)



          // this.router.navigate([`/admin/storesadmin`]);
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
        }); console.log('finished updatea')
        this.router.navigate([`/admin/storesadmin`]);
  } 

}
