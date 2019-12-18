<h1>Projeto base desenvolvido para a disciplina Segurança da Informação da faculdade FATEC São josé dos Campos.</h1>
<br>
<p>O projeto consiste em salvar dados do usuário que acessa a aplicação pelo cookie.</p>
<p>Para levantar o sistema, é necessário instalar as dependências npm  (rodar: <strong>npm install</strong>), sendo assim iniciar o servidor rodando <strong>npm start server</strong> ou caso tenha nodemon instalado, rodar: <strong>nodemon server</strong>.</p>
<p>Está com uma porta padrão 4000.</p>
<p>A aplicação resumidamente, no primeiro acesso do usuário na aplicação é mostrado ta tela a opção de aceitar que a aplicação salve alguns dados no cookie,
caso ele aceite, esses dados é salvo no cookie e por ajax é enviado para uma rota do backend.</p>
<p>Caso o usuário não aceite, nenhum dado é salvo daquele usuários.</p>
