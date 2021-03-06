import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { StockUpdateComponent } from './stock-update/stock-update.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductListComponent } from './product-list.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddProductToCartComponent } from './add-product-to-cart/add-product-to-cart.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { PipeModule } from 'src/app/pipes/pipe.module';
import { FilterPipe } from 'src/app/pipes/filter.pipe';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full'
  },
  {
    path:'productlist', 
    component:ProductListComponent
  },
  {
    path:'add', 
    component:AddProductComponent
  },
  {
    path:'add/:id', 
    component:AddProductComponent
  },
  {
    path:'addtocart', 
    component:AddProductToCartComponent
  },
  {
    path:'stock', 
    component:StockUpdateComponent
  }
];

@NgModule({
  declarations: [
    ProductListComponent,
    AddProductComponent,
    StockUpdateComponent,
    DeleteProductComponent,
    AddProductToCartComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule
  ],
  exports:[
    RouterModule
  ]
})
export class ProductListRoutingModule { }
