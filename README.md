## Tipos-de-Testes
![image](https://user-images.githubusercontent.com/74507357/201405002-dd8665cd-9623-456d-b269-86e814dfd1ee.png)  
Teste de unidade/teste de função refere-se ao teste realizado na menor parte testável do sistema. Como exemplo uma função que deve realizar o split em uma String e devolve a primeira e a última parte. Ao realizar um teste sobre essa função, estamos criando um teste de unidade. O teste unitário não tem dependencia de nada como por exemplo do banco de dados, é um teste de algoritmo ele só deve testar o fluxo de específica função. E se eu precisar testar uma função que depende de um banco de dados? A ideia é que você, ao inves de usar esse objeto com a conexão real, voce vai simular e fingir que ele está “indo” ao banco de dados e fingir que ele retornou dados e assim o fluxo irá continuar.  
  
O teste de integração é o teste que é realizado entre diferentes módulos em um sistema. Imagine que o sistema faz requisições HTTP, o que é muito comum encontrar hoje em dia, neste teste é analisada toda a requisição, verificando o resultado retornado, código de resposta, formato de dados. 
  
Testes end to end (e2e) /teste de ponta a ponta, neste tipo de teste a gente só quer simular um utilizador real do nosso produto, utilizando um teste “automatizado” do início ao fim de um processo. Por que o nome de ponta a ponta? Porque você testa o fluxo inteiro da sua aplicação, desde o front-end até o mais fundo do back-end.  

## Primeiro teste
Para aprender, irei utilizar algumas ferramentas em alguns programas simples. Como primeiro teste, criei um código de uma calculadora utilizando JavaScript, CSS e HTML e irei fazer os testes utilizando a ferramenta "cypress". Clicando em *calculadora JEBJ* vocês podem ver e entender.        

## Segundo teste  
Para aprender playwrigth, criei dois código em TS. Um bem básico que entra no site da Google e digita "MackLeaps" na barra de pesquisa. No outro eu criei uma conta *"Fake"* no *Github* para testar o login. Clicando em *playwright-teste* vocês podem ver e entender.  

## Para fazer  
TESTAR e aprender JEST
