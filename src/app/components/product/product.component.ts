import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { NotificationService } from '../../services/notification.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private service: ProductService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<ProductComponent>) { }



   ngOnInit() {


    
  

}
}
//   this.service.getProduct();
  // }

  // onClear() {
  //   this.service.form.reset();
  //   this.service.initializeFormGroup();
  //   this.notificationService.success(':: Submitted successfully');
  // }

  // onSubmit() {
  //   if (this.service.form.valid) {
  //     if (!this.service.form.get('$key').value)
  //       this.service.insertProduct(this.service.form.value);
  //     else
  //     this.service.updateProduct(this.service.form.value);
  //     this.service.form.reset();
  //     this.service.initializeFormGroup();
  //     this.notificationService.success(':: Submitted successfully');
  //     this.onClose();
  //   }
  // }

  // onClose() {
  //   this.service.form.reset();
  //   this.service.initializeFormGroup();
  //   this.dialogRef.close();
  // }