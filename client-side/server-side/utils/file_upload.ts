import path = require('path')
import formidable = require('formidable')

export = function (req): Promise<formidable.File> {
    return new Promise((resolve, reject) => {
        const form = new formidable.IncomingForm()
        form.encoding = 'utf-8'
        // 上传的文件都放到 files文件夹下
        form.uploadDir = path.join(__dirname, '../files/')
        // 是否保留后缀
        form.keepExtensions = true;
        form.parse(req, (err, fields, files) => {
            const {file} = files
            if(!err) resolve(file)
            else reject(err)
        })
    })
}