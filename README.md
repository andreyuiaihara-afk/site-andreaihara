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

## Editor e geração do site (proposta em branch)

Os sete textos públicos atuais estão em `src/posts/*.md`. Título, resumo, seção,
ordem, etiquetas e endereço permanente ficam no cabeçalho de cada arquivo; o
corpo aceita Markdown e imagens. A página inicial e as três listas são geradas
automaticamente. Alterar `section` muda a lista em que o texto aparece; preserve
`permalink` quando o link já foi compartilhado.

- `npm ci` instala as dependências fixadas no projeto.
- `npm run build` gera `_site/` para publicação no Netlify.
- `python scripts/verify-build.py` compara texto e imagens dos artigos migrados
  com as páginas atuais e confere os links locais.
- `/admin/` contém o painel Decap CMS conectado ao Decap Turbo Free.
  O backend `turbo-github` usa a versão beta do CMS. O Site ID não é segredo;
  a instalação GitHub App foi limitada pelo proprietário ao repositório do site.
  O login, a lista de conteúdos e a criação de um rascunho foram validados na
  prévia do PR #13. O rascunho de teste foi fechado sem publicação. Após a
  integração, o editor grava em `main` e aponta para o domínio público.
  Incluir `https://andreaihara.com.br/admin/` nas Admin interface URL(s) do
  site no Decap Turbo antes de entrar no editor de produção. Confirmar o build
  de produção e testar o upload de imagem com uma publicação real.

A migração de hospedagem requer adaptar a autenticação dos médicos: `/grupo/`
ainda depende de Netlify Identity e dos redirecionamentos por papel em
`netlify.toml`. Nunca publique material interno no repositório GitHub público.
Antes de criar conteúdo restrito novo, torne o repositório privado e valide a
proteção da URL pública, dos arquivos de mídia e dos endereços de prévia. O
Cloudflare Pages aceita repositórios privados, mas não interpreta a regra de
papéis do Netlify. Não aponte o domínio para outra hospedagem antes do teste.
