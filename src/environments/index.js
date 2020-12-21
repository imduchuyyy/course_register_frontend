const TOKEN_NAME = process.env.TOKEN_NAME || 'access-token'
const API_LINK = process.env.API_LINK || 'localhost:4000'

const LIST_API = {
  LOGIN: `${API_LINK}/login`,
  CURRENT_USER: `${API_LINK}/current_user`
}

export { TOKEN_NAME, API_LINK, LIST_API }
