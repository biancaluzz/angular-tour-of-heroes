import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //IMPORT DE LA INTERFAZ
//import { HEROES } from '../mock-heroes'; //IMPORT DEL ARREGLO. YA NO LO NECESITO, YA QUE AHORA OBTENDRÁ LA INFORMACIÓN DEL SERVICIO, QUE ES EL ENCARGADO DEL ALMACENAMIENTO, EN LUGAR DE LA PROPIA CLASE
import { HeroService } from '../hero.service';
//import { MessageService } from '../message.service';

@Component({ //PARA CREAR UN COMPONENT heroes fue creado así (todas las clases de hero-detail se crearon automaticamente haciendo ng generate component hero-detail)
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  //heroes = HEROES; //HEROES ES EL ARREGLO EN mock-heroes
  //selectedHero?: Hero;

  constructor(private heroService: HeroService/*, private messageService: MessageService*/) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  /*onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }*/

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
