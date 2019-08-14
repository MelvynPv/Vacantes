import { Component, OnInit } from '@angular/core';
import {SlidersService} from 'src/app/services/sliders/sliders.service'
import {Router} from  '@angular/router'


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styles: []
})
export class SliderComponent implements OnInit {
  Sliders=[];

  constructor(private svcSlider: SlidersService,private router: Router) { }

  ngOnInit() {
    this.ObtenListaSlider();

    
  }

  ObtenListaSlider(){

    this.Sliders=this.svcSlider.ObtenerListaSliders();
  }

}
