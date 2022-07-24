import { publishFacade } from '@angular/compiler';
import { Component } from '@angular/core';

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



  person = {
    name : 'Facundo',
    age : 26,
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'

    }  ;

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
}
