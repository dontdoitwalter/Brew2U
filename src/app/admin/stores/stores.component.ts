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


}
