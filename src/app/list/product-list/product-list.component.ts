import { Component } from '@angular/core';

interface Product{
  name: string;
  category: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
  


export class ProductListComponent {
  product: Product[] = [
    {
      name: "Spf cream",
      category: "Beauty and health"
    },
    {
      name: "Face care set",
      category: "Beauty and health"
    },
    {
      name: "Sports watches",
      category: "Sports and hobbies"
    },
    {
      name: "Orthopedic goods",
      category: "Sports and hobbies"
    },
    {
      name: "Tablet",
      category: "Electronics"
    },
    {
      name: "Sports accessories",
      category: "Sports and hobbies"
    },
    {
      name: "Hair care set",
      category: "Beauty and health"
    },
    {
      name: "Powerbank",
      category: "Electronics"
    },
    {
      name: "Headphones",
      category: "Electronics"
    },
    {
      name: "Micelar water",
      category: "Beauty and health"
    },
    {
      name: "Body scrub",
      category: "Beauty and health"
    },
    {
      name: "Yoga",
      category: "Sports and hobbies"
    },
    {
      name: "Toner",
      category: "Beauty and health"
    },
    {
      name: "Serum with acids",
      category: "Beauty and health"
    },
    {
      name: "Expanders ",
      category: "Sports and hobbies"
    },
    {
      name: "Balls for fitness ",
      category: "Sports and hobbies"
    },
    
    {
      name: "Smartphone",
      category: "Electronics"
    },
    {
      name: "Belts and gloves for fitness ",
      category: "Sports and hobbies"
    },
    {
      name: "Dumbbells, discs, barbells, locks",
      category: "Sports and hobbies"
    },
    {
      name: "Projector",
      category: "Electronics"
    },
    {
      name: "Smartwatches",
      category: "Electronics"
    },
    {
      name: "TV",
      category: "Electronics"
    },
    {
      name: "Patches",
      category: "Beauty and health"
    },
    {
      name: "Lipbalm",
      category: "Beauty and health"
    },
    {
      name: "Laptop",
      category: "Electronics"
    },
    
    {
      name: "Digital camera",
      category: "Electronics"
    },
    {
      name: "Exercise bikes",
      category: "Sports and hobbies"
    },
    {
      name: "Face scrub",
      category: "Beauty and health"
    },
    {
      name: "Power simulators",
      category: "Sports and hobbies"
    },
    
    {
      name: "Music column",
      category: "Electronics"
    },
  ]
}
