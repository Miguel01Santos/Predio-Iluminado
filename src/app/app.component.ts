import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjectClimate';
  ceu : string = 'dia';
  day : boolean = false;


  noite(){
    const status = this.ceu
    console.log('está de dia');
    const dia = window.document.getElementById('sky');
    dia?.classList.add('noite');
    dia?.classList.remove('dia');
    const foot = window.document.getElementById('footer');
    foot?.classList.add('footerNoite');
    foot?.classList.remove('footer');

    this.ceu = 'noite';
    this.day = false;

  };

  dia(){
    const status = this.ceu
    
    console.log('está de noite');
    const dia = window.document.getElementById('sky');
    dia?.classList.add('dia');
    dia?.classList.remove('noite');
    const foot = window.document.getElementById('footer');
    foot?.classList.add('footer');
    foot?.classList.remove('footerNoite');

    this.ceu = 'dia';
    this.day = false;

  }

  nuvens(){
    if(this.ceu === 'dia'){
      this.day = true;
    }
    
    
  }
    

  click(){

  }
}
