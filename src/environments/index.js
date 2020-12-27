const TOKEN_NAME = process.env.TOKEN_NAME || 'access-token'
const API_LINK = process.env.API_LINK || 'localhost:4000'

const LIST_API = {
  LOGIN: `${API_LINK}/login`,
  CURRENT_USER: `${API_LINK}/current_user`,
  LIST_CLASS: `${API_LINK}/list_class`,
  VIEW_CLASS: `${API_LINK}/view_class`,
  LIST_CLASS_BY_STUDENT: `${API_LINK}/view_class_by_student`,
  LIST_CLASS_BY_TEACHER: `${API_LINK}/view_class_by_teacher`,
  ADD_COURSE: `${API_LINK}/add_course`,
  LIST_COURSE: `${API_LINK}/list_course`,
  VIEW_COURSE: `${API_LINK}/view_course`,
  LIST_COURSE_REGISTER: `${API_LINK}/list_course_registed`,
  REGISTER_COURSE: `${API_LINK}/register_course`,
  LIST_STUDENTS: `${API_LINK}/list_student`,
  LIST_TEACHERS: `${API_LINK}/list_teacher`,
  CREATE_STUDENT: `${API_LINK}/add_document`,
  LIST_REGISTERED_COURSE: `${API_LINK}/list_course_registered`
}

export { TOKEN_NAME, API_LINK, LIST_API }
