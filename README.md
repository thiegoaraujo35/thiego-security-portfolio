# Thiego Araújo — Cyber Security / Cloud Security Portfolio

Site pessoal estático (HTML/CSS/JS puro, sem build step, sem dependências de runtime)
com foco em **Cyber Security, Cloud Security, Microsoft Azure, Vulnerability Management
e Security Operations**. Bilíngue (EN padrão / PT-BR), tema dark.

## Rodando localmente

Não precisa de instalação nem build. Duas formas:

1. **Abrir direto**: dê duplo clique em `index.html`.
2. **Servidor local** (recomendado, evita qualquer restrição de navegador):
   ```bash
   python3 -m http.server 8000
   # depois abra http://localhost:8000
   ```

## Estrutura

```
index.html                 → estrutura da página (todas as seções)
assets/css/style.css       → todo o visual (tokens de cor no topo do arquivo)
assets/js/data.js          → TODO O CONTEÚDO do site (edite aqui, não no HTML)
assets/js/main.js          → lógica: renderização, i18n, filtros, modal, menu
assets/resume/             → coloque seu PDF de currículo aqui
assets/cert-badges/        → (opcional) imagens de badges de certificação
```

### Por que `data.js` e não `data/*.json`?

Um site 100% estático aberto via `file://` (duplo clique) não consegue usar
`fetch()` para carregar `.json` por causa de CORS do navegador. Um arquivo
`.js` com um objeto JavaScript funciona em qualquer lugar — local, GitHub
Pages, Vercel, Netlify — sem servidor e sem build. A estrutura de dados é a
mesma que um JSON; é só a extensão que muda.

## Como atualizar o conteúdo

Tudo fica em **`assets/js/data.js`**. Não precisa mexer no HTML nem no CSS.

- **Dados pessoais / links**: objeto `meta` (email, LinkedIn, GitHub, PDF do currículo).
- **Adicionar certificação**: adicione um objeto na lista `certifications`.
  Campos: `code`, `name`, `vendor`, `category` (`microsoft` | `cybersecurity` |
  `cloud` | `secops` | `other`), `date`, `verifyUrl`, `pdfUrl`.
- **Adicionar projeto**: adicione um objeto na lista `projects`, preenchendo
  `title`, `summary`, `stack`, `github` e o case study em `details`
  (`problem`, `approach`, `result`) — cada campo com versão `en` e `pt`.
- **Adicionar lab**: lista `labs`.
- **Experiência profissional**: lista `experience`.
- **Stack de tecnologias**: objeto `stack`, por categoria.
- **Security Dashboard**: lista `dashboard`, campo `level` aceita
  `"core"`, `"advanced"` ou `"hands-on"` (não é uma porcentagem inventada).

Qualquer campo marcado como `"TODO"` está te esperando — o site funciona com
os TODOs, mas eles ficam visíveis como texto, então vale substituir antes de
publicar em definitivo.

## Regra de conteúdo

Este site **não deve conter certificações, empresas, cargos ou métricas
inventadas**. Onde a informação real ainda não estava disponível, o campo foi
deixado como `"TODO"` propositalmente — preencha só com dados reais. O feed
de "Exposure" no hero e qualquer número de exemplo em gráficos estão
marcados como **Demo data** e não representam ambientes reais.

## Traduções (EN/PT-BR)

Cada texto em `data.js` é um objeto `{ en: "...", pt: "..." }`. O idioma
padrão é inglês; o visitante troca pelo botão **EN | PT** no menu, e a
escolha fica salva no navegador (`localStorage`).

## Publicar

### GitHub Pages
1. Suba este conteúdo para um repositório no GitHub.
2. Nas configurações do repositório → **Pages** → Source: branch `main`,
   pasta `/ (root)`.
3. O site fica disponível em `https://SEU_USUARIO.github.io/NOME_DO_REPO/`.

### Vercel / Netlify
Não há build step — configure o *Build Command* como vazio e o
*Publish/Output directory* como a raiz do projeto (`.`).

## Checklist antes de publicar

- [ ] Preencher `meta.email`, `meta.linkedin`, `meta.github` em `data.js`
- [ ] Colocar o PDF do currículo em `assets/resume/resume.pdf`
- [ ] Revisar e completar `experience`, `projects`, `labs` (remover TODOs)
- [ ] Confirmar datas e links de validação das certificações
- [ ] Ajustar `og:title` / `og:description` / `<title>` em `index.html` se mudar o texto principal
- [ ] Testar em mobile (o layout já é responsivo, mas vale conferir)

## Licença / uso

Conteúdo pessoal — sinta-se à vontade para usar a estrutura de código como
base para o seu próprio portfólio.
