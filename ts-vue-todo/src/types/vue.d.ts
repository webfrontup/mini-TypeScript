// 给Vue拓展
import Vue from 'vue'
import {Message} from 'ant-design-vue/types/message'

// 拓展vue下types下vue的申明文件
declare module 'vue/types/vue' {
    interface Vue {
        $message: Message
    }
}


