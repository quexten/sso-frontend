import jwt from 'jsonwebtoken'

export default {
  methods: {
    decode: (token) => {
      return jwt.decode(token)
    }
  }
}
