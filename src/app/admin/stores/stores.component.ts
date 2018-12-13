import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoresService } from 'src/app/services/stores/stores.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
  error = '';
  stores = []

  constructor(private router: Router,
    private storesservice: StoresService
  ) { }

  ngOnInit() {
    this.displayStore()
  }

  addStore() {
    this.router.navigate([`/admin/addstoresadmin`]);
  }


  displayStore(): void {
    this.storesservice.getStores().subscribe(Store => {
      this.stores = Store
      console.log(this.stores)
    })
  }

  updateStore(id) {
    // I need a new page and I need to get and pass the id
    // [routerLink]="['/cart', { id:d.id } ]"
    this.router.navigate([`/admin/updatestoreadmin`, { id: id } ]);
    alert("this doesn't work yet sam, store id ");
  }

  deleteStore(id) : void {
    this.storesservice.deleteStore(id)
      .subscribe(Store => {
        this.stores = Store;
        console.log('delete store are we ever here');
        this.displayStore();
      },
        error => {
          this.error = error;
          // console.log(this.error);
          //// fix this sam!!! throws an error on delete
          this.displayStore();  
        }); 
      }
}



