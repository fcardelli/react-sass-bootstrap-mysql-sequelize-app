
const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    //port     : 3306,
    user     : 'root',
    password : '',
    //database : 'tvdentesdb'
});

// Setando variaveis de criaçao do BD
const sql = [
    'CREATE SCHEMA IF NOT EXISTS `tvdentesdb` DEFAULT CHARACTER SET utf8;',
        
    'CREATE TABLE IF NOT EXISTS `tvdentesdb`.`usuarios` ('+
                        '`idusuario` INT(11) NOT NULL AUTO_INCREMENT,'+
                        '`login` VARCHAR(100) NOT NULL,'+
                        '`senha` VARCHAR(30) NOT NULL,'+
                        'PRIMARY KEY (`idusuario`))'+
                        'ENGINE = InnoDB'+
                        ' DEFAULT CHARACTER SET = utf8;',

    'CREATE TABLE IF NOT EXISTS `tvdentesdb`.`licencas` ('+
                        '`idlicenca` INT(11) NOT NULL AUTO_INCREMENT,'+
                        '`licenca` VARCHAR(100) NULL DEFAULT NULL,'+
                        '`validade` INT(11) NOT NULL,'+
                        '`dtvalidade` DATETIME NOT NULL,'+
                        'PRIMARY KEY (`idlicenca`))'+
                        'ENGINE = InnoDB'+
                        ' DEFAULT CHARACTER SET = utf8;',

    'CREATE TABLE IF NOT EXISTS `tvdentesdb`.`clientes` ('+
                        '`idcliente` INT(11) NOT NULL AUTO_INCREMENT,'+
                        '`nome` VARCHAR(255) NOT NULL,'+
                        '`email` VARCHAR(255) NOT NULL,'+
                        '`idusuario` INT(11) NOT NULL,'+
                        '`idlicenca` INT(11) NOT NULL,'+
                        '`dtregistro` DATETIME NOT NULL,'+
                        'PRIMARY KEY (`idcliente`),'+
                        'CONSTRAINT `fkclienteusuarios`'+
                            'FOREIGN KEY (`idusuario`)'+
                            'REFERENCES `tvdentesdb`.`usuarios` (`idusuario`)'+
                            'ON DELETE NO ACTION'+
                            ' ON UPDATE NO ACTION,'+
                        'CONSTRAINT `fkclientelicencas`'+
                            'FOREIGN KEY (`idlicenca`)'+
                            'REFERENCES `tvdentesdb`.`licencas` (`idlicenca`)'+
                            'ON DELETE NO ACTION'+
                            ' ON UPDATE NO ACTION)'+
                        'ENGINE = InnoDB'+
                        ' DEFAULT CHARACTER SET = utf8;',

    'CREATE TABLE IF NOT EXISTS `tvdentesdb`.`playlists` ('+
                        '`idplaylist` INT(11) NOT NULL AUTO_INCREMENT,'+
                        '`nome` VARCHAR(100) NOT NULL,'+
                        '`idcliente` INT(11) NOT NULL,'+
                        'PRIMARY KEY (`idplaylist`),'+
                        'CONSTRAINT `fkclienteplaylists`'+
                            'FOREIGN KEY (`idcliente`)'+
                            'REFERENCES `tvdentesdb`.`clientes` (`idcliente`)'+
                            'ON DELETE NO ACTION'+
                            ' ON UPDATE NO ACTION)'+
                        'ENGINE = InnoDB'+
                        ' DEFAULT CHARACTER SET = utf8;',

    'CREATE TABLE IF NOT EXISTS `tvdentesdb`.`videos` ('+
                    '`idvideo` INT(11) NOT NULL AUTO_INCREMENT,'+
                    '`nome` VARCHAR(255) NOT NULL,'+
                    '`caminho` VARCHAR(255) NOT NULL,'+
                    '`genero` VARCHAR(100) NULL DEFAULT NULL,'+
                    '`idplaylist` INT(11) NOT NULL,'+
                    'PRIMARY KEY (`idvideo`),'+
                    'CONSTRAINT `fkplaylistvideos`'+
                        'FOREIGN KEY (`idplaylist`)'+
                        'REFERENCES `tvdentesdb`.`playlists` (`idplaylist`)'+
                        'ON DELETE NO ACTION'+
                        ' ON UPDATE NO ACTION)'+
                    'ENGINE = InnoDB'+
                    ' DEFAULT CHARACTER SET = utf8;'
];

function createTable(sql, connection){

    sql.forEach(sql => {
        connection.query(sql, (erro, resultado, campos) => {
            if(erro) return console.log(erro);
            console.log(`Tabela Adicionada com Sucesso!`);
        });
    });
}

connection.connect( (erro) => {
    if(erro) return console.log(erro);
    console.log("Banco MySql foi conectado com sucesso!")
    createTable(sql, connection);
});