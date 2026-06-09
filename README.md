# **Orbits - by Antípoda | Global Solution**

===================================================

## Resumo do nosso projeto:
O espaço deixou de ser uma fronteira exclusiva de governos. Hoje, ele se tornou uma extensão do nosso mercado global.
À medida que novas empresas, universidades e organizações passam a atuar nesse setor, surgem também desafios relacionados à transparência, sustentabilidade e governança.

A Orbits é uma plataforma pública de transparência e governança da economia espacial que centraliza informações sobre agentes, iniciativas e ativos espaciais.

A plataforma reúne dados sobre os agentes espaciais e transforma essas informações em indicadores de confiança e sustentabilidade que permitem compreender quem está atuando no espaço, como está atuando e quais impactos suas atividades geram.

Além de promover maior transparência, a plataforma conecta agentes do ecossistema espacial, disponibiliza informações educacionais sobre o setor e monitora indicadores relacionados ao lixo espacial e à sustentabilidade orbital.

===================================================

## Tecnologias utilizadas:
Foram utilizadas as linguagens de marcação e programação HTML, CSS e JavaScript.

### HTML:
- Foi utilizada a estrutura padrão do HTML5, com `<!DOCTYPE html>`, idioma configurado em `pt-br` e conjunto de caracteres UTF-8.
- Dentro do `<body>`, utilizamos:
  - `<header>` para a logo e o menu de navegação;
  - `<main>` para o conteúdo principal da página;
  - `<footer>` para navegação complementar e direitos autorais.
- Ao longo do site, respeitamos a hierarquia de títulos e utilizamos:
  - `<section>` e `<div>` para separação adequada do conteúdo;
  - `<p>` para textos;
  - `<img>` para imagens armazenadas na pasta `assets`;
  - `<form>` para o formulário de contato.

### CSS:
- No CSS base, utilizamos variáveis para armazenar as cores do site, facilitando futuras alterações na identidade visual.
- Também importamos gratuitamente as fontes Lexend Deca e Momo Trust Display através do Google Fonts.

- Para o layout, utilizamos:
  - Flexbox;
  - CSS Grid;
  - propriedades auxiliares para organização e alinhamento.

  Isso permitiu a construção de um site bem estruturado, organizado e com padronização de classes. Classes com estilos reutilizáveis foram agrupadas para evitar repetição de código.

- A responsividade do site foi construída utilizando a abordagem mobile first, com `@media queries` para adaptação aos layouts de tablet e desktop.
- Além disso, evitamos medidas absolutas, como `px`, priorizando medidas relativas, como `rem` e `%`.

- O site também possui interatividade visual:
  - os botões possuem efeito `hover`;

  Toda essa interação foi desenvolvida utilizando apenas CSS.

### JAVASCRIPT:
- Na página **Comunidade**, possue uma animação nos números do contador. O JavaScript faz que os numeros cresçam progressivamente quando entram na tela, aumentando até seus valores finais.

- Na página **Contato**, existe um formulário em que o usuário pode informar:
  - nome;
  - e-mail;
  - telefone;
  - mensagem.

  Utilizando JavaScript, os dados são armazenados em uma lista e o formulário impede o envio caso algum campo esteja vazio.

- Accordion na página FAQ e Score:
  As perguntas aparecem inicialmente apenas com os títulos. Utilizamos JavaScript para permitir que o usuário clique e revele o conteúdo completo da pergunta.

![antes de clicar](/prints/accordion1.png) -> ![depois de clicar](/prints/accordion2.png)

![antes de clicar](/prints/accordion1_score.png) -> ![depois de clicar](/prints/accordion2_score.png)

- Hamburguer na página:
  Em dispositivos móveis, o site apresenta um menu hamburguer (ícone de três linhas) que permite ao usuário abrir e visualizar a navegação.

![alt text](/prints/hamburguer.png)

- Modal no formulário de contato:
  Ao enviar o formulário com sucesso, o usuário recebe uma caixa de confirmação exibida na tela.

![alt text](/prints/modal.png)

===================================================
## Estrutura de páginas do projeto:
- As páginas em **HTML** foram salvas na pasta `pages`
  - `index.html`: página principal do site, com apresentação inicial do projeto;
  - `sobre.html`: contextualização da solução e introdução ao problema abordado;
  - `score.html`: página que explica como funciona o score das empresas e mostra o ranking de empresas;
  - `comunidade.html`: página para explorar iniciativas, interesses e conexões da comunidade espacial;
  - `integrantes.html`: apresentação da equipe com links para GitHub e LinkedIn;
  - `faq.html`: página com perguntas frequentes;
  - `contato.html`: formulário para envio de dúvidas, sugestões e mensagens.

![alt text](/prints/image.png)

- A folha de estilo **CSS** foi salva na pasta `css`
  - `layout-contato.css`: arquivo contendo o layout da página contato.
  - `layout-faq.css`: arquivo contendo o layout da página de FAQ.
  - `layout-integrantes.css`: arquivo contendo o layout da página de integrantes.
  - `style.css`: arquivo contendo a estilização do projeto.

![alt text](/prints/css.png)

- Os arquivos em **JavaScript** foram salvos na pasta `js`
  - `contato.js`: script do formulário de contato e do modal de confirmação;
  - `accordion_faq.js`: script do accordion da página FAQ;
  - `accordion_score.js`: script do accordion da página FAQ;
  - `header.js`: script do menu hamburguer;
  - `comunidade.js`: script da animação do contador da página Comunidade.

![alt text](/prints/image-2.png)

- As imagens e ícones utilizados no site foram salvos na pasta `assets`
  - Contém todas as imagens e elementos visuais do projeto.

![alt text](/prints/image-3.png)

- Os prints utilizados neste **README** foram salvos na pasta `prints`
  - Contém todas as imagens demonstrativas do README.

![alt text](/prints/image-4.png)

===================================================
## Autores e créditos:
Enzo Zeni - 1TDSPK - RM570653
  - Linkedin: https://www.linkedin.com/in/enzo-fachinelli-zeni-687a873b3
  - Github: https://github.com/F-Zeni

Jacqueline Lotufo - 1TDSPK - RM571390
  - Linkedin: https://br.linkedin.com/in/jacqueline-lotufo
  - Github: https://github.com/jacquelot

Julia de Freitas - 1TDSPK - RM569098
  - Linkedin: https://www.linkedin.com/in/lixzaura
  - Github: https://github.com/lixzaura

Paulo Henrique - 1TDSPK - RM573806
  - Linkedin: https://www.linkedin.com/in/paulo-henrique-gomes-gonçalves-aa04b5272/
  - Github: https://github.com/paulo-henrique253

Victoria Peixoto - 1TDSPK - RM570997
  - Linkedin: https://www.linkedin.com/in/victoria-peixoto-paltrinieri-9938a7404/
  - Github: https://github.com/VictoriaPPeixoto

===================================================

## Imagens e representação do projeto

### Header - Todas as páginas
- O header possui um menu de navegação funcional que direciona o usuário para todas as páginas do site.
  - Ao clicar na logo, o usuário é redirecionado para a página inicial.

![alt text](/prints/header.png)

### Footer - Todas as páginas
- O footer também possui um menu de navegação funcional com acesso rápido às páginas do site.

![alt text](/prints/footer.png)

### Index - Apresentação inicial
- A página inicial apresenta a proposta da Orbits logo no primeiro contato com o usuário.
  - Também há dois botões que redireciona para a página Sobre, e outro para a página Score.

![alt text](/prints/index.png)

- Ao final da página, o usuário encontra frases de impacto e um botão que o direciona para a página **Sobre**.

![alt text](/prints/index-2.png)

![alt text](/prints/index-3.png)

### Sobre - Contextualização
- A página **Sobre** apresenta o contexto da economia espacial e o propósito da plataforma.

![alt text](/prints/sobre-1.png)

- Mais abaixo, explicamos a nossa visão, missão e princípios e possue um espaço que convida o usuário a ir para a página de comunidade.

![alt text](/prints/sobre-2.png)

![alt text](/prints/sobre-3.png)

### Score - Score das empresas
- Essa página apresenta os scores de reputação e sustentabilidade da plataforma..
  - Também exibe um ranking de empresas com suas respectivas pontuações e níveis de confiabilidade.

![alt text](/prints/score-1.png)

![alt text](/prints/score-2.png)

![alt text](/prints/score-3.png)

### Comunidade - O ecossistema espacial
- Essa página apresenta o catálogo da comunidade da economia espacial.
  - O principal destaque é o filtro de iniciativas, que permite descobrir conexões e oportunidades por tags de interesse.

![alt text](/prints/comunidade-1.png)

![alt text](/prints/comunidade-2.png)

![alt text](/prints/comunidade-3.png)

![alt text](/prints/comunidade-4.png)

![alt text](/prints/comunidade-5.png)

### Integrantes - Nossa equipe
- A página de integrantes apresenta a equipe Antípoda, responsável pela criação da Orbits.
  - O usuário pode acessar os perfis de LinkedIn e GitHub através dos botões disponíveis.

![alt text](/prints/equipe.png)

### FAQ - Perguntas frequentes
- Essa página possui foco visual e foi criada para responder às dúvidas mais comuns sobre a Orbits.

![alt text](/prints/faq.png)

### Contato - Mande uma mensagem
- A página de contato apresenta um formulário para envio de mensagens aos desenvolvedores do site.
  - Caso algum campo não seja preenchido, a área de status informa o usuário sobre o campo pendente.

![alt text](/prints/contato-1.png)

- Após preencher todos os campos corretamente e enviar a mensagem, o status é atualizado.

![alt text](/prints/contato-2.png)

===================================================

## Link do repositório
- https://github.com/lixzaura/orbits-antipoda

===================================================

## Contato

Cada integrante possui seu e-mail institucional da FIAP:
- Enzo: RM570653@fiap.com.br
- Jacqueline: RM571390@fiap.com.br
- Julia: RM569098@fiap.com.br
- Paulo: RM573806@fiap.com.br
- Victoria: RM570997@fiap.com.br