# Instruções de trabalho — site WX2 Engenharia

## Fonte de verdade e local de trabalho

- O repositório Git local deste projeto é a fonte de verdade do site.
- Todas as alterações devem ser feitas no checkout local do repositório:
  `C:\Users\Daniel\OneDrive\Documentos\ChatGPT\Site WX2 Engenharia`.
- A pasta `public/` é a área publicada pelo Firebase Hosting conforme `firebase.json`.
- Não editar arquivos diretamente na hospedagem, no Firebase, no navegador ou em uma cópia paralela fora deste repositório.
- O site continua sendo tratado como uma aplicação estática existente. Não criar novo repositório, framework ou arquitetura sem autorização explícita.

## Fluxo obrigatório para alterações

1. Antes de editar, consultar `git status --short` e preservar alterações existentes do usuário.
2. Confirmar o escopo da tarefa e identificar os arquivos que serão alterados.
3. Editar somente os arquivos do checkout local.
4. Executar validações proporcionais à alteração: rotas HTTP, HTML, links, imagens, JavaScript e revisão visual no preview local quando aplicável.
5. Revisar `git diff` e conferir se não há credenciais, arquivos temporários ou alterações não relacionadas.
6. Separar mudanças independentes em commits distintos quando fizer sentido.
7. Criar commit somente depois da revisão local e da autorização do responsável pelo projeto, usando mensagem objetiva que descreva a alteração.
8. Publicar somente depois de o commit aprovado estar identificado e após autorização explícita para o deploy.
9. Após publicar, validar a URL pública, as rotas alteradas e os recursos principais; registrar o commit e o resultado do deploy.

## Branches e commits

- Para mudanças isoladas, preferir uma branch de trabalho com prefixo `codex/`, sem apagar ou resetar branches existentes.
- Não usar `git reset --hard`, `git checkout --` ou comandos destrutivos para limpar alterações sem autorização explícita.
- Não misturar correções de conteúdo, mudanças de menu, ajustes de anúncios e alterações de infraestrutura no mesmo commit quando puderem ser separados.
- Nunca considerar um arquivo modificado como publicado apenas porque existe no checkout local.

## Preview e publicação

- O preview local é usado para revisão visual e funcional antes do commit e do deploy.
- A porta ou URL do preview pode variar; registrar a URL usada durante a validação.
- O preview não substitui o commit, e o commit não substitui a validação da publicação.
- Nenhuma alteração em Firebase Hosting, DNS, Search Console, Google Tag Manager, Google Ads ou outro serviço externo deve ser feita como consequência automática de uma alteração local.
- Mudanças externas exigem autorização própria e evidência da leitura ou confirmação no serviço correspondente.

## Conteúdo e segurança

- Não inventar serviços, clientes, normas, resultados, prazos ou escopos que não estejam confirmados.
- Preservar a arquitetura monolítica e as integrações existentes enquanto não houver decisão explícita para alterá-las.
- Não gravar senhas, tokens, chaves privadas ou credenciais no repositório, no backlog ou em arquivos públicos.
- Manter blogs e páginas marcadas como pendência fora da publicação até aprovação específica. A aprovação de 05/11/2026 liberou a publicação do blog e dos cases atuais; novas páginas ou revisões continuam sujeitas à mesma aprovação.

## Registro da conclusão

Ao concluir uma alteração, informar:

- arquivos modificados;
- validações realizadas;
- commit criado, quando houver;
- publicação realizada ou pendente;
- limitações ou pendências restantes.
