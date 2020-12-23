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
    label: 'Student',
    path: '/student',
    component: 'student',
    status: 'private',
    private: true,
    role: ['STUDENT', 'SUPERADMIN']
  },
  {
    label: 'ClassManage',
    path: '/classManage',
    component: 'classManage',
    status: 'private',
    private: true,
    role: ['STUDENT', 'SUPERADMIN', 'FAULTY', 'INSTRUCTOR', 'AAO']
  },
  {
    label: 'CourseManage',
    path: '/courseManage',
    component: 'courseManage',
    status: 'private',
    private: true,
    role: ['STUDENT', 'SUPERADMIN', 'FAULTY', 'INSTRUCTOR', 'AAO']
  },
  {
    label: 'TeacherManage',
    path: '/teacherManage',
    component: 'teacherManage',
    status: 'private',
    private: true,
    role: ['SUPERADMIN', 'FAULTY', 'AAO']
  },
  {
    label: 'StudentManage',
    path: '/studentManage',
    component: 'studentManage',
    status: 'private',
    private: true,
    role: ['SUPERADMIN', 'FAULTY', 'AAO']
  },
  {
    label: 'App',
    path: '/',
    component: 'root',
    status: 'private',
    private: true,
    role: ['SUPERADMIN', 'STUDENT']
  },
]
