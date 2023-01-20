import { Component } from '@angular/core';
import { Hero } from 'src/app/hero';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  // input:string=prompt("What is your name?") as string;
   title="My Tour of Heroes";

  heroes: Hero[]=[];
  selectedHero?:Hero;
  onSelect(hero:Hero):void{
    this.selectedHero= hero;
  }

  getHeroes(): void {
    this.serviceService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  constructor(private serviceService:ServiceService){

  }

  ngOnInit(): void{
    this.getHeroes();
  }
}
