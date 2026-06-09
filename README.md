# 🎨 Site Celine Pinturas

Site institucional e portfólio da artista visual **Celine Boava** — pinturas
personalizadas, pintura ao vivo em casamentos/eventos e aulas de pintura.

Site **100% estático**, feito para hospedagem **gratuita no GitHub Pages**.
Não precisa de servidor, banco de dados nem programação para funcionar.

---

## 📑 Índice

1. [Como colocar o site no ar (GitHub Pages)](#1-como-colocar-o-site-no-ar-github-pages)
2. [Onde está cada coisa (mapa de pastas)](#2-onde-está-cada-coisa-mapa-de-pastas)
3. [Como trocar textos, links e WhatsApp](#3-como-trocar-textos-links-e-whatsapp)
4. [Como adicionar/trocar FOTOS](#4-como-adicionartrocar-fotos)
5. [Como adicionar/trocar VÍDEOS](#5-como-adicionartrocar-vídeos)
6. [Checklist antes de publicar](#6-checklist-antes-de-publicar)
7. [Perguntas frequentes](#7-perguntas-frequentes-de-manutenção)

---

## 1. Como colocar o site no ar (GitHub Pages)

> Você só precisa fazer isso **uma vez**. Depois, qualquer alteração que você
> enviar para o GitHub atualiza o site sozinho em 1–2 minutos.

1. Crie uma conta gratuita em <https://github.com>.
2. Clique em **New repository** (novo repositório).
   - **Recomendado:** dê ao repositório o nome `celinepinturas.github.io`
     (troque `celinepinturas` pelo seu nome de usuário do GitHub). Assim o site
     fica no endereço limpo `https://SEUUSUARIO.github.io`.
   - Se preferir outro nome (ex.: `site`), o endereço será
     `https://SEUUSUARIO.github.io/site/` — também funciona.
3. Envie **todos os arquivos desta pasta** para o repositório
   (botão **Add file → Upload files**, depois arraste tudo e clique em
   **Commit changes**).
4. No repositório, vá em **Settings → Pages**.
5. Em **Source**, escolha a branch **main** e a pasta **/(root)**. Salve.
6. Aguarde 1–2 minutos e atualize a página. O endereço do site aparece ali no topo.

✅ Pronto. Toda vez que você editar um arquivo pelo próprio GitHub
(**botão do lápizinho ✏️** em cada arquivo) e clicar em **Commit changes**,
o site se atualiza automaticamente.

---

## 2. Onde está cada coisa (mapa de pastas)

```
celine-pinturas/
│
├── index.html              → a página em si (NÃO precisa editar p/ trocar conteúdo)
├── README.md               → este guia
│
├── assets/
│   ├── js/
│   │   ├── conteudo.js      → ⭐ AQUI você edita TEXTOS, LINKS e WhatsApp
│   │   └── main.js          → "motor" do site (não precisa mexer)
│   │
│   ├── css/
│   │   └── styles.css       → aparência/cores (mexa só se quiser ajustar visual)
│   │
│   ├── images/             → ⭐ AQUI vão as FOTOS, separadas por assunto:
│   │   ├── portfolio/       → obras do ateliê (retratos, autorais, paisagens…)
│   │   ├── about/           → foto(s) da Celine para a seção "Quem é a Celine"
│   │   ├── classes/         → fotos das aulas / metodologia
│   │   ├── students/        → trabalhos e fotos dos alunos
│   │   ├── events/          → fotos de pintura ao vivo em casamentos/eventos
│   │   └── process/         → bastidores e etapas do processo criativo
│   │
│   ├── videos/             → ⭐ AQUI vão os VÍDEOS:
│   │   ├── classes/         → vídeos das aulas/turmas
│   │   ├── events/          → vídeos de pintura ao vivo / obras
│   │   └── process/         → time-lapses / bastidores
│   │
│   └── img/                → imagens do próprio site (ícone, placeholders). Não mexer.
│
├── 404.html, robots.txt, sitemap.xml, .nojekyll → arquivos técnicos. Não mexer.
```

> 💡 Dentro de cada pasta de fotos/vídeos há um arquivo **`LEIA-ME.txt`** com
> instruções específicas daquela pasta.

---

## 3. Como trocar textos, links e WhatsApp

**Tudo o que é texto, link e número de contato fica em um único arquivo:**

### 👉 `assets/js/conteudo.js`

Abra esse arquivo no GitHub (clique nele → ✏️ lápis). Ele é todo comentado em
português. Você verá blocos assim:

```js
contato: {
    whatsapp: "5542999872929",        // já preenchido: (42) 99987-2929
    instagram: "https://instagram.com/celine.pinturas",
    linktree:  "https://linktr.ee/celinepinturasboava",
    email:     "celinepinturasboava@gmail.com",
    cidade:    "Guarapuava · Paraná",
},
```

### ⚠️ Trocar o número do WhatsApp (se mudar)

O número já está configurado com **(42) 99987-2929** → `5542999872929`. Se um dia
precisar mudar, use sempre o formato: **55 + DDD + número, só dígitos, sem espaços
ou traços.**

- Exemplo para um celular `(42) 99876-5432`:
  fica **`5542998765432`**.

Edite o valor entre aspas, mantenha as aspas e a vírgula no fim da linha, e
clique em **Commit changes**.

### Para trocar qualquer texto

Procure no arquivo a frase que aparece no site e edite **apenas o que está entre
aspas**. Nunca apague as aspas, as vírgulas ou os nomes antes dos dois-pontos
(ex.: `titulo:`). Esses símbolos fazem o site funcionar.

✅ Certo:  `titulo: "Aulas de pintura para todos os níveis",`
❌ Errado: `titulo: Aulas de pintura para todos os níveis`  (faltam as aspas)

---

## 4. Como adicionar/trocar FOTOS

1. Escolha a pasta certa em `assets/images/` (veja o mapa acima).
2. Envie sua foto para lá (**Add file → Upload files**).
   - Use **.jpg** para fotos e **.png** para imagens com fundo transparente.
   - Dê nomes simples, **sem espaços nem acentos**: use `obra-01.jpg`,
     `aluno-02.jpg` (e não `Foto da Aluna (1).JPG`).
3. Abra `assets/js/conteudo.js` e adicione/edite o caminho da foto na lista
   da seção correspondente. Exemplo, no ateliê:

```js
obras: [
    { src: "assets/images/portfolio/obra-01.jpg", titulo: "Retrato a óleo", categoria: "retratos" },
    { src: "assets/images/portfolio/obra-02.jpg", titulo: "Paisagem",        categoria: "paisagens" },
    // ↑ copie uma linha dessas, cole abaixo e troque o nome do arquivo e o título
],
```

> 🛟 **À prova de erro:** se uma foto faltar ou o nome estiver errado, o site
> mostra automaticamente uma imagem-placeholder bonita no lugar — ele **nunca**
> mostra "imagem quebrada". Mas o ideal é conferir se o nome do arquivo bate
> exatamente com o que está escrito no `conteudo.js` (maiúsculas/minúsculas
> contam!).

---

## 5. Como adicionar/trocar VÍDEOS

> ✅ **Os 3 vídeos enviados já estão no site, prontos e otimizados:**
> - **Aulas** → turma de pintura (`assets/videos/classes/turma.mp4`)
> - **Ateliê** → "Arte na garagem", mostrando as obras (`assets/videos/events/arte-na-garagem.mp4`)
> - **Processo** → time-lapse "Pintura de paisagem" (`assets/videos/process/processo-paisagem.mp4`)
>
> Eles foram convertidos para um formato que **toca em qualquer celular e
> navegador** (um deles vinha em HEVC, que não roda no Android, e foi corrigido),
> com imagem de capa e otimização para começar a tocar rápido.

Para adicionar **mais** vídeos, há duas formas:

### A) Vídeo do YouTube (recomendado para vídeos longos, mais leve)

1. Suba o vídeo no YouTube (pode ser "não listado").
2. Em `conteudo.js`, na lista de vídeos da seção, use o **link de incorporar**:

```js
videos: [
    { tipo: "youtube", src: "https://www.youtube.com/embed/AbCdEf123", titulo: "Pintura ao vivo — casamento" },
],
```

### B) Arquivo de vídeo próprio (.mp4)

1. Coloque o arquivo `.mp4` na pasta da seção (ex.: `assets/videos/process/`).
2. (Opcional) Coloque uma imagem de capa em `assets/images/...` .
3. Em `conteudo.js`:

```js
videos: [
    { tipo: "arquivo", src: "assets/videos/process/meu-video.mp4", cartaz: "assets/images/process/capa.jpg", titulo: "Bastidores" },
],
```

> ⚠️ **Atenção ao subir .mp4 no GitHub:**
> - O GitHub **não aceita** arquivos acima de **100 MB**.
> - Grave/exporte em **MP4 H.264** (o formato mais compatível). Vídeos de
>   iPhone às vezes saem em "HEVC/H.265", que **não toca no Android** — nesse
>   caso, exporte como "Mais compatível" no celular antes de subir.
> - Para vídeos longos, **prefira o YouTube**.

---

## 6. Checklist antes de publicar

- [x] Número do **WhatsApp** já configurado: (42) 99987-2929.
- [x] Fotos e vídeos enviados já estão organizados nas seções.
- [ ] Confiro os **links** do Instagram, Linktree e e-mail.
- [ ] Reviso os **textos** (história, serviços, FAQ).
- [ ] Substituo os **depoimentos de exemplo** por depoimentos reais (em `conteudo.js`, bloco `depoimentos`).
- [ ] Adiciono **fotos reais de pintura ao vivo** em `assets/images/events/` (essa seção ainda não tem fotos próprias).
- [ ] Abro o site no **celular e no computador** para conferir.

---

## 7. Perguntas frequentes de manutenção

**Editei um texto e o site sumiu / quebrou. E agora?**
Provavelmente uma aspa `"` ou vírgula `,` foi apagada sem querer no
`conteudo.js`. Volte ao histórico do arquivo no GitHub (aba **History**) e
restaure a versão anterior. Por isso: edite **só o que está entre aspas**.

**Troquei a foto mas continua aparindo a antiga.**
É o cache do navegador. Atualize com **Ctrl + F5** (ou aba anônima). No celular,
feche e reabra a aba.

**Posso usar um domínio próprio (ex.: celinepinturas.com.br)?**
Sim. Compre o domínio e configure em **Settings → Pages → Custom domain** no
GitHub. Há um guia oficial em <https://docs.github.com/pages>.

**Quero mudar as cores do site.**
As cores ficam no topo do arquivo `assets/css/styles.css`, em variáveis com
nomes claros (`--terracota`, `--salvia`, etc.). Troque o código de cor
(ex.: `#BF6B4B`) e salve. Recomendado pedir ajuda de alguém com noção de design
para manter a harmonia.

---

Feito com carinho para a **Celine Pinturas** 🎨
