module.exports = sql => {
    sql.query(
        'SELECT table_name FROM information_schema.TABLES WHERE table_name = "image"',
        (err, res) => {
            // if(res.length)return
            sql.query(
                `CREATE TABLE \`image\` (
                    \`id\` INT NOT NULL AUTO_INCREMENT,
                    \`file_key\` VARCHAR(45) NOT NULL,
                    \`file_name\` VARCHAR(45) NOT NULL,
                    PRIMARY KEY (\`id\`)
                )
                `
            )
            // Access denied for user ''@'172.18.0.1' (using password: YES)
            console.log(res,err)
        }
    )
}