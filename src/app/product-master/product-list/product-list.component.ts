import { Component, OnInit, SimpleChanges } from '@angular/core';
import { IProductDetails } from 'src/app/models/users.model'
import { Router, ActivatedRoute } from '@angular/router';
import { ProductListService } from 'src/app/services/product-list.service';
import { CartService } from 'src/app/services/cart.service';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  public productDetails: IProductDetails[]=[];
  public temp: IProductDetails;
  Totleprice: number = 0;
  Totlestock: number = 0;
  cartProductArray: IProductDetails[];
  ttlsearch:string="";
  idsearch:string="";
  search:string="";
  selecteditem;

  constructor(private route: ActivatedRoute,private fp:FilterPipe, private router: Router, private _cartproduct: CartService, private _productListService: ProductListService) { }

  ngOnInit() {
    this._productListService.getProductsdata().subscribe((data)=>{
      this.productDetails=data;
      console.log(this.productDetails);
    },
      (err) => console.log(err),
      () => {
        this.TOTAL();
      });
    this.cartProductArray = this._cartproduct.cartProduct;
    
  }

  TOTAL() {
    console.log(this.productDetails);
    this.Totleprice = this.productDetails.reduce((total, product) => {
      return total += product.price;
    }, 0);
    console.log(this.Totleprice);
    this.Totlestock = this.productDetails.reduce(function (acc: number, product: IProductDetails) {
      return acc += product.stock;
    }, 0);
    console.log(this.Totlestock);
  }

  deleteRoute(id) {
    this._productListService.deleteProductdata(id).subscribe(d=>{
      console.log(this.productDetails)
    },
    (err)=>console.log(err),
    ()=>this.TOTAL());
  }

  addToCart(id) {
    if( this.cartProductArray.find(item => item.id === id)){
      alert('already in cart');
    }
    else{
      this._productListService.getProductdata(id).subscribe(data=>{
        this.selecteditem=data;
      },
      (err)=>console.log(err),
      ()=>{
        this.selecteditem.quantity=1;
        this.cartProductArray.push(this.selecteditem);
      })
      }
  }

  showCart(){
    this.router.navigateByUrl('/products/addtocart');  
  }

  getsearchdata(data){
    if(data){
    if(data==this.search){
    this.productDetails=this.fp.transform(this.productDetails,['product_id','title'], this.search);
    }  
    else if(data==this.ttlsearch){
      this.productDetails=this.fp.transform(this.productDetails,['title'], this.ttlsearch);
    }
    else if(data==this.idsearch){
      this.productDetails=this.fp.transform(this.productDetails,['product_id'], this.idsearch);
    }}
    else{
      this._productListService.getProductsdata().subscribe(data=>this.productDetails=data);
    }
  }

  addProductRouter() {
    this.router.navigateByUrl('/products/add');
  }

  editproductRoute(id) {
    this.router.navigate(['/products/add', id]);
  }

}
