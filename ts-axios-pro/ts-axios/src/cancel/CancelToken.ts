import { CancelExecutor, CancelTokenSource, Canceler } from "../types";
import Cancel from "./cancel";

// 将普通string => Cancel
interface ResolvePromise {
    (reason?: Cancel): void
}

export default class CancelToken {
    promise: Promise<Cancel>
    reason?: Cancel

    constructor(executor: CancelExecutor){
        let resolvePromise: ResolvePromise

        this.promise = new Promise<Cancel>(resolve=>{
            resolvePromise = resolve
        })

        executor(message => {
            if(this.reason)return
            this.reason = new Cancel(message) // 实例化cancel对象
            resolvePromise(this.reason) // 进而返回判断是否是cancel=》iscancel
        })
    }

    throwIfRequesed() {
        if(this.reason){
            throw this.reason
        }
    }

    static source():CancelTokenSource {
        let cancel!:Canceler
        const token = new CancelToken( c => {
            cancel = c
        })
        return {
            cancel,
            token
        }
    }

}