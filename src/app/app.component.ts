import { publishFacade } from '@angular/compiler';
import { Component } from '@angular/core';
import {Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Facundo'; //La variable tiene que ser publica,si es privada no va a permitir ver 
  age = 26;
  img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';
  btnDisabled = true;
  newName= '';
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.png'
    }
  ]

  person = {
    name : 'Facundo',
    age : 26,
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'

    }  ;

    names : string[] = ['Nico','Juli','Santi'];

    //comportamientos
    toggleButton(){
      this.btnDisabled = !this.btnDisabled //lo niego para que me devuelva lo contrario, si esta en true pasa a false y viceversa
    };

    increaseAge (){
      this.person.age = this.person.age + 1;
    }

    onScroll (event: Event){
      const element = event.target as HTMLElement;
      console.log(element.scrollTop);
    }

    changeName(event: Event){
      const element = event.target as HTMLInputElement;
      this.person.name = element.value;
    };
    
    addName(){
      this.names.push(this.newName);
      this.newName = '';
    };

    deleteName(index:number){
      this.names.splice(index,1); // el uno indica cuantos eliminar
    };
}
