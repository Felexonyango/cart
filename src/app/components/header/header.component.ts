import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public totalItems:number=0
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(data=>{
       this.totalItems=data.length
    })

  }

}
