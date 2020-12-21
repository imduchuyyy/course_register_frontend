export const routes = [
  {
    label: 'Login',
    path: '/login',
    component: 'login',
    status: 'public'
  },
  {
    label: 'Register',
    path: '/register',
    component: 'register',
    status: 'public'
  },
  {
    label: 'App',
    path: '/',
    component: 'root',
    status: 'private',
    private: true,
    role: ['SUPERADMIN', 'STUDENT']
  }
]
