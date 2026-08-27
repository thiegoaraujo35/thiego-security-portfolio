# Portfólio — Thiego Araújo (vibe: code editor / terminal)

Site estático, pronto para publicar gratuitamente no **GitHub Pages**.

## Estrutura

```
index.html          → a página inteira (janelas de terminal + editor)
assets/script.js     → TODO o conteúdo editável (about, skills, experiência, certificações, projetos, contato)
assets/resume.pdf    → seu currículo para o botão "resume.pdf"
```

## 1. Como publicar no GitHub Pages (5 minutos)

1. Crie um repositório no GitHub: `SEU-USUARIO.github.io` (fica em `https://SEU-USUARIO.github.io`) ou qualquer outro nome.
2. Suba `index.html` e a pasta `assets/` para a raiz do repositório.
3. Vá em **Settings → Pages → Branch: main → / (root) → Save**.
4. Em 1-2 minutos o link fica no ar. Cole no Featured do LinkedIn.

## 2. Como editar o conteúdo

Tudo está em `assets/script.js`, no topo do arquivo, em blocos de dados simples:

- `ABOUT` — resumo, cargo, localização
- `SKILLS` — vira automaticamente o `skills.json` (edite as listas, o JSON se reformata sozinho)
- `EXPERIENCE` — vira o `experience.log`; `status: "ACTIVE"` marca o emprego atual
- `CERTIFICATIONS` — vira o `certifications.yaml`. Troque `"20XX"` pelo ano real e `url` pelo link de verificação (Microsoft Learn/Credly) quando tiver
- `PROJECTS` — vira o `projects/`. Quando publicar um repositório, preencha `url` e troque `wip: true` para `wip: false`
- `CONTACT` — LinkedIn, GitHub, e-mail (aparecem no `contact.sh`)

Não precisa mexer no `index.html` nem no CSS — só no bloco de dados do topo do `script.js`.

## 3. Antes de publicar, ajuste

- [ ] Trocar `github.com/YOUR-GITHUB-USERNAME` pelo seu usuário real (em `CONTACT.github` e `CONTACT.githubLabel`, dentro do `script.js`)
- [ ] Preencher os anos reais das certificações (`year: "20XX"`)
- [ ] Colar os links de verificação das certificações quando tiver (`url: ""`)
- [ ] Publicar o primeiro projeto (ex: KQL Detection Library) e atualizar `PROJECTS` com o link real
- [ ] Confirmar que `assets/resume.pdf` é a versão mais atual do currículo

## 4. Testar localmente (opcional)

```
python3 -m http.server 8000
```
Abra `http://localhost:8000` no navegador.
