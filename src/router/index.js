import {createRouter,createWebHistory} from 'vue-router'
import TheHomePage from "../public/pages/home-page.vue";
import MentalStateList from "../nursing/pages/examiner-performance-overview-list.vue";
import PageNotFound from "../public/pages/not-found-page.vue";

const router= createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:TheHomePage,
            name:'home'
        },
        {
            path:'/nursing/examiner-performance-overview',
            component:MentalStateList,
            name:'mental-state-exams'
        },
        {
            path: '/:pathMatch(.*)*',
            component: PageNotFound
        }
    ]
})

export default router