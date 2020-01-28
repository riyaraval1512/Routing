import { Component, OnInit, SimpleChanges } from '@angular/core';
import { IProductDetails } from 'src/app/models/users.model'
import { Router, ActivatedRoute } from '@angular/router';
import { ProductListService } from 'src/app/services/product-list.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public productDetails: IProductDetails[];
  public temp: IProductDetails;
  Totleprice: number = 0;
  Totlestock: number = 0;
  cartProductArray: IProductDetails[]

  constructor(private route: ActivatedRoute, private router: Router, private _cartproduct: CartService, private _productListService: ProductListService) { }

  ngOnInit() {
    this.productDetails = this._productListService.productDetails;
    this.cartProductArray = this._cartproduct.cartProduct;
    this.updateProductStock();
  }

  updateProductStock() {
    this.Totleprice = this.productDetails.reduce((total, product) => {
      return total += product.price;
    }, 0);
    this.Totlestock = this.productDetails.reduce(function (acc: number, product: IProductDetails) {
      return acc += product.stock;
    }, 0);
  }

  deleteRoute(id) {
    let selecteditem = this.productDetails.find(item => item.product_id === id);
    this.productDetails.splice(this.productDetails.indexOf(selecteditem), 1);
    this.updateProductStock();
  }

  addToCart(id) {
    if( this.cartProductArray.find(item => item.product_id === id)){
      alert('already in cart');
    }
    else{
      let selecteditem = this.productDetails.find(item => item.product_id === id);
      selecteditem.quantity=1;
      this.cartProductArray.push(selecteditem);
    }
  }

  showCart(){
    this.router.navigateByUrl('/products/addtocart');
    
  }

  addProductRouter() {
    this.router.navigateByUrl('/products/add');
  }

  editproductRoute(id) {
    this.router.navigate(['/products/add', id]);
  }

}
