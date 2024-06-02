import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public api: HttpClient) { }

  getAllFoods(){
    return this.api.get("https://restaurant.stepprojects.ge/api/Products/GetAll")
  }

  getCategories() {
    return this.api.get("https://restaurant.stepprojects.ge/api/Categories/GetAll")
  }

  getFoodsByCategory(id: any) {
    return this.api.get(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`)
  }

  getFiltered() {
    return this.api.get("https://restaurant.stepprojects.ge/api/Products/GetFiltered");
  }


  postFood(body: any) {
    return this.api.post("https://restaurant.stepprojects.ge/api/Baskets/AddToBasket", body, { responseType: "text" });
  }

  getCartList() {
    return this.api.get("https://restaurant.stepprojects.ge/api/Baskets/GetAll");
  }

  deleteproduct(id: any) {
    return this.api.delete(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`, { responseType: "text" });
  }

  updateCartItem(body: any) {
    return this.api.put("https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket", body, { responseType: "text" });
  }

  filterProducts(sicxare: any, txileuloba: any, vegetarian: any) {
    return this.api.get(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?vegeterian=${vegetarian}&nuts=${txileuloba}&spiciness=${sicxare}`)
  }

  getProductsByCategory(id: any) {
    return this.api.get(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`)
  }
}

