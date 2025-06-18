import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Inicio',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Candidatos',
    url: '/candidates/list',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Usuarios',
    url: '/user/list-user',
    iconComponent: { name: 'cilUser' }
  },
  {
    name: 'Elecciones',
    title: true
  },
  {
    name: 'ELECCIONES',
    url: '/election',
    iconComponent: { name: 'cilUser' },
    children: [
      {
        name: 'Descripcion General',
        url: '/election/list',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Resultados',
        url: '/charts',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Crear Eleccion',
        url: '/election/create',
        icon: 'nav-icon-bullet'
      },
      // {
      //   name: 'Votantes',
      //   url: '',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Votacion',
      //   url: '',
      //   icon: 'nav-icon-bullet'
      // },
      {
        name: 'Ajustes',
        url: '/election/settings/general',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Votaciones',
    title: true
  },
  {
    name: 'Votantes',
    url: '/voter',
    iconComponent: { name: 'cilUser' },
    children: [
      {
        name: 'Lista de Votantes',
        url: '/voter/list',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Actualizar Datos',
        url: '/voter/edit/:id',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Paises',
    title: true
  },
  {
    name: 'Paises',
    url: '/countries',
    iconComponent: { name: 'cilUser' },
    children: [
      {
        name: 'Lista de Paises',
        url: '/countries/list',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Regiones',
        url: '/countries/regions',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'AJUSTES',
    title: true
  },
  {
    name: 'Configuracion',
    url: '/settings',
    iconComponent: { name: 'cilSettings' },
    children: [
      {
        name: 'General',
        url: '/settings/general',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Organizacion',
        url: '/settings/security',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Notificaciones',
        url: '/settings/notifications',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    title: true,
    name: 'Links',
    class: 'mt-auto'
  },
  {
    name: 'Docs',
    url: 'https://coreui.io/angular/docs/',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank' }
  }
];
