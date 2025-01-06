import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./UI/MODEL/PRINCIPAL/principal/principal.component').then(m => m.PrincipalComponent),
        children: [
            {
                path: 'inicio',
                loadComponent: () => import('./UI/MODEL/INICIO/PAGE/inicio-page/inicio-page.component').then(m => m.InicioPageComponent),
            },
            {
                path: 'nosotros',
                loadComponent: () => import('./UI/MODEL/NOSOTROS/PAGE/nosotros/nosotros.component').then(m => m.NOSOTROSComponent),
            },
            {
                path: 'mision',
                loadComponent: () => import('./UI/MODEL/MISION/PAGE/mision/mision.component').then(m => m.MisionComponent),
            },
            {
                path: 'vision',
                loadComponent: () => import('./UI/MODEL/VISION/PAGE/vision/vision.component').then(m => m.VisionComponent),
            },
            {
                path: 'contacto',
                loadComponent: () => import('./UI/MODEL/CONTACTO/PAGE/contacto/contacto.component').then(m => m.ContactoComponent),
            },
            {
                path: 'proyecto-1',
                loadComponent: () => import('./UI/MODEL/PROYECTOS/PAGES/proyecto-1/proyecto-1.component').then(m => m.Proyecto1Component),
            },
            {
                path: 'proyecto-2',
                loadComponent: () => import('./UI/MODEL/PROYECTOS/PAGES/proyecto-2/proyecto-2.component').then(m => m.Proyecto2Component),
            },
            {
                path: 'proyecto-3',
                loadComponent: () => import('./UI/MODEL/PROYECTOS/PAGES/proyecto-3/proyecto-3.component').then(m => m.Proyecto3Component),
            },
            {
                path: 'proyecto-4',
                loadComponent: () => import('./UI/MODEL/PROYECTOS/PAGES/proyecto-4/proyecto-4.component').then(m => m.Proyecto4Component),
            },
            {
                path: 'proyecto-5',
                loadComponent: () => import('./UI/MODEL/PROYECTOS/PAGES/proyecto-5/proyecto-5.component').then(m => m.Proyecto5Component),
            },
            {
                path: 'proyecto-6',
                loadComponent: () => import('./UI/MODEL/PROYECTOS/PAGES/proyecto-6/proyecto-6.component').then(m => m.Proyecto6Component),
            },

        ]
    },

];
