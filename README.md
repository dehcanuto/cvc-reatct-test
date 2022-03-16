# CVC React Test
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Instruções do teste Front-end developer

Olá candidato, esse nosso teste é para avaliar um pouco do seu trabalho e forma de atuar como desenvolvedor front-end.

### Descrição do Teste

Vamos supor que necessitamos realizar uma conexão com um novo broker de hotéis, que é um parceiro de negócio e possui um webservice onde expõe a sua API.

#### API do nosso parceiro:

Nosso parceiro irá disponibilizar uma API de consulta de hotéis por cidade:

#### Descrição da API

URL: https://cvcbackendhotel.herokuapp.com/hotels/avail/{ID_da_Cidade}

#### Method: GET

A API responde os seguintes ID_da_Cidade:

1.	1032 (Porto Seguro)
2.	7110 (Rio de Janeiro)
3.	9626 (São Paulo)

**Exemplo:**

URL: https://cvcbackendhotel.herokuapp.com/hotels/avail/1032

```json
// Response
[{
  "id": 1,
  "name": "Hotel Teste 1",
  "cityCode": 1032,
  "cityName": "Porto Seguro",
  "rooms": [
    {
      "roomID": 0,
      "categoryName": "Standard",
      "price": {
        "adult": 1372.54,
        "child": 848.61
      }
    }
  ]
}]
```

Ele também irá disponibilizar uma API para buscar os detalhes do Hotel pelo seu código:

URL: https://cvcbackendhotel.herokuapp.com/hotels/{ID_Do_Hotel}

Method: GET

**Exemplo:**

URL: https://cvcbackendhotel.herokuapp.com/hotels/1

```json
// Response
[{
  "id": 1,
  "name": "Hotel Teste 1",
  "cityCode": 1032,
  "cityName": "Porto Seguro",
  "rooms": [
    {
      "roomID": 0,
      "categoryName": "Standard",
      "price": {
        "adult": 1372.54,
        "child": 848.61
      }
    }
  ]
}]
```

### Teste:

Agora vamos codar? Primeiramente informamos que vocês podem ficar à vontade com relação as ferramentas/bibliotecas que utilizarão para construir esse protótipo, importante somente utilizar ReactJs e ser uma plataforma web.

Nossa ideia é que o projeto possua três telas básicas que utilizarão a consulta de informações dos hotéis disponíveis nas API’s.

- [ ] Tela 1

O cliente precisará fornecer o `ID_da_Cidade` e a aplicação irá retornar uma lista com os hotéis (consultando a primeira API), exibindo o nome do hotel, o nome da cidade e um link para poder consultar detalhes do hotel. 

- Tela (Tela 2)

O sistema precisa consultar os detalhes do hotel (consultando a segunda API) exibindo inclusive informações dos quartos que estão disponíveis e valores.

- [ ] Tela 3

Teremos que construir dois parâmetros que irão interferir nas outras funcionalidades:
- Valor máximo por adulto; Só poderão exibir os quartos com esse valor máximo por adulto;
- Valor máximo por criança; Só poderão exibir os quartos com esse valor máximo por criança;
Em caso de não preenchimento, a consulta nas telas 1 e 2 será liberadas.

**Muito Boa Sorte e estamos ansiosos para receber seu código.**