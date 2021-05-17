<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Carol Restaurante</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="restaurante.css">
 
</head>
<script src="restaurante.js"></script>
<body onLoad="slide1()">
<div id="interface">
<header id="cabecalho">
    <hgroup>
    <h1> <br><br><br>A Melhor Comida Caseira da Região<br><br><br></h1>
    <h2></h2>
</hgroup>
</header>

<figure class="logo-principal">
    <h3><img src="imagens/Carol5.png"/></h3>
    <figcaption>
        
    </figcaption>
</figure>
    <img id="icone" src="imagens/macarrao.png">
<nav id="menu">
    <h1>Menu</h1>
    <ul>
        <li onmousemove="muda_img('imagens/home.png')" onmouseout="muda_img('imagens/macarrao.png')"><a href="restaurante.html">HOME</a></li>
        
        

        <li onmousemove="muda_img('imagens/historia.png')" onmouseout="muda_img('imagens/macarrao.png')"><a href="nossa_historia.html"> NOSSA HISTÓRIA</a></li>
        
        <li onmousemove="muda_img('imagens/contato.png')" onmouseout="muda_img('imagens/macarrao.png')"><a href="fale_conosco.html">FALE CONOSCO</a></li>
    </ul>
</nav>
<h1 id="produtos">Nossos Produtos São Fresquinhos e Selecionados</h1>

<div id="slide">
    <img src="slide.js/berinjela.jpg" alt="slide show" id="banner">
   

</div>
<script src="slide.js/"></script>


</br><h1 id="cardapio">Confira Nosso Delicioso Cardápio</h1>
<table id="cardapio">
<thead><tr><th>Dias</th><th>Pratos</th></tr></thead>
<tbody><tr><th>Segunda</th><td>Virado à Paulista, Galinha Caipira, Baião de Dois e Filé Empanado Com Creme de Milho</td></tr></tbody>
<tbody><tr><th>Terça</th><td>Panqueca de carne, Strogonoff de Frango e Vaca Atolada</td></tr></tbody>
<tbody><tr><th>Quarta</th><td>Feijoada e Frango Assado</td></tr></tbody>
<tbody><tr><th>Quinta</th><td>Filé de Frango à Parmegiana e Lasanha à Bolonhesa</td></tr></tbody>
<tbody><tr><th>Sexta</th><td>Filé de Peixe Empanado, Costelinha de Porco ao Molho Barbecue e Coxinha de Frango Empanada</td></tr></tbody>   
<tbody><tr><th>Sábado</th><td>Feijoada</td></tr></tbody>
<thead><tr><th>Temos Diariamente</th><td>Picadinho, Frango ao Molho, Calabresa Acebolada, Filé de frango ,Omelete, Bife Acebolado e Contra Filé Acebolado</td></tr></tbody>
</table>
</br>
</br>
<h1 id="cardapio">Também Temos Opções Light</h1>
</br>

<table id="light">
<thead><tr><th>Prato Verão</th><td>Filé de frango grelhado, arroz integral, legumes cozidos e Salada Premium (2 tipos de alface, rúcula, tomate, pepino, beterraba, cenoura ralada e 1 fruta)</td></tr></thead>
<thead><tr><th>À Moda Da Casa</th><td>Contra filé grelhado com molho da casa (cebola, tomate e shoyo refogados) </br>Batata Doce, legumes cozidos (do dia) e Salada Premium (2 tipos de alface, rúcula, tomate, pepino, beterraba, cenoura ralada e 1 fruta)</td></tr></thead>
<thead><tr><th>Prato Primavera</th><td>Omelete (queijo, presunto, tomate, cebola, cenoura ralada)</br> Batata Doce e Salada Premiun (2 tipos de alface, rúcula, tomate, pepino, beterraba, cenoura ralada e 1 fruta)</td></tr></thead>
</table>
</br>

<div id="rodape">
<footer id="rodape">
    <p>
        Carol Restaurante &reg; 2020 Rua Abelardo Luz, 263 - Jardim Mutinga, Barueri - SP, 06463-260<br/><h3 id="rodape">Whatsapp (11)95069-1762</h3><h2 id="rodape">Siga-nos</h2>
        <a id="face" href="https://www.facebook.com/restaurantecarol"target="_blank"><img src="imagens/face.png"></a>|
        <a id="insta" href="https://www.instagram.com/carolrestaurante/"target="_blank"><img src="imagens/insta.png"></a>
        <p id="rodape"> By Gerson Reis&reg; (11)96064-0079</p>
    </p>
</footer>
</div>  
</body>
</html>
