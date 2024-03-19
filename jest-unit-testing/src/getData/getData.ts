import axios from "axios"

export interface Data {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

interface Geo {
  lat: string
  lng: string
}

interface Company {
  name: string
  catchPhrase: string
  bs: string
}

export const getData = async () => {
  try {
    const response: { data: Data[] } = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
  } catch (e) {}
}