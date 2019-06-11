module.exports = sql => {
    sql.query(
        'SELECT table_name FROM information_schema.TABLES WHERE table_name = "image"',
        (err, res) => {
            console.log(res,'rersssss')
            if(res.length)return
            sql.query(
                `CREATE TABLE \`image\` (
                    \`id\` INT NOT NULL AUTO_INCREMENT,
                    \`file_key\` VARCHAR(45) NOT NULL,
                    \`file_name\` VARCHAR(45) NOT NULL,
                    PRIMARY KEY (\`id\`)
                )
                `
            )
            console.log(res,err)
        }
    )
}