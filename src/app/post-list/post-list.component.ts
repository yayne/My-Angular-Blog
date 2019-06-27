import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts = [
    {
      title: 'Zizu',
      content: 'Zinédine Yazid Zidane, né le 23 juin 1972 à Marseille, est un footballeur international français devenu entraîneur.',
      loveIts: 0,
      create_at: new Date()
     },
     {
      title: 'Titi',
      content: 'Thierry Henry, né le 17 août 1977 aux Ulis (France), est un footballeur international français qui évolue au poste d\'attaquant entre 1994 et 2014.',
      loveIts: 0,
      create_at: new Date()
     },
     {
      title: 'Liza',
      content: 'Bixente Lizarazu [biˈʃente liˈs̪araˌs̪u], né le 9 décembre 1969 à Saint-Jean-de-Luz, est un footballeur international français évoluant au poste d’arrière gauche de la fin des années 1980 jusqu\'au milieu des années 2000 et reconverti comme consultant sportif.',
      loveIts: 0,
      create_at: new Date()
     }
  ]
  constructor() { }

  ngOnInit() {
  }

}
