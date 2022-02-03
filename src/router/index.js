import { createRouter, createWebHistory } from 'vue-router'
import KmNews from '@/views/news/News.vue'
import AddPost from '@/views/AddPost.vue'
import Registration from '@/views/Registration.vue'
import About from '@/views/About.vue'
import PostPage from '@/views/news/PostPage.vue'
import DeletePostCompleted from '@/views/CompletedAction/DeletePostCompleted.vue'
import EditPost from '@/views/EditPost.vue'
import EditPostCompleted from '@/views/CompletedAction/EditPostCompleted.vue'

const routes = [
  {
    path: '/',
    name: 'KmNews',
    component: KmNews
  },
  {
    path: '/AddPost',
    name: 'AddPost',
    component: AddPost
  },
  {
    path: '/Registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/PostPage/:id',
    name: 'PostPage',
    component: PostPage,
  },
  {
    path: '/DeletePostCompleted',
    name: 'DeletePostCompleted',
    component: DeletePostCompleted,
  },
  {
    path: '/EditPost',
    name: 'EditPost',
    component: EditPost
  },
  {
    path: '/EditPostCompleted',
    name: 'EditPostCompleted',
    component: EditPostCompleted,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
