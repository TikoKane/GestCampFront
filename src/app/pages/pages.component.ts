import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
  <ngx-one-column-layout>
  <nb-menu [items]="MENU_ITEMS"></nb-menu>
  <router-outlet></router-outlet>
</ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit{
  MENU_ITEMS: NbMenuItem[]=[];
  hiEditeur : boolean;
  hiResponsable : boolean;
  
  ngOnInit(): void {
    if (parseInt(localStorage.getItem("idRole"))==2) {
        this.hiEditeur =true;
    }

    if (parseInt(localStorage.getItem("idRole"))==3) {
        this.hiResponsable =true;
    }

    this.MENU_ITEMS=[ {
     
      title: 'Dashboard',
      icon: 'home-outline',
      link: '/pages/accueil/d3',
      home: true,
      hidden : this.hiEditeur 
    },
    {
      title: 'Fonctionnalités',
      group: true,
    },
    {
      hidden : this.hiEditeur || this.hiResponsable,
      title: 'Utilisateur',
      icon: 'person-outline',
      link: '/pages/utilisateur/add',
    },
    {
      title: 'Contact',
      icon: 'people-outline',
      children: [
        {
          title: 'Ajouter un contact',
          link: '/pages/contact/add',
        },
        {
          title: 'Importer des contacts',
          link: '/pages/contact/import',
        },
        {
          title: 'List des contact',
          link: '/pages/contact/list',
        },
      ],
    },
    {
      title: 'Liste de diffusion',
      icon: 'file-text-outline',
      link: '/pages/liste_de_diffusion/add',
    },
    {
      title: 'Modèle',
      icon: 'clipboard-outline',
      link: '/pages/modele/add',
    },
    {
      title: 'Catégorie',
      icon: 'options-2-outline',
      link: '/pages/categorie/add',
    },
    {
      title: 'Campagne',
      icon: 'message-circle-outline',
      link: '/pages/ui-features',
      children: [
        {
          title: 'Créer une campagne',
          link: '/pages/campagne/add',
        },
        {
          title: 'Liste des campagne',
          link: '/pages/campagne/list',
        },
      ],
    },
    { hidden : this.hiEditeur || this.hiResponsable,
      title: 'Canal Envoie',
      icon: 'paper-plane-outline',
      children: [
        {
          title: 'Liste des canaux',
          link: '/pages/canalenvoi/list',
        },
      ],
    },
    {
      title: 'Paramètre du compte',
      icon: 'settings-2-outline',
      link: '/pages/compte/infos',
    },]
  }

}
