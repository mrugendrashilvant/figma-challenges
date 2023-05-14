import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() data: { heading: string, description: string } | undefined;
  showDetails: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
