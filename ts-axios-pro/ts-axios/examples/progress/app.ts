import axios from '../../src/index'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'

const instance = axios.create()

function calculatePercentage(loaded: number, total: number) {
    return Math.floor(loaded*1.0)/total
}

function loadProgressBar(){
    const setupStartProgress = () => {
        instance.interceptors.request.use(config => {
            NProgress.start()
            return config
        })
    }
    const setupUpdateProgress = () => {
        const update = (e: ProgressEvent) => {
            console.log(e)
            NProgress.set(calculatePercentage(e.loaded, e.total))
        }
        instance.defaults.onDownloadProgress = update
        instance.defaults.onUploadProgress = update
    }
    const setupStopProgress = () => {
        instance.interceptors.response.use(response => {
            NProgress.done()
            return response
        },error => {
            NProgress.done()
            return Promise.reject(error)
        })
    }
    setupStartProgress()
    setupUpdateProgress()
    setupStopProgress()
}
loadProgressBar()

const downloadEl = document.getElementById('download')
downloadEl!.addEventListener('click', e => {
    instance.get('http://www.baidu.com/img/bd_logo1.png')
})

const uploadEl = document.getElementById('upload')
uploadEl!.addEventListener('click', e=>{
    const data = new FormData()
    const fileEl = document.getElementById('file') as HTMLInputElement
    if(fileEl.files){
        data.append('file', fileEl.files[0])
        instance.post('/more/upload',data)
    }

})
