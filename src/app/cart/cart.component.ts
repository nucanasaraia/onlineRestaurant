import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnInit {
    constructor(public api: ApiService) {}
  
    public cartList: any;
  
    ngOnInit(): void {
      this.showCartFoods();
    }
  
    showCartFoods() {
      this.api.getCartList().subscribe(data => {
        console.log(data);
        this.cartList = data;
      });
    }
  
    deleteMyFood(id: any) {
      this.api.deleteproduct(id).subscribe(data => {
        alert("Product deleted");
        this.showCartFoods();
      });
    }
  
    incrementQuantity(item: any) {
      item.quantity++;
      this.updateCartItem(item);
    }
  
    decrementQuantity(item: any) {
      if (item.quantity > 1) {
        item.quantity--;
        this.updateCartItem(item);
      }
    }
  
    updateCartItem(item: any) {
      this.api.updateCartItem({
        quantity: item.quantity,
        price: item.product.price,
        productId: item.product.id,
      }).subscribe(response => {
        console.log("Item updated");
      });
    }

    getTotalPrice(): number {
      let totalPrice = 0;
  
      if (this.cartList) {
        for (let item of this.cartList) {
          totalPrice += item.quantity * item.product.price;
        }
      }
  
      return totalPrice;
    }
}
