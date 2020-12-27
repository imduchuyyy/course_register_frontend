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
    role: ['student', 'superadmin']
  },
  {
    label: 'ClassManage',
    path: '/classManage',
    component: 'classManage',
    status: 'private',
    private: true,
    role: ['student', 'superadmin', 'faculty', 'instructor', 'aao_staff']
  },
  {
    label: 'CourseManage',
    path: '/courseManage',
    component: 'courseManage',
    status: 'private',
    private: true,
    role: ['student', 'superadmin', 'faculty', 'instructor', 'aao_staff']
  },
  {
    label: 'TeacherManage',
    path: '/teacherManage',
    component: 'teacherManage',
    status: 'private',
    private: true,
    role: ['superadmin', 'faculty', 'aao_staff']
  },
  {
    label: 'StudentManage',
    path: '/studentManage',
    component: 'studentManage',
    status: 'private',
    private: true,
    role: ['superadmin', 'faculty', 'aao_staff']
  },
  {
    label: 'DocumentManage',
    path: '/documentManage',
    component: 'documentManage',
    status: 'private',
    private: true,
    role: ['superadmin', 'faculty', 'instructor']
  },
  {
    label: 'App',
    path: '/',
    component: 'root',
    status: 'private',
    private: true,
    role: ['superadmin', 'student', 'faculty', 'instructor', 'aao_staff']
  }
]
