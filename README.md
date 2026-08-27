# Portfólio — Thiego Araújo (estilo hub cyber, versão masculina)

Site estático, pronto para publicar gratuitamente no **GitHub Pages**.

## Estrutura
```
index.html          → a página inteira
assets/script.js     → TODO o conteúdo editável (skills, experiência, certificações, formação, projetos)
assets/resume.pdf    → seu currículo para o botão "Currículo"
```

## 1. Publicar no GitHub Pages (5 minutos)
1. Crie um repositório: `SEU-USUARIO.github.io` (fica em `https://SEU-USUARIO.github.io`) ou outro nome.
2. Suba `index.html` e a pasta `assets/` para a raiz.
3. **Settings → Pages → Branch: main → / (root) → Save**.
4. Em 1-2 minutos o link está no ar. Cole no Featured do LinkedIn.

## 2. Editar conteúdo
Tudo em `assets/script.js`, no topo: `SKILLS`, `EXPERIENCE`, `CERTIFICATIONS`, `EDUCATION`, `LANGUAGES`, `PROJECTS`, `CONTACT`.

## 3. Antes de publicar
- [ ] Trocar `YOUR-GITHUB-USERNAME` pelo seu usuário real (2 lugares no `index.html`: nav e seção de contato)
- [ ] Preencher o ano real de cada certificação (`year: "20XX"`) em `script.js`
- [ ] Colar os links de verificação das certificações quando tiver (`url: ""`)
- [ ] Publicar o primeiro projeto e atualizar `PROJECTS` com o link real (`soon: false`)
- [ ] Conferir se `assets/resume.pdf` é a versão mais atual

## 4. Testar localmente (opcional)
```
python3 -m http.server 8000
```
