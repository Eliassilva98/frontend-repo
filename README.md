# Conversor Word PDF

## Sobre o projeto

O Conversor Word PDF é uma aplicação full stack desenvolvida para realizar a conversão de arquivos Word (.doc e .docx) em formato PDF. A solução oferece um fluxo completo de upload, validação, processamento e entrega do arquivo final, permitindo o download imediato e o registro do histórico das conversões.

O objetivo técnico desta aplicação foi integrar front-end e back-end para resolver um problema prático de manipulação de documentos, mantendo uma interface responsiva e uma arquitetura organizada.

## Funcionalidades

- Envio de arquivos Word para processamento
- Validação de tipos de arquivo permitidos com recusa de formatos inválidos
- Conversão automatizada de Word para PDF
- Exibição de alertas para arquivos incompatíveis
- Notificações via toast durante o início, sucesso ou erro da conversão
- Disponibilização de link para download do arquivo convertido
- Registro e persistência do histórico de conversões no banco de dados

## Tecnologias

**Linguagem:** JavaScript  
**Framework:** React  
**Estilização:** styled-components  
**Requisições HTTP:** Axios  
**Notificações:** React Toastify  
**Ícones:** React Icons  
**Testes:** Jest  
**Ferramentas:** Vite, Git, GitHub  

## Integrações

A aplicação consome a API do repositório [word-to-pdf-api](https://github.com/Eliassilva98/word-to-pdf-api) para realizar o upload, conversão e consulta do histórico.

## Como executar
```bash
# Clone o repositório
git clone https://github.com/Eliassilva98/Conversor-Word-PDF.git

# Acesse a pasta
cd Conversor-Word-PDF

# Instale as dependências
yarn install

# Inicie o servidor de desenvolvimento
yarn dev
````
````
Organização do projeto
**src/
├── assets/        # Imagens e ícones
├── components/    # Componentes reutilizáveis
├── containers/    # Páginas e seções principais
├── services/      # Chamadas à API
├── styles/        # Estilos globais
└── utils/         # Funções auxiliares**
````
## O que este projeto demonstra
- Construção de uma aplicação com fluxo completo de dados
- Organização de código baseada na separação de responsabilidades
- Implementação de regras de negócio aplicadas ao processamento de arquivos
- Validação de dados e tratamento de erros
- Persistência de informações em banco de dados não relacional
- Uso prático das tecnologias escolhidas em um cenário de integração
- Estruturação de projeto voltada para manutenção e escalabilidade

## Melhorias futuras

- Inclusão de novas conversões de arquivos
- Integração de um assistente de inteligência artificial para suporte ao usuário
- Implementação de sistema de cadastro e autenticação de usuários

## Screenshot do projeto

![Tela inicial do Conversor Word PDF](./src/assets/TelaInicial.png)

![Tela inicial do Conversor Word PDF](./src/assets/TelaConversaoIniciada.png)

![Tela inicial do Conversor Word PDF](./src/assets/TelaArquivoConcluido.png)

![Tela inicial do Conversor Word PDF](./src/assets/TelaArquivoBaixado.png)

![Tela inicial do Conversor Word PDF](./src/assets/TelaMobile.png)
