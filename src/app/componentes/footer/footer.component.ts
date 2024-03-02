import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  llevarAredSocial(red: string){
    window.open("https://"+red+".com", "_blank")
  }

  canalMiduDev(){
    window.open("https://www.youtube.com/@midulive","_blank")
  }
  canalMagtimus(){
    window.open("https://www.youtube.com/@MagtimusPro","_blank")
  }
  canalFaztCode(){
    window.open("https://www.youtube.com/@FaztCode","_blank")
  }
  canalHdLeon(){
    window.open("https://www.youtube.com/@hdeleonnet","_blank")
  }
  canalFreeCodeCamp(){
    window.open("https://www.youtube.com/@freecodecamp","_blank")
  }
}
