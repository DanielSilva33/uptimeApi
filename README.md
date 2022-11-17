# Práticas para melhorias de disponibilidade

Pensando em melhorar a disponibilidade das aplicações e serviços, este documento traz algumas implementações em NodeJs que melhoram a capacidade de resposta e disponibilidade das aplicações, gerando custos menores com ambiente e escalabilidade.


## Ferramenta utilizada para teste
Para realizar o benchmark da aplicação iremos utilizar a biblioteca NodeJs AutoCannon, que gera um teste de carga e um relatório que ajuda a complementar a nossa analise.

![Imagem de utilização do AutoCannon](https://raw.githubusercontent.com/mcollina/autocannon/master/demo.gif)

## 💻 Getting started


```bash
# Install the dependencies
$ npm i

# run the api service
$ npm run dev

# run the benchmark
$ npm run test
```