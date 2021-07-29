import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  Search:String = "";
  productService = [
    {Id:1,Price:1500,Name:"Cosmic Byte headphones",Description:"Giving you next level gaming experience",Image_name:"../assets/Images/CosmicByteHeadphones.jpeg",Rating:4},
    {Id:2,Price:120000,Name:"IPhone 12 Pro Max",Description:"A very beautiful and elegant device",Image_name:"https://img.phonandroid.com/2020/06/concept-iphone-douze.jpg",Rating:5},
    {Id:3,Price:15000,Name:"Poco F1",Description:"The beast in your pocket",Image_name:"https://zeedong.com/wp-content/uploads/2021/04/ggg-1.jpg",Rating:3},
    {Id:4,Price:2000,Name:"Bluetooth Mouse",Description:"Keep conncted without connection",Image_name:"https://m.media-amazon.com/images/I/81hcEqMZEFL._AC_SL1500_.jpg",Rating:4},
    {Id:5,Price:150000,Name:"Mac book pro",Description:"Secure like never before",Image_name:"https://cdn.ndtv.com/tech/images/gadgets/macbook_air_apple_official_site.jpg",Rating:5},
    {Id:6,Price:20000,Name:"Air pods",Description:"No delay. Music at its best",Image_name:"https://icdn.digitaltrends.com/image/digitaltrends/apple-airpods-pro-press-release-1080.jpg",Rating:4},
    {Id:7,Price:5000,Name:"Hard Disk",Description:"Refined designed with massive capacity",Image_name:"https://www.estufs.com/wp-content/uploads/2017/10/Seagate-announces-gigantic-hard-disk-drive-Barracuda-for-storage-of-4k-videos.jpg",Rating:5},
    {Id:8,Price:40000,Name:"Apple watch",Description:"Advanced Technology in your hand",Image_name:"https://images-na.ssl-images-amazon.com/images/I/61VUa2A6%2BsS._AC_SX522_.jpg",Rating:4},
    {Id:9,Price:50000,Name:"Tablet",Description:"Everything in one!!",Image_name:"https://i.pinimg.com/originals/7f/0a/55/7f0a55a7eefbcddd537966b6f6b38236.jpg",Rating:5},
    {Id:10,Price:80000,Name:"Smart TV",Description:"Big Screen new Experience",Image_name:"https://images.jdmagicbox.com/quickquotes/images_main/kevin-kn55uhd-139-7-cm-55-4k-ultra-hd-smart-led-tv-black-106489503-db6so.jpg",Rating:4}
  ]
  pservice:any = this.productService;
  constructor() {
   }

  ngOnInit(): void {
  }

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
      this.pservice = this.productService;
    else{
      for (let product of this.productService){
        if (product.Name.toLowerCase().match(Search.toLowerCase())){
          this.pservice.push(product);
        }
      }
    }
  }

  onSearchId(Search: number){
    this.pservice = [];
    if (!Search)
      this.pservice = this.productService;
    else{
      for (let product of this.productService){
        if (product.Id==Search){
          this.pservice.push(product);
        }
      }
    }
  }

}
