# andreaihara.com.br

Site estático. Sem build: o que está aqui é exatamente o que vai para o ar.

## Estrutura

```
index.html                    home — lista de casos e ferramentas
laudos/index.html             biblioteca de laudos e frases (monta-se sozinha)
assets/laudos.js              >>> ÚNICO arquivo a editar para acrescentar laudos e frases
assets/style.css              folha de estilo de todo o site
assets/img/                   imagens dos posts, em .webp
casos/<slug>/index.html       um post por pasta
netlify.toml                  configuração de publicação
```

## Acrescentar um laudo ou uma frase

Abrir `assets/laudos.js`, copiar um bloco inteiro (de `{` até `},`) e editar.
Não é preciso mexer em HTML: os filtros, a busca e o botão de copiar se ajustam
sozinhos ao conteúdo.

Campos: `tipo` (`"laudo"` ou `"frase"`), `regiao`, `metodo`, `titulo`, `nota`
(pode ficar vazia) e `texto`. Use `\n` para quebrar linha dentro do texto.

## Acrescentar um post

Duplicar uma pasta em `casos/`, trocar o conteúdo, e acrescentar o cartão
correspondente na lista da home (`index.html`).

## Publicar

Se o site estiver conectado ao GitHub: `commit` + `push` — a Netlify publica em
seguida, sozinha.

Sem GitHub: arrastar esta pasta inteira na aba **Deploys** da Netlify.

## Convenções das imagens

- `.webp`, qualidade 88, no máximo 1600 px no maior lado.
- Metadados removidos por reencode antes de subir.
- Sempre de casos didáticos anonimizados.
