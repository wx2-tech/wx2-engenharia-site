# Site WX2 Engenharia

Documentação operacional do site estático da WX2 Engenharia.

## Fonte de verdade

- Checkout local: `C:\Users\Daniel\OneDrive\Documentos\ChatGPT\Site WX2 Engenharia`
- Repositório Git ativo: [wx2-tech/wx2-engenharia-site](https://github.com/wx2-tech/wx2-engenharia-site)
- Branch de publicação no GitHub: `main`
- Commit de referência da migração: `e804160cbbeaf4487898ffeccfdc07fde2dbfe62`
- Área publicada: `public/`

O repositório WX2 é o único repositório remoto a ser usado para este site. O endereço anterior associado à conta Daniel não deve mais ser usado. A existência e o estado do endereço anterior devem ser tratados separadamente do repositório ativo.

## Arquitetura

O site é uma aplicação estática existente, com arquitetura monolítica baseada em HTML, CSS, JavaScript e imagens. Não há framework ou processo de compilação obrigatório.

- Páginas HTML ficam em `public/`.
- Estilos, scripts, fontes e imagens ficam em `public/assets/`.
- Componentes compartilhados, como cabeçalho e rodapé, são incorporados pelas páginas estáticas conforme a arquitetura atual.
- O conteúdo publicado deve continuar compatível com a estrutura existente; não criar outro projeto ou framework sem aprovação.

## Publicação

A hospedagem utiliza o projeto Firebase `wx2-engenharia-76e87`, conforme `.firebaserc` e `firebase.json`.

- Diretório de hospedagem: `public/`
- Site Firebase: `wx2-engenharia-76e87`
- Domínio público: [wx2engenharia.com.br](https://wx2engenharia.com.br/)
- Sitemap público: [sitemap.xml](https://wx2engenharia.com.br/sitemap.xml)
- Robots: [robots.txt](https://wx2engenharia.com.br/robots.txt)

Fluxo obrigatório:

1. Alterar somente o checkout local.
2. Conferir `git status --short` e preservar mudanças existentes.
3. Validar HTML, links, imagens, JavaScript e rotas relevantes no preview local.
4. Revisar `git diff` e confirmar que não há credenciais ou arquivos temporários.
5. Criar commit aprovado no GitHub.
6. Publicar no Firebase somente após autorização explícita.
7. Validar as rotas públicas e registrar o resultado do deploy.

Blogs, cases e outras páginas marcadas como pendência não devem ser liberados automaticamente. O `firebase.json` mantém `blog.html` e `blog_details.html` fora da publicação até aprovação específica.

## Organização comercial

Os serviços são apresentados por assunto e, quando necessário, por contexto de atendimento:

- SPDA e para-raios: inspeções, laudos, projetos, análise de riscos, adequações, medições e diagnósticos.
- Sistemas de aterramento: consultoria, laudo de malha, continuidade, resistência ôhmica e resistência do solo.
- Estudos elétricos: estudos industriais e estudos de viabilidade para condomínios.
- NR10: consultoria e elaboração de documentação para adequação, incluindo definição de ATPV/energia incidente e termografia quando aplicável ao escopo.
- Condomínios: viabilidade para ar-condicionado, carregadores veiculares e estudo conjunto das duas cargas.

Os textos devem ser objetivos e compreensíveis para o cliente. Não inventar serviços, resultados, prazos, normas ou escopos. Páginas industriais podem usar linguagem mais técnica; páginas de condomínios devem priorizar clareza comercial.

## Integrações públicas do site

- Google Tag Manager: `GTM-P5G6L3X`
- GA4 de referência: `G-SLS0DGWF27`
- WhatsApp comercial: botão fixo e botão flutuante devem usar o mesmo fluxo de conversão definido no GTM.
- Search Console: propriedade de domínio `wx2engenharia.com.br`.

IDs de integração não substituem a validação no painel correspondente. Alterações em GTM, GA4, Google Ads, Search Console, DNS ou Firebase exigem evidência no serviço e autorização própria.

## SEO e indexação

- Manter títulos, descrições, canonical, `robots` e sitemap coerentes com o conteúdo real.
- Não incluir no sitemap páginas `noindex`, páginas 404, páginas de teste ou conteúdo ainda não aprovado.
- Após mudanças relevantes de SEO, validar as rotas públicas e solicitar inspeção somente das páginas autorizadas a indexar.

## Segurança e manutenção

- Nunca registrar senhas, tokens, chaves privadas ou códigos de autenticação no repositório.
- Não editar arquivos diretamente no Firebase, no navegador ou em cópias paralelas.
- Não usar `git reset --hard`, `git checkout --` ou exclusões amplas para limpar o checkout.
- Separar mudanças de conteúdo, menu, anúncios e infraestrutura em commits diferentes quando fizer sentido.
- Consultar [AGENTS.md](AGENTS.md) para as instruções completas de trabalho e [BACKLOG_WX2.md](BACKLOG_WX2.md) para pendências e auditorias registradas.

## Histórico da migração do repositório

Em 05/11/2026, o checkout local foi vinculado ao repositório `wx2-tech/wx2-engenharia-site`, e o commit `e804160cbbeaf4487898ffeccfdc07fde2dbfe62` foi enviado para `main`. O branch remoto foi confirmado no GitHub e os arquivos principais do site foram verificados no repositório WX2.

