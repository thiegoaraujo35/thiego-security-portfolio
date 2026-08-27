# Portfólio — Thiego Araújo

Site estático pronto para publicar gratuitamente no **GitHub Pages**.

## Estrutura

```
index.html          → a página inteira (estrutura + estilo)
assets/script.js     → TODO o conteúdo editável (skills, experiência, certificações, cursos, projetos)
assets/resume.pdf    → seu currículo para download (botão "Résumé")
```

---

## 1. Como publicar no GitHub Pages (5 minutos)

1. Crie um repositório novo no GitHub. Duas opções:
   - `SEU-USUARIO.github.io` → fica publicado direto em `https://SEU-USUARIO.github.io`
   - qualquer outro nome (ex: `portfolio`) → fica publicado em `https://SEU-USUARIO.github.io/portfolio`
2. Suba estes 3 itens (`index.html`, a pasta `assets/`) para a raiz do repositório.
3. No repositório: **Settings → Pages → Branch: main → pasta: / (root) → Save**.
4. Em 1-2 minutos o site fica no ar no endereço que o GitHub mostrar na mesma tela.
5. Cole esse link no **Featured** do seu LinkedIn e na seção de contato do currículo.

---

## 2. Como editar o conteúdo

**Você não precisa mexer no HTML.** Tudo que aparece no site (skills, experiência, certificações, cursos, projetos) está em `assets/script.js`, no topo do arquivo, em blocos assim:

```js
const CERTIFICATIONS = [
  { code: "SC-100", name: "Microsoft Certified: Cybersecurity Architect Expert", year: "20XX", url: "" },
  ...
];
```

- Troque `"20XX"` pelo ano real de cada certificação.
- Cole em `url` o link de verificação da credencial (Microsoft Learn, Credly, etc.) quando tiver — enquanto estiver vazio (`""`), o card mostra "Add link" no lugar.
- Para adicionar um curso/trilha nova, copie uma linha de `LEARNING_PATHS` e edite o texto.
- Para adicionar um projeto novo do GitHub, copie um bloco de `PROJECTS` e preencha `url` com o link do repositório; troque `soon: true` para `soon: false` quando o projeto estiver publicado.

## 3. Antes de publicar, ajuste

- [ ] Em `index.html`, troque `YOUR-GITHUB-USERNAME` pelo seu usuário real do GitHub (aparece 1x, na seção de contato).
- [ ] Confirme se `assets/resume.pdf` é a versão mais recente do seu currículo (troque o arquivo quando atualizar).
- [ ] Preencha os anos e links reais das certificações em `script.js`.
- [ ] Adicione seus cursos/trilhas reais em `LEARNING_PATHS`.
- [ ] Publique o repositório do "KQL Detection Library" (ou o que vier primeiro) e cole o link em `PROJECTS`.

## 4. Testar localmente antes de publicar (opcional)

Se tiver Python instalado, dentro da pasta do projeto:

```
python3 -m http.server 8000
```

E abra `http://localhost:8000` no navegador.
