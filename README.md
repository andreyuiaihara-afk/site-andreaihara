# andreaihara.com.br

Site estático publicado pelo Netlify a partir da branch `main`.

## Arquitetura editorial

- `/casos/` — casos comentados públicos.
- `/resumos/` — resumos temáticos públicos.
- `/laudos/` — biblioteca pública de laudos e frases.
- `/acesso/` — login dos médicos convidados.
- `/grupo/` — Educação Continuada MSK DASA, protegida pela função `medico`.

O Notion é a base editorial. A propriedade **Destino** define `Público`, `Grupo MSK` ou `Não publicar`. O conteúdo só deve migrar quando o **Status** estiver como `Pronto`.

## Ativar a área restrita no Netlify

1. Abra o projeto no Netlify e habilite **Identity**.
2. Em **Registration preferences**, escolha **Invite only**.
3. Convide cada médico pelo e-mail.
4. Atribua a função `medico` aos usuários autorizados.
5. Teste `/acesso/` e `/grupo/` antes de unir esta branch à `main`.

A proteção de `/grupo/*` é aplicada no CDN pelo `netlify.toml`; não é apenas ocultação visual.

## Estrutura de conteúdo

```
index.html
casos/index.html
casos/<slug>/index.html
resumos/index.html
laudos/index.html
assets/laudos.js
acesso/index.html
grupo/index.html
assets/style.css
netlify.toml
```

## Imagens

- Público: `assets/img/`.
- Restrito: manter sob `grupo/assets/`, para permanecer dentro da rota protegida.
- Usar WebP, no máximo 1600 px, removendo metadados.
- Publicar somente casos didáticos completamente anonimizados.
