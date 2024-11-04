
# CarroSeguro - Projeto Challenge 2024

## Descrição do Projeto

Este projeto foi desenvolvido como parte do Challenge 2024 e tem como objetivo criar uma plataforma para auxiliar usuários com problemas em seus veículos, oferecendo soluções rápidas, dicas de manutenção e canais de contato com a equipe da Porto Seguro.

## Estrutura do Projeto

O projeto consiste em quatro páginas principais:

### 1. Página Inicial

- **Descrição**: Esta é a página de boas-vindas ao site CarroSeguro. Ela apresenta uma visão geral sobre os serviços oferecidos pela Porto Seguro, destacando a importância de soluções rápidas e confiáveis para problemas com veículos.
- **Conteúdo**:
  - Introdução à Porto Seguro e seus serviços.
  - Destaques dos principais serviços oferecidos, como Assistência 24 horas, Seguro Auto e Manutenção Preventiva.
  - Razões para escolher a Porto Seguro, com ênfase em experiência, atendimento personalizado e inovação.

### 2. Página de Diagnóstico

- **Descrição**: Nesta página, os usuários podem descrever problemas específicos que estão enfrentando com seus carros, selecionar o tipo de problema e obter uma estimativa de peças recomendadas e seus preços.
- **Conteúdo**:
  - **Formulário de Descrição**: Permite que o usuário insira uma descrição detalhada do problema que está enfrentando.
  - **Seleção do Tipo de Problema**: Uma lista de opções onde o usuário pode escolher o tipo de problema (como motor, bateria, freio, etc.), o que ajuda a plataforma a recomendar peças relevantes.
  - **Recomendação de Peças**: Após o envio do formulário, a plataforma exibe uma tabela com as peças recomendadas para o tipo de problema selecionado, incluindo a descrição e o preço de cada peça.
  - **Orçamento Estimado**: Exibe o preço médio das peças recomendadas com base no problema selecionado, ajudando o usuário a ter uma ideia dos custos envolvidos.
  - **Link para Oficinas Parceiras**: Inclui um link para que o usuário visualize as oficinas parceiras da Porto Seguro que podem realizar o reparo.
  - **Mensagem de Confirmação**: Após o envio bem-sucedido do problema, uma mensagem de confirmação informa que a equipe da Porto Seguro entrará em contato para fornecer suporte e orientações adicionais.

### 3. Página de FAQ 

- **Descrição**: A seção de Perguntas Frequentes (FAQ) fornece respostas rápidas para dúvidas comuns relacionadas à manutenção de veículos.
- **Conteúdo**:
  - Lista de perguntas e respostas organizadas por temas, como manutenção preventiva, seguros, e serviços de emergência.

### 4. Página de Contato

- **Descrição**: A página de Contato permite que os usuários entrem em contato diretamente com a equipe da Porto Seguro para obter suporte ou informações adicionais.
- **Conteúdo**:
  - Informações de contato direto, como telefone e e-mail.
  - Formulário para envio de mensagens, onde o usuário pode inserir seu nome e mensagem para ser respondido pela equipe de suporte.
  - Mensagem de confirmação após o envio do formulário, indicando que a equipe da Porto Seguro entrará em contato em breve.

### 5. Página de Oficinas Parceiras

- **Descrição**: Esta página exibe uma lista de oficinas parceiras da Porto Seguro, organizadas em uma tabela com informações relevantes para facilitar a escolha de uma oficina próxima e adequada ao usuário.
- **Conteúdo**:
  - **Título**: Exibe o título "Oficinas Parceiras" para contextualizar o usuário sobre o conteúdo da página.
  - **Tabela de Oficinas**:
    - **Colunas**:
      - **Nome da Oficina**: Nome da oficina parceira.
      - **Endereço**: Endereço completo da oficina, permitindo ao usuário localizar o estabelecimento.
      - **Zona**: Área ou região em que a oficina está localizada, ajudando o usuário a encontrar uma opção próxima.
    - **Mensagens de Erro**: Caso ocorra algum problema ao carregar a lista de oficinas, uma mensagem de erro será exibida informando o usuário e sugerindo que tente novamente mais tarde.
- **Funcionalidade**:
  - **Carregamento Dinâmico**: A lista de oficinas é carregada dinamicamente por meio da função `listarOficinas`, permitindo que os dados sejam atualizados sem a necessidade de recarregar a página.
  - **Estado de Erro**: Em caso de erro durante a obtenção das informações, uma mensagem de erro é exibida.


## Tecnologias Utilizadas

- **React**: Utilizado para criar interfaces dinâmicas e reativas, facilitando o gerenciamento de componentes.
- **TypeScript**: Utilizado para melhorar a qualidade do código, adicionando tipagem estática ao JavaScript.
- **Vite**: Utilizado para otimizar o desenvolvimento do projeto com React e TypeScript.
- **HTML5**: Estruturação e marcação das páginas.
- **CSS3**: Estilização e layout das páginas.
- **JavaScript**: Interatividade e validação dos formulários.

## Link do Protótipo no Figma

- [Figma](https://www.figma.com/design/dSlchMNlevMvUJ0w2wKeCD/Untitled?node-id=0-1&t=y3SuPG1Vu8edaTI2-1)

## Link do vídeo no Youtube

- [Vídeo](https://youtu.be/rHULYDNl3N4)

## Link do Projeto Publicado na Vercel

- [Carro Seguro - Projeto Porto Seguro](https://carro-seguro.vercel.app)

### Observação
Como a página de login é a primeira página do projeto e os dados de autenticação estão armazenados em uma API localhost, o login não pode ser realizado diretamente no ambiente publicado. Para acessar o projeto sem passar pela autenticação, adicione `/pagina-inicial` ao final da URL:

- [Página Inicial](https://carro-seguro.vercel.app/pagina-inicial)

## Link do repositório do projeto

- [Projeto](https://github.com/felipesora/sprint4-frontend?tab=readme-ov-file)

## Link do Projeto das API's em Java

- [Projeto em Java](https://github.com/ovitortadeu/carroseguroprojetofinal)


## Integrantes

- Pedro Paulo       | RM: 556370  | 1TDSPH
- Vitor Tadeu       | RM: 559105  | 1TDSPH
- Felipe Ulson Sora | RM: 555462  | 1TDSPH
