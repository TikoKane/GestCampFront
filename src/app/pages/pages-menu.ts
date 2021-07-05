import { NbMenuItem } from '@nebular/theme';
<<<<<<< HEAD

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
    home: true,
  },
  {
    title: 'Fonctionnalités',
    group: true,
  },
  {
    title: 'Utilisateur',
    icon: 'person-outline',
    children: [
      {
        title: 'Ajouter un utilisateur',
        link: '/pages/utilisateur/add',
      },
      {
        title: 'Liste des utilisateurs',
        link: '/pages/utilisateur/list',
      },
    ],
  },
  {
    title: 'Contact',
    icon: 'people-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Ajouter un contact',
        link: '/pages/contact/add',
      },
      {
        title: 'Importer des contacts',
        link: '/pages/contact/add',
      },
      {
        title: 'Liste des contact',
        link: '/pages/contact/list',
      },
    ],
  },
  {
    title: 'Liste de diffusion',
    icon: 'file-text-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Créer une liste de diffusion',
        link: '/pages/listediffusion/add',
      },
      {
        title: 'Liste des listes de diffusion',
        link: '/pages/listediffusion/list',
      },
    ],
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
  {
    title: 'Canal Envoie',
    icon: 'paper-plane-outline',
    children: [
      {
        title: 'Ajouter un canal',
        link: '/pages/canalenvoi/add',
      },
      {
        title: 'Liste des canaux',
        link: '/pages/canalenvoi/list',
      },
    ],
  },
  {
    title: 'Paramètre du compte',
    icon: 'settings-2-outline',
    children: [
      {
        title: 'Infos du compte',
        link: '/pages/compte/infos',
      },
      {
        title: 'Changer mot de passe',
        link: '/pages/compte/mod',
      },
    ],
  },
];
=======
export const MENU_ITEMS: NbMenuItem[] = [];
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
