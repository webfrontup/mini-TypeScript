import axios, {Canceler} from '../../src/index'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

console.log(source.token,11)
axios.get('/cancel/get', {
    cancelToken: source.token
}).catch(function(e){
    if(axios.isCancel(e)){
        console.log('Request canceled', e.message)
    }
})

setTimeout( () => {
    source.cancel('Operation canceled by the user.')
    console.log(source.token,22)
    axios.post('/cancel/post', {a:1}, {
        cancelToken: source.token
    }).catch(function(e){
        if(axios.isCancel(e)){
            console.log(e.message)
        }
    })

}, 100)

let cancel: Canceler

axios.get('/cancel/get', {
    cancelToken: new CancelToken( c => {
        cancel = c
    })
}).catch(function(e){
    if(axios.isCancel(e)){
        console.log('Request canceled')
    }
})


setTimeout(() => {
    cancel()
},200)

