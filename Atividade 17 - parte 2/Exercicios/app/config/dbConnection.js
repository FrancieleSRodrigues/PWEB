var sql = require('mssql');

module.exports = function(){
    const sqlConfig = {
        user: 'BD2213025',
        password: '!Nterc4mbio',
        database:'BD',
        server: 'APOLO',
        options:{
            encrypt: false,
            trustServerCertificate: true
        }
    }
    return sql.connect(sqlConfig);
}