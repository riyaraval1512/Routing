import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {IProductDetails} from 'src/app/models/users.model';
import {ProductListService} from 'src/app/services/product-list.service';
import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private fb:FormBuilder,private _productListService: ProductListService,private route:Router,private router:ActivatedRoute) { }

  hiddenForm: boolean = false;
  id:number;
  ttl: string = "";
  prc: number = 0;
  stk: number = 0;
  product;
  newProduct:IProductDetails;
  index:number=0;
  productDetails:IProductDetails[]=[];
  
  ngOnInit() {
    this._productListService.getProductsdata().subscribe(data=>this.productDetails=data);
    this.router.paramMap.subscribe(params => {
      this.id=parseInt(params.get('id'));
    });
    console.log(this.id);
    if(this.id){
      this._productListService.getProductdata(this.id).subscribe((data:{})=>{
        this.product=data;
        console.log(this.product);
      },
        (err) => console.log(err),
        () => {
          this.addProductForm.setValue({title:this.product.title,price:this.product.price,stock:this.product.stock});
        }
      );
    }
    else{
      this.addProductForm.setValue({title:'',price:0,stock:0});
    }
  }

  addProductForm = this.fb.group(
    {
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      stock: ['', [Validators.required, Validators.min(1)]]
    });

    onSubmit() {
      this.ttl = this.addProductForm.controls['title'].value;
      this.prc = this.addProductForm.controls['price'].value;
      this.stk = this.addProductForm.controls['stock'].value;
      if (this.id){
        // let selecteditem = this.productDetails.find(item => item.product_id === this.product.product_id);
        // this.index=this.productDetails.indexOf(selecteditem);
        this.product={id:this.product.id,title:this.ttl,price:this.prc,stock:this.stk};
        this._productListService.updateData(this.product).subscribe(data=>{
          console.log(this.product);
          //this.route.navigateByUrl('/products/productlist');
        },
        (err)=>console.log(err),
        ()=>{
        this.addProductForm.reset();
        this.route.navigateByUrl('/products/productlist');}
        )
      }
      else{
        // this.index=this.productDetails.length;
        // this.index=this.productDetails[this.index-1].product_id;
        // this.newProduct = {product_id: this.index+1, title: this.ttl, price: this.prc, stock: this.stk}
        // this.productDetails.push(this.newProduct);

        this.product={title:this.ttl,price:this.prc,stock:this.stk};
        this._productListService.createProductdata(this.product).subscribe(data=>{
          console.log(this.product);
        },
        (err)=>console.log(err),
        ()=>{
        this.addProductForm.reset();
        this.route.navigateByUrl('/products/productlist');}
        )
      }
    }
  
    onReset() {
      this.addProductForm.reset();
    }

}
