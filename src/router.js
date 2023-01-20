import { createRouter, createWebHistory } from "vue-router";
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import ContactsView from './views/ContactsView.vue';
import ProjectView from './views/ProjectView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: HomeView

        },
        {
            path: '/about',
            name: 'about',
            component: AboutView

        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsView

        },
        {
            path: '/projects/:slug_title',
            name: 'project',
            component: ProjectView

        }
    ]
})

export { router }