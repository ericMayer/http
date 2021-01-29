Projeto baseado no conteúdo do módulo de http do curso de Angular 2+ da Loiane (https://loiane.training/curso/angular).

Foi utilizado o Material Design no projeto, json-server e um back-end em Node apenas para fins de aprendizado no upload e download de arquivos.

Outras tecnologias, metodologias e padrões que foram usados:

CSS;
HTML 5;
SCSS;
Flexbox;
LazyLoading.

Librarys utilizadas:

ngx-mask - https://www.npmjs.com/package/ngx-mask
ngx-currency - https://www.npmjs.com/package/ngx-currency
ngx-file-drop - https://www.npmjs.com/package/ngx-file-drop

# API

Executar comando json-server src/assets/json/cursos.json --watch ou npm run json-cursos

# Executar Projeto

Execute `npm run start` ou `ng serve --proxy-config proxy.conf.json` na pasta do projeto, para funcionar corretamente as configurações do proxy e funciona correto com o backend.

# Back-end utilizado em Node

Para rodar o servidor dentro da pasta do server, executar o comando `npm run start` ou node src/index.js