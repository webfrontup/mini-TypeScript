import { AxiosInstance, AxiosRequestConfig } from "./types";
import Axios from "./core/axios";
import { extend } from "./helpers/util";
import defaults from "./defaults";

function createInstance(config: AxiosRequestConfig): AxiosInstance {
    const context = new Axios(config)
    // 将调用方法的对象绑定到 当前axios的实例上 方便调用
    const instance = Axios.prototype.request.bind(context)

    extend(instance, context)

    return instance as AxiosInstance
}

const axios = createInstance(defaults)

export default axios