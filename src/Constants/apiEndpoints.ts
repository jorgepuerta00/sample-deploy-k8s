const API_URL = 'https://users-l7rh776aha-uc.a.run.app/api'

const config = {
  headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkplbiBKb25lcyIsImlhdCI6MTU5MDExNzY2OH0.Z50ZjBVzVA8l5Lxzjku2q1edyOPboUEOMLOYufsSGm0` }
};

const ApiEndPoints = {
  users: {
    createUser: 'users',
    getUserById: 'users/',
    verifyIdToken: 'users/verifyIdToken/'
  }
};

export {
  API_URL,
  ApiEndPoints,
  config
};