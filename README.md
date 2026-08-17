# Carolina Borba — site institucional

Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.
Deploy: Vercel.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Contatos centralizados

Edite `src/lib/site.ts` para alterar WhatsApp, e-mail, Instagram e mensagens pré-preenchidas.

WhatsApp atual (extraído do cartão de visitas no manual de marca): `+55 51 99843-4003`.

## Assets de marca

Exportados do PDF de identidade para `public/brand/` (selo, textura, ícones).
Os PDFs originais ficam em `brand/`.

## Adicionar foto da Carolina no hero (pendente)

O hero (`src/components/Hero.tsx`) foi desenhado hoje sem foto — só tipografia,
textura e o selo da marca — porque não havia nenhuma foto dela disponível no
projeto. Quando tiver uma foto (retrato, boa luz, fundo simples):

1. Salve em `public/brand/retrato-carolina.jpg` (ou `.webp`).
2. Em `Hero.tsx`, troque a seção do `<motion.div>` de conteúdo por um grid de
   duas colunas (texto | foto), como já existe em `About.tsx` — reaproveite o
   padrão `md:grid-cols-[...]` de lá.
3. Ajuste `object-position` da imagem pra enquadrar o rosto acima da dobra.

Nenhuma outra mudança é necessária — o resto do design já foi pensado pra
"abrir espaço" pra essa foto sem precisar de retrabalho.
