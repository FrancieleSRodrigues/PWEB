var sql = require('mssql');

var connSQLServer = function(){
// module.exports = function(){
    const sqlConfig = {
        user: 'BD22130**',
        password: '******',
        database:'BD',
        server: 'APOLO',
        options:{
            encrypt: false,
            trustServerCertificate: true
        }
    }
    return sql.connect(sqlConfig);
}

module.exports = function(){
    console.log('O autoload carregou o módulo de conexão com o bd');
    return connSQLServer;
}