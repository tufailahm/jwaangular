import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm!: FormGroup;

  constructor(public formBuilder: FormBuilder,public productService:ProductService,public router:Router) { }

  ngOnInit(): void {

    this.productForm = this.formBuilder.group({
      productId: ['', Validators.required],
      productName: ['', [Validators.required, Validators.minLength(5)]],
      quantityOnHand: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]]
    })
  }


  saveProduct() {
    console.log(this.productForm.value);
    this.productService.saveProduct(this.productForm.value).subscribe((data:any)=> {
    },error => {
      this.router.navigate(['productlist']);
    })
  }
}
