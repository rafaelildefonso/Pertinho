# Bem vindo ao app Pertinho 👋

Este é um projeto de um aplicativo de achar locais legais perto de você.

Este app usaria como base de dados os estabelecimentos que faria parceria conosco, querendo aumentar sua visibilidade.

---

## Como preparar o aplicativo

1. Instale as dependências do app

```sh
npm install
```

2. Inicie o aplicativo no expo

```sh
npx expo start
```

3. Instale as dependencias da api local

```sh
npx prisma generate
```

4. Inicie a api localmente

```sh
npm start
```

---

## Como usar

- Escolha algum estabelecimento e clique para saber mais sobre

- Para escanear um cupom, clique no botão de escanear QR code, utilize algum site de gerar QR code e gere um QR code tipo texto, com o id do restaurante, que está em "api\prisma\seed.ts", e escaneie.

- Caso queira adicionar mais restaurantes coloque em "api\prisma\seed.ts".

Com tudo isso feito você consegue utilizar o app sem problemas e utilizar de seus recursos para fazer um do seu jeito.