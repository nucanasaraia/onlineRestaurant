import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(public myService: ApiService, public router: Router) {}


 
  public foodList: any;
  public categories: any
  public nomeri: any

  ngOnInit(): void {
   this.showAllFoods()
   this.showCategories()
   this.showAll();
  }

  getID(id: any) {
    console.log(id);
    this.nomeri = id
    this.myService.getFoodsByCategory(id).subscribe((ragac: any) => {
      console.log(ragac);
      this.foodList = ragac.products
      
    })
  }

  showAllFoods() {
    this.nomeri = 0
    this.myService.getAllFoods().subscribe(food => {
      console.log(food);
      this.foodList = food
      console.log(this.foodList); 
    })
  }

  showCategories() {
    this.myService.getCategories().subscribe(nav => {
       this.categories = nav
       console.log(this.categories);
       
    })
  }

  getDetails(item:any) {
      this.router.navigate(["/details"], {queryParams: item})
  }


  showAll() {
    this.myService.getAllFoods().subscribe((data) => {
      console.log(data);
      this.foodList = data;
    });
  }

  addToCart(productId: any, foodPrice: any) {
    this.myService.postFood({
      quantity: 1, 
      price: foodPrice,
      productId: productId,
    }).subscribe(response => {
    alert("product added")
    });
  }


  public categoryList: any
  public sicxare: string = "";
  public txili: string = "";
  public vegetarianuli: string = ""

  filterFoods() {
    if (this.sicxare == "-1") {
      this.sicxare = ""
    }
    this.myService.filterProducts(this.sicxare, this.txili, this.vegetarianuli).subscribe(data => {
      console.log(data);
      this.foodList = data
      
    })
    
  }
  
  getAllCategories() {
    this.myService.getCategories().subscribe(lists => {
  console.log(lists);
    this.categoryList = lists
    })
  }

  showByCategory(foodId: any) {
    this.myService.getProductsByCategory(foodId).subscribe((data:any) => {
      console.log(data.products);
      this.foodList = data.products
      
    })
  }

  resetFood() {
    this.sicxare = ""; 
    this.txili = ""; 
    this.vegetarianuli = ""; 
  }
}

