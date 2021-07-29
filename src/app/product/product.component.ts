import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  Search:String = "";
  productList :any=[];

  //pservice:any = this.productService;
  constructor(private route:ActivatedRoute,private router:Router,private service:ProductsServiceService) {
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.getCustomersList();
    });   
  }  
  getCustomersList(){
    this.service.ServiceGetProducts().subscribe(data=>{
      console.log(data);
      this.productList=data;
      
    });
  }
pservice:any = this.productList;
  getStars(rating:number):string[]{
    let starts = []
    for(let i=0;i<5;i++){
      if (i<rating)
        starts.push("changed");
      else
        starts.push("");
    }
    return starts;
  }
  
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
  onSearchChange(Search: string){
    this.pservice = [];
    if (Search=="")
      this.pservice = this.productList;
    else{
      for (let product of this.productList){
        if (product.Name.toLowerCase().match(Search.toLowerCase())){
          this.pservice.push(product);
        }
      }
    }
  }

  onSearchId(Search: number){
    this.pservice = [];
    if (!Search)
      this.pservice = this.productList;
    else{
      for (let product of this.productList){
        if (product.Id==Search){
          this.pservice.push(product);
        }
      }
    }
  }

}
