
import axios from '../../src/index'
import { AxiosError } from '../../src/helpers/error';

document.cookie = 'a=b'

axios.get('/more/get').then(res => {
    console.log(res)
})

axios.post('http://127.0.0.1:8088/more/server2',{},{
    withCredentials: true // 决定跨域是否能传cookie
}).then(res => {
    console.log(res)
})

const instance = axios.create({
    xsrfCookieName: 'XSRF-TOKEN-D',
    xsrfHeaderName: 'X-XSRF-TOKEN-D'
})
instance.get('/more/get').then(res => {
    console.log(res,'ressss')
})

axios.post('/more/post', {
    a:1 // data
},{ // config
    auth: {
        username: 'NewBee',
        password: '123456'
    }
}).then(res => {
    console.log(res)
})

axios.get('/more/304').then(res => {
    console.log(res, '304res')
}).catch((e: AxiosError) => {
    console.log(e.message)
})

axios.get('/more/304',{
    validateStatus(status){
        return status >=200 && status<=400
    }
}).then(res => {
    console.log(res,'304res')
}).catch((e: AxiosError)=> {
    console.log(e.message)
})

