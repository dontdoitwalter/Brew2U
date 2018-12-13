import { Component, OnInit, Inject, Input } from '@angular/core';
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
    private storesservice: StoresService,
     ) { }

  ngOnInit() {
    this.displayStores()
  }

  gotoUpdate(id) {
    this.router.navigate([`/admin/updatestoreadmin`, { id: id } ]);
  }

  addStore() {
    this.router.navigate([`/admin/addstoresadmin`]);
  }

  displayStores(): void {
    this.storesservice.getStores().subscribe(Store => {
      this.stores = Store
      console.log(this.stores)
    })
  }

  deleteStore(id): void {
    this.storesservice.deleteStore(id)
      .subscribe(Store => {
        this.stores = Store;
        console.log('delete store are we ever here');
        this.displayStores();
      },
        error => {
          this.error = error;
          // console.log(this.error);
          //// fix this sam!!! throws an error on delete
          this.displayStores();
        });
  }
}

