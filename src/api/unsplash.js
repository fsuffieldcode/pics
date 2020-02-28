import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ZdQf7jnYS-oANcIzpL1a17O93scNrfinL8TeSaEPBKI'
    }
})