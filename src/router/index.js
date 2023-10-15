import { createWebHistory, createRouter } from 'vue-router'
import Home from '../components/views/Home';
import Career from '../components/views/Career';
import Resume from '../components/views/Resume';
import Certificate from '../components/views/Certificate';
import QnA from '../components/views/QnA';
import Ability from '../components/views/Ability';

//우리가 사용할 route 생성 및 설정
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/career',
    name: 'career',
    component: Career, 
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume, 
  },
  {
    path: '/certificate',
    name: 'certificate',
    component: Certificate, 
  },
  {
    path: '/qna',
    name: 'qna',
    component: QnA, 
  },
  {
    path: '/ability',
    name: 'ability',
    component: Ability, 
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router