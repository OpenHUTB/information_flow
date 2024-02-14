import axios from 'axios'

const login = async (params: { account: string; password: string }) => {
    try {
        const res = await axios.post('/api/account/login', params)
        return res
    } catch(err) {
        console.error(err)
    }
}

const register = async (params: { account: string; password: string }) => {
    try {
        const res = await axios.post('/api/account/register', params)
        return res
    } catch(err) {
        console.error(err)
    }
}

export { login, register };