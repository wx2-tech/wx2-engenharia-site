# Backlog — WX2 Engenharia

## Contexto e limites atuais

- O site continua sendo tratado como um site estático existente, sem criação de um novo projeto ou mudança de arquitetura.
- Os blogs existem no repositório, mas não serão publicados agora. Antes da publicação, precisam ser revisados, adaptados ao conteúdo real da WX2 e integrados ao rastreamento.
- As alterações em Google Ads, Google Tag Manager, Search Console e DNS serão feitas somente depois da verificação da conta correta e da autorização necessária. A auditoria pode ser feita de forma somente leitura.

## Prioridade alta — mensuração e aquisição

- [ ] Confirmar acesso à conta correta no Google Tag Manager e registrar o workspace, a versão publicada e os ambientes do container `GTM-P5G6L3X`.
- [ ] Remover ou desativar a tag legada do Universal Analytics `UA-197622657-1`; manter o GA4 `G-SLS0DGWF27` como referência atual.
- [ ] Validar no Tag Assistant os eventos `click_botao_whatsapp_fixo` e `exibicao_pagina_obrigado`.
- [ ] Confirmar no GA4 se esses eventos chegam ao DebugView e definir quais serão eventos-chave.
- [ ] Confirmar no Google Ads as três conversões ligadas ao ID `362251754`, seus rótulos, origem, status, janela de conversão e se estão marcadas como primárias.
- [ ] Auditar as campanhas existentes antes de qualquer alteração: objetivo, status, orçamento, estratégia de lance, locais, horários, públicos, palavras-chave, termos de pesquisa, negativas, anúncios, extensões/recursos, qualidade dos ativos e conversões.
- [ ] Comparar a entrega das campanhas com os eventos reais do site e corrigir divergências de atribuição, duplicidade ou conversão não contabilizada.
- [ ] Após a linha de base, propor ajustes de campanha separados por impacto, risco e necessidade de aprovação.

## Prioridade alta — Google Search Console

- [x] Confirmar qual conta Google possui a propriedade de `wx2engenharia.com.br` no Search Console.
- [x] Confirmar o tipo de propriedade e as permissões disponíveis para Daniel Lage de Matos.
- [x] O DNS possui o registro `google-site-verification` e a propriedade foi confirmada no painel autenticado.
- [x] Confirmar o sitemap `https://wx2engenharia.com.br/sitemap.xml` no Search Console.
- [ ] Executar inspeção de URL, cobertura, indexação, Core Web Vitals e problemas de segurança quando o acesso ao painel estiver disponível.

### Verificação pública concluída — 01/11/2026

- `https://wx2engenharia.com.br/robots.txt` respondeu HTTP 200 e aponta para `https://wx2engenharia.com.br/sitemap.xml`.
- `https://wx2engenharia.com.br/sitemap.xml` respondeu HTTP 200, possui 14 URLs e todas as 14 URLs listadas responderam HTTP 200.
- O DNS público contém o registro `google-site-verification`.
- A confirmação pública foi complementada pela validação dentro do painel do Search Console; permanece pendente apenas a análise detalhada de indexação e cobertura.

### Confirmação no painel do Search Console — 01/11/2026

- Propriedade confirmada: `sc-domain:wx2engenharia.com.br`.
- Conta exibida no painel: `wx2engenharia@gmail.com`.
- O sitemap `https://wx2engenharia.com.br/sitemap.xml` está enviado desde 19/09/2022.
- Última leitura registrada: 29/10/2026.
- Status no Search Console: `Processado`.
- O Search Console informa 11 páginas encontradas no sitemap; o arquivo público contém 14 URLs. Essa diferença deve ser investigada no relatório de indexação, mas não impede o processamento do sitemap.

### Diagnóstico de indexação no Search Console — 01/11/2026

- O relatório mostra 16 páginas indexadas e 8 não indexadas, em 4 motivos.
- 3 páginas com redirecionamento são variantes antigas `http://wx2engenharia.com.br/`, `http://www.wx2engenharia.com.br/` e `https://www.wx2engenharia.com.br/`; isso é compatível com a preferência atual pelo domínio HTTPS sem `www`.
- 1 cópia sem canônica selecionada é `https://wx2engenharia.com.br/index.html`; a página local já possui canonical apontando para `https://wx2engenharia.com.br/`.
- 3 URLs detectadas, mas não indexadas, são `Projetos_climatizacao.html`, `adequacao_nr12.html` e `projetos_mecanicos.html`. As três retornam 404 no domínio público; as duas últimas não existem no repositório. A primeira existe apenas em minúsculas e contém `noindex`, portanto não deve ser adicionada ao sitemap sem decisão de conteúdo.
- 1 URL rastreada, mas não indexada, é `https://wx2engenharia.com.br/_laudo_para_raios_e_spda.html`. Ela responde HTTP 200, está no sitemap e é usada como landing page de anúncio; precisa de avaliação de conteúdo/duplicidade antes de qualquer solicitação de indexação.
- Nenhuma validação de correção foi iniciada no Search Console.
- Em 01/11/2026, foi solicitada a indexação de `https://wx2engenharia.com.br/_laudo_para_raios_e_spda.html`; o Search Console confirmou que a URL entrou na fila prioritária de rastreamento.
- As demais URLs do sitemap não foram submetidas indiscriminadamente: páginas já indexadas não precisam de nova solicitação, e URLs 404, redirecionadas ou marcadas como `noindex` não devem ser enviadas.

## Prioridade média — defeitos técnicos confirmados

- [ ] Corrigir o manifesto PWA: várias páginas apontam para `site.webmanifest`, que hoje responde 404, e o manifesto existente possui caminhos de ícones que precisam ser conferidos.
- [ ] Remover a duplicidade de comentários do GTM presente em várias páginas, sem duplicar o snippet funcional.
- [ ] Revisar os IDs HTML repetidos dos botões `link-whatsapp-fx`, pois podem afetar a precisão dos gatilhos de clique.
- [ ] Revalidar todas as rotas, o sitemap, o robots.txt, o formulário de contato e a página `obrigado.html` após as correções.

## Prioridade média — novos serviços para condomínios

- [ ] Levantar os serviços específicos que serão oferecidos a condomínios e separar cada serviço por público, problema, entrega e chamada para orçamento.
- [ ] Definir quais serviços terão páginas próprias e quais serão agrupados em uma página de solução para condomínios.
- [ ] Produzir textos reais, títulos, descrições, FAQs, chamadas para WhatsApp e formulário de contato.
- [ ] Criar as páginas seguindo a arquitetura estática atual, sem introduzir framework ou repositório paralelo.
- [ ] Atualizar menu, links internos, sitemap, títulos, descrições, canonical e rastreamento dos novos serviços.

## Prioridade média — blogs (não publicar agora)

- [ ] Manter `blog.html` e `blog_details.html` fora da estratégia de publicação até a revisão.
- [ ] Substituir o conteúdo demonstrativo em inglês por conteúdo aprovado da WX2 Engenharia.
- [ ] Revisar ortografia, SEO, imagens, links, datas e dados estruturados.
- [ ] Inserir GTM e validar as páginas no Tag Assistant antes de publicar.
- [ ] Só então decidir inclusão no sitemap e liberação dos links no menu.

## Critério de conclusão

- Nenhuma alteração externa em Ads, Search Console, GTM ou DNS será considerada concluída apenas pela presença de código no site.
- A conclusão exige evidência no painel correspondente, teste de disparo e comparação com o comportamento real do site.
- Cada correção de código deve ser validada localmente, publicada somente com autorização e registrada em commit separado quando fizer sentido.

## Resultado da auditoria somente leitura — 01/11/2026

### Google Ads

- A conta `Wx2 Engenharia` está acessível pela conexão de auditoria.
- No período dos últimos 30 dias retornado pelo Google Ads, as três campanhas com entrega somaram 904 impressões, 30 cliques, R$ 46,69 de investimento e 0 conversões registradas.
- `Laudo SPDA`: status limitado por `LEAD_FORM_EXTENSION_DISAPPROVED`; 22 cliques, CTR de 6,04% e 72,02% de perda de impressão por classificação.
- `Serviços SPDA`: status limitado por `BIDDING_STRATEGY_LIMITED`; 6 cliques, CTR de 1,22% e 67,58% de perda de impressão por classificação.
- `Laudo de viabilidade Ar condicionado`: elegível, porém com baixa participação; 2 cliques, CTR de 4,00% e 68,47% de perda de impressão por classificação.
- A perda por classificação é muito maior que a perda por orçamento nas campanhas com entrega; aumentar orçamento não é a primeira ação recomendada.
- Foram encontrados anúncios/grupos habilitados sem entrega no período e campanhas antigas/removidas. Um anúncio Smart antigo ainda expõe a URL final `http://smartcampaignplaceholder.com`, mas a campanha correspondente está com status `REMOVED`; não deve ser reativada sem revisão completa.
- Na campanha `Laudo SPDA`, o grupo dinâmico consumiu R$ 25,61 e gerou 17 dos 22 cliques da campanha, sem conversão; deve ser revisado separadamente do anúncio responsivo.
- A auditoria de palavras-chave retornou 763 registros. Nas campanhas com entrega predominam palavras amplas; também há termos de intenção informacional, como “como instalar”, “o que significa”, “modelo” e “materiais”, que precisam ser comparados aos termos de pesquisa antes de receberem verba.
- Foram identificados 129 termos de pesquisa para revisão, incluindo consultas informacionais, técnicas, de concorrentes e potencialmente fora do escopo comercial. A lista deve ser classificada antes de criar negativas; não foram feitas alterações.
- As métricas de conversão consultadas para as ações existentes retornaram 0 no período. Isso não prova isoladamente que o rastreamento esteja quebrado, mas exige teste ponta a ponta e conferência de quais ações são primárias.

### Site, GTM, GA4 e Search Console

- O domínio próprio e o endereço Firebase responderam normalmente, e as páginas públicas verificadas tiveram o mesmo conteúdo entre os dois endereços.
- O container `GTM-P5G6L3X` está presente em 19 de 21 páginas HTML públicas analisadas; `blog.html` e `blog_details.html` permanecem sem GTM e continuam fora do plano de publicação.
- O GTM público contém a referência GA4 `G-SLS0DGWF27`, eventos de WhatsApp e de exibição da página de obrigado, além de uma tag legada do Universal Analytics `UA-197622657-1`.
- Há IDs HTML repetidos para links fixos de WhatsApp; isso pode reduzir a confiabilidade dos gatilhos de clique e precisa ser corrigido antes de tratar as conversões como plenamente confiáveis.
- O DNS publica um token `google-site-verification` e o sitemap responde, mas isso não comprova qual conta possui a propriedade nem quais permissões estão disponíveis no Search Console.
- Na conexão de auditoria, Google Ads está conectado; GA4 e Search Console não possuem contas conectadas para cruzamento independente. Isso é uma lacuna da conexão de auditoria, não uma prova de que as vinculações estejam ausentes no Google.
- O manifesto PWA foi corrigido localmente, mas a correção ainda não foi publicada; o domínio público continua precisando de nova validação após o deploy.

### Ordem recomendada para correção

1. Corrigir/revisar a extensão de formulário reprovada da campanha `Laudo SPDA`.
2. Conferir a estratégia de lances de `Serviços SPDA` e melhorar classificação, relevância e qualidade antes de elevar orçamento.
3. Limpar a URL-placeholder da campanha removida e revisar campanhas/grupos habilitados sem entrega; não reativar campanhas removidas sem nova validação.
4. Testar no Tag Assistant um clique de WhatsApp e um envio real do formulário até `obrigado.html`.
5. No Google Ads, definir uma conversão primária para formulário e uma para WhatsApp, deixando duplicidades e ações antigas como secundárias ou removidas somente após confirmação.
6. Remover/desativar a tag Universal Analytics legada e validar o GA4 atual.
7. Conectar GA4 e Search Console à ferramenta de auditoria ou disponibilizar acesso autenticado para concluir o cruzamento de dados.

### Alteração autorizada e aplicada

- Em 01/11/2026, com autorização expressa, o teto de CPC da campanha `Serviços SPDA` foi alterado de R$ 3,00 para R$ 4,00.
- O orçamento diário e o tipo de estratégia não foram alterados.
- A alteração foi confirmada na leitura atualizada da conta.
- Acompanhar por sete dias: impressões, cliques, CPC médio, participação de impressão, perda por classificação, gasto e conversões.
