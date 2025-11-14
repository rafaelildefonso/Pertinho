<p>
  <img src=".github/cover.png" alt="Capa do projeto" />
</p>

# Bem vindo ao app Pertinho 👋

Este é um projeto de um aplicativo de achar locais legais perto de você.

Este app usaria como base de dados os estabelecimentos que faria parceria conosco, querendo aumentar sua visibilidade.

---

## ⚙ Setup

### 📝 Requisites

Antes de baixar o projeto você vai precisar ter instalado na sua máquina as seguintes ferramentas:

* [Git](https://git-scm.com)
* [NodeJS](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) 
* Para reproduzir o acesso a API back-end com os dados necessários para o front-end, clone o seguinte [repositório](https://github.com/pabloxt14/nlw-journey-node) que contem a API do nosso back-end feita em Node.js e execute na sua máquina.

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

---

## Como preparar o aplicativo

```bash
# Clone este repositório
$ git clone git@github.com:rafaelildefonso/pertinho.git

# Acesse a pasta do projeto no terminal
$ cd pertinho/pertinho

# Instale as dependências
$ npm install

# Execute a API back-end
$ cd ../api
$ npm install
$ npm run start

# Execute a aplicação em modo de desenvolvimento
$ npm run start
```

---

## 🛠 Technologies

As seguintes principais ferramentas foram usadas na construção do projeto:

- **[React Native](https://reactnative.dev/)**
- **[Expo](https://expo.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Table Icons](https://tabler.io/docs/icons/react-native)**
- **[Axios](https://axios-http.com/ptbr/docs/intro)**
- **[Bottom Sheet](https://github.com/gorhom/react-native-bottom-sheet)**
- **[React Native Maps](https://docs.expo.dev/versions/latest/sdk/map-view/)**
- **[Expo Camera](https://docs.expo.dev/versions/latest/sdk/camera/)**

---

## Como usar

- Escolha algum estabelecimento e clique para saber mais sobre

- Para escanear um cupom, clique no botão de escanear QR code, utilize algum site de gerar QR code e gere um QR code tipo texto, com o id do restaurante, que está em "api\prisma\seed.ts", e escaneie.

- Caso queira adicionar mais restaurantes coloque em "api\prisma\seed.ts".

Com tudo isso feito você consegue utilizar o app sem problemas e utilizar de seus recursos para fazer um do seu jeito.

Feito por -> [Rafael Ildefonso](https://github.com/rafaelildefonso)