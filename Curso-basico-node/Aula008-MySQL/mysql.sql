FUNCIONAMENTO BASICO DO BANCO DE DADOS MySQL

/* Acessando pelo terminal */
    mysql -h localhost -u root -p
/* Pedirá a senha do usuário, você também pode acessar pelo terminal MySQL Command Line Client */

/* Listar Banco de dados*/
    show databases;
/* Mostrará todos os banco de dados já criados */

/* Criar banco de dados */
    create database nomeBase;
/* Criará o banco de dados com o nome especificado */

/* Acessando um banco de dados */
    use nomeBanco;
/* Acessará o banco de dados especificado */

/* Listar quais tabelas existe em um banco (banco deverá ser acessado antes) */
    show tables;
/* Irá listar todas as tabelas da base selecionada */

/* Criar tabela */
    CREATE TABLE usuarios(
        nome VARCHAR(50),
        email VARCHAR(100),
        idade INT
    );
/* Irá criar uma tabela usuarios */

/* Inserir dados na tabela */
INSERT INTO usuarios( nome, email, idade ) VALUES (
    'Super Mario',
    'mariobross@email.com',
    38
);
/* Dados deveram ser inseridos na ordem especificada */

/* Listar TODOS dados de uma tabela */
    SELECT * FROM usuarios
/*Irá selecionar todos os dados da tabela especificada */

/* usando WHERE para filtrar a pesquisa*/
    SELECT * FROM usuarios WHERE idade < 18
/* Irá buscar todos usuarios com idade menor de 18 */

/*Selecionando por nome de coluna*/
    SELECT * FROM usuarios WHERE nome = 'Yosh'
/* Trará somente o usuario de nome Yosh */

/*Deletando registros de uma tabela*/
    DELETE FROM usuarios
/*Cuidado esse comando irá deletar todos os registros da tabela*/

/*Deletando com where*/
    DELETE FROM usuarios WHERE nome = 'Mario'
/*Ira deletar somente o usuario selecionado*/

/*Atualizando um registro na banco de dadaos*/
    UPDATE usuarios SET nome = 'Super Mario' WHERE nome = 'Mario'
    UPDATE usuarios SET nome = 'Super Mario', email= 'SuperMario@email.com' WHERE nome = 'Mario'
/*Pode ser alterado mais de um campo por vez*/