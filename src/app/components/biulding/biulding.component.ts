import { Component } from '@angular/core';

@Component({
  selector: 'app-biulding',
  templateUrl: './biulding.component.html',
  styleUrl: './biulding.component.css'
})
export class BiuldingComponent {
  luz : boolean = true;

  click1(){
    if (this.luz === true){
      const janelas = window.document.querySelectorAll('#windon');

      janelas.forEach(janelas =>{
        janelas.classList.add('window');
        janelas.classList.remove('windon');
      })
      this.luz = false;
    }else{
      const janelas = window.document.querySelectorAll('#windon');

      janelas.forEach(janelas =>{
        janelas.classList.add('windon');
        janelas.classList.remove('window');
      })
      this.luz = true;

    }
  }

  click2(){
    if (this.luz === true){

    }else{
      
    }
  }

  click3(){
    if (this.luz === true){

    }else{
      
    }
  }
}
