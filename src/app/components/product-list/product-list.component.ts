import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  message !: string;
  products: Product[] = []
  constructor(public productService:ProductService,public router:Router) { }

  ngOnInit(): void {
      this.refreshProducts();
 
  }

  deleteProduct(productId:any){
    console.log(productId)
    this.productService.deleteProduct(productId).subscribe((data:any)=> {
    },error => {
      //all the errors
      this.message = `Product with product id : ${productId} deleted successfully `;
      this.refreshProducts();
    })
  }


  refreshProducts(){
    this.productService.getProducts().subscribe((data:any[])=> {
      console.log("###Products recieved from spring :")
      console.log(data);  
      this.products = data
    })
  }

  addProduct()
  {
    this.router.navigate(['productadd'])
    //code to navigate to add product component

  }
}
