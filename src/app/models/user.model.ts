export interface User {
  gender?: string,
  name?: {
    title?: string,
    first?: string,
    last?: string
  },
  location: {
    street?: string,
    city?: string,
    state?: string,
    postcode?: string,
    coordinates?: {
      latitude?: string,
      longitude?: string
    },
    timezone?: {
      offset?: string,
      description?: string
    }
  },
  email?: string,
  login?: {
    uuid?: string,
    username?: string,
    password?: string,
    salt?: string,
    md5?: string,
    sha1?: string,
    sha256?: string
  },
  dob?: {
    date?: string,
    age?: string
  },
  registered?: {
    date?: string,
    age?: string
  },
  phone?: string,
  cell?: string,
  id?: {
    name?: string,
    value?: string
  },
  picture?: {
    large?: string,
    medium?: string,
    thumbnail?: string
  },
  nat?: string
}