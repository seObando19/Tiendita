import { Component, OnInit } from '@angular/core';
import { Products } from "../interfaces/products.interfaces";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  arrProducts: Products[] = [
    {
      name:'Libros',
      image:'https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_960_720.jpg',
      price: 134,
      stock: true
    },
    {
      name:'Monitores',
      image: 'https://cdn.pixabay.com/photo/2016/11/29/08/41/apple-1868496_960_720.jpg',
      price: 240,
      stock: true
    },
    {
      name:'Guitarras',
      image: 'https://cdn.pixabay.com/photo/2017/05/01/18/18/guitar-2276181_960_720.jpg',
      price: 80,
      stock: false
    },
    {
      name:'Medicinas',
      image:'https://cdn.pixabay.com/photo/2016/11/23/15/03/medications-1853400_960_720.jpg',
      price: 100,
      stock: true
    },
    {
      name:'Camaras',
      image:'https://cdn.pixabay.com/photo/2015/02/05/09/11/kamaera-624740_960_720.jpg',
      price: 450,
      stock: false
    },
    {
      name:'Ropa',
      image: 'https://cdn.pixabay.com/photo/2017/10/13/05/26/silk-tie-2846862_960_720.jpg',
      price: 200,
      stock: true
    },
    {
      name:'Celulares',
      image:'https://cdn.pixabay.com/photo/2015/01/20/13/13/samsung-605439_960_720.jpg',
      price: 334,
      stock: true
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
