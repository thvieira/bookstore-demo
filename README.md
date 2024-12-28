# bookstore-demo

Site de exemplo para prática de exercícios de automação de testes. 

Construído com TypeScript e VueJS.

A API de back-end é necessária para o correto funcionamento do sistema e está disponível em [github.com/thvieira/bookstore-api-demo](https://github.com/thvieira/bookstore-api-demo). Recomendo utilizar a API através do Docker.


# Subir o container diretamente do DockerHub

Após executar o comando a seguir, basta acessar o endereço http://localhost:5371/ através do teu navegador.

```sh
$ docker run -d -p 5173:5173 --name bookstore-web-demo-from-hub thvieiraid/bookstore-web-demo:latest
```

## Subir container localmente

Primeiramente, construa a imagem Docker: 

```sh
$ docker build . -t="bookstore-web-demo"
```

Então execute uma instância do container Docker: 

```sh
$ docker run -d -p 3000:3000 --name bookstore-web-demo bookstore-web-demo
```

