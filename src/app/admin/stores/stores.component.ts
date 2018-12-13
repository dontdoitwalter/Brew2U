import { Component, OnInit, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StoresService } from 'src/app/services/stores/stores.service';
// import {MatDialog} from '@angular/material';
// import {MAT_DIALOG_DATA} from '@angular/material';

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
    // public dialog: MatDialog
  ) { }

  // openDialog(id, storeName, streetAddress, storeState, storeCity, storeZip, storePhone, storeHours) {
  //   console.log(id, storeName, streetAddress, storeState, storeCity, storeZip, storePhone, storeHours)

  // openDialog() { };
  // this.dialog.open(DialogContentExampleDialog, {
  //   data: {
  //     id: this.id
  //   }
  //   const dialogRef = this.dialog.open(DialogContentExampleDialog);
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }


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

  // updateStore(id) {
  //   this.findOneStoreNow(id)

    // console.log(id, storeName, streetAddress, storeState, storeCity, storeZip, storePhone, storeHours)
    // this.openDialog(id, storeName, streetAddress, storeState, storeCity, storeZip, storePhone, storeHours)
    // I need a new page and I need to get and pass the id
    // [routerLink]="['/cart', { id:d.id } ]"
    // this.router.navigate([`/admin/updatestoreadmin`, { id: id } ]);
    // alert("this doesn't work yet sam, store id ");
  // }


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

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: '../../dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {
  // constructor(@Inject(MAT_DIALOG_DATA) public data: stores) { }
}


