const imagemVisualizacao = document.getElementById('imagem-vizualizacao');
const tituloProduto = document.getElementById ('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');
const miniaturaImagem0= document.getElementById ('0-imagem-miniatura');
const miniaturaImagem1= document.getElementById ('1-imagem-miniatura');
const miniaturaImagem2= document.getElementById ('2-imagem-miniatura');
// Acima temos a crição de variaveis para reconhecimento e armazenamentos dos  
//elementos HTML a partir do id dele que foi declarado nas tags HTML

// A baixo estamos armazenando as cores em variaveis com seus respectivos nomes
// e também com os nomes das pastas para acessar mais na frente no código.
// OBS: os nomes das cores e das pastas tem que ser iguais aos salvos na pasta opcoes-cores 
const verdeCipreste = {
    nome:'Verde-cipreste',
    pasta:'imagens-verde-cipreste',
}

const meiaNoite = {
    nome:'meia-noite',
    pasta:'imagens-meia-noite',
}

const estelar = {
    nome:'Estelar',
    pasta:'imagens-estelar',
}

const azulInverno = {
    nome:'Azul-inverno',
    pasta:'imagens-azul-inverno',
}

const rosaClaro = {
    nome:'Rosa-claro',
    pasta:'imagens-rosa-claro',
}


const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro]
const opcoesTamanho= ['41 mm', '45 mm'];


// a baixo temos as variaveis de controle que inicia com a ordem da imagem padrão 
// que foi declarada no HTML através do checked.
let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada =1;


// Função para troca de imagem principal da página
function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    // buscando um elemento que tem o "name "opcao-imagem"", e que foi selecionado pelo usuário em baixo da iamagem principal
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = './imagens/opcoes-cores/'+opcoesCores[corSelecionada].pasta+ '/imagem-' +imagemSelecionada+ '.jpeg';
}


// Função para atualizar a página através da seleção do tamanho da caixa do rélogio
function trocarTamanho(){
    // Atualizar variavel de controle do tamanho da caixa "tamanhoSelcionado"
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    // mudando o titulo do produto com a caixa selecionada.
    tituloProduto.innerText = "Pulseira loop esportiva azul-inverno para caixa de " + opcoesTamanho[tamanhoSelecionado];
    // Mudando tamanho da imagem de acordo com opção da caixa
    // Obs: "caixa-pequena" está sendo chamado do CSS
    if (opcoesTamanho [tamanhoSelecionado] === '41 mm'){
        imagemVisualizacao.classList.add('caixa-pequena');
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena');
    } 
}


// Função para trocar as imagens através da seleção da cor que for selecionada
function trocarCor(){
    // atualizando a cor que foi selecionada
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    // Atualizando o titulo com a cor selecionada 
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome +" para caixa de " + opcoesTamanho[tamanhoSelecionado];
    // trocando a cor selecionada
    nomeCor.innerText = 'Cor - '+ opcoesCores[corSelecionada].nome;
    // Trocando imagens das miniaturas em baixo da imagem de visualização
    miniaturaImagem0.src = './imagens/opcoes-cores/' +opcoesCores[corSelecionada].pasta+'/imagem-0.jpeg';
    miniaturaImagem1.src = './imagens/opcoes-cores/' +opcoesCores[corSelecionada].pasta+'/imagem-1.jpeg';
    miniaturaImagem2.src = './imagens/opcoes-cores/' +opcoesCores[corSelecionada].pasta+'/imagem-2.jpeg';
    // trocar imagem de visualização 
    imagemVisualizacao.src = './imagens/opcoes-cores/'+opcoesCores[corSelecionada].pasta+ '/imagem-' +imagemSelecionada+ '.jpeg';
}