# bookstore-demo

Site de exemplo para prática de exercícios de automação de testes. 

Construído com TypeScript e VueJS.

A API de back-end é necessária para o correto funcionamento do sistema e está implementada em [github.com/thvieira/bookstore-api-demo](https://github.com/thvieira/bookstore-api-demo). Recomendo utilizar a API através do Docker.

# Run from docker hub

```sh
$ docker run -d -p 5173:5173 --name bookstore-web-demo-from-hub thvieiraid/bookstore-web-demo:latest
```
