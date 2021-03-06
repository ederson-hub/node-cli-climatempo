# node-cli-climatempo
CLI que mostra o clima de uma cidade em tempo real

## Instalar dependências
`npm install`

## Instalação
Para instalar localmente e poder usar o comando no terminal, use o comando:

`npm link`

O comando `clima` vai estar disponível no terminal. Você pode usar o comando passando o nome da cidade:

`clima curitiba`

O comando vai mostrar o clima em tempo real da cidade:

```
    Clima em Curitiba, PR
    Temperatura: 15°
    Direção do vento: SW
    Velocidade do vento: 13 km/h
    Humidade: 88%
    Condição: Poucas nuvens
    Pressão atmosférica: 1012.2
    Sensação: 15°
```

## API Advisor ClimaTempo
Esta ferramenta uma a API do ClimaTempo para buscar as informações do clima da cidade.
Quando for executar o comando pela primeira vez, é necessário informar o token da API para poder usá-la:

`clima curitiba --token seu-app-token`

ou

`clima curitiba -t seu-app-token`

O token só precisa ser informado uma vez e ele será armazenado localmente. Se precisar atualizar o token, basta informá-lo novamente usando o mesmo parâmetro.

Você pode gerar o token [aqui](https://advisor.climatempo.com.br).
