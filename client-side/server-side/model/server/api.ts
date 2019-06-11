import sql = require('../index')

interface FileItem {
    id: number;
    file_key: string;
    file_name: string;
}

export = {
    upload (key, name):Promise<void> {
        return new Promise((resolve, reject) => {
            sql.query(
                `INSERT INTO image (file_key, file_name) VALUES ("${key}","upload_${name}")`,
                (err,res) => {
                    console.log(key, name,err,res)
                    if(err) reject(err)
                    else resolve(res)
                }
            )
        })
    },
    getList(): Promise<FileItem>{
        return new Promise((resolve, reject) => {
            sql.query('SELECT * FROM image', (err, res) => {
                console.log(res,'aaaa')
                if(err) reject(err)
                else resolve(res)
            })
        })
    }
 }