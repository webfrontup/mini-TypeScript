
import axios from '../../src/index'

document.cookie = 'a=b'

axios.get('/more/get').then(res => {
    console.log(res)
})

axios.post('http://127.0.0.1:8088/more/server2',{},{
    withCredentials: true // 决定跨域是否能传cookie
}).then(res => {
    console.log(res)
})


