# Desenvolvimento de Software com IA: Melhores Práticas e Onboarding da Equipe

## Sumário Executivo

Este documento descreve a abordagem da Cienty para desenvolvimento de software assistido por IA, utilizando Claude Code com Opus 4.5 em modo totalmente autônomo. Esta metodologia permite produtividade 5-10x maior mantendo alta qualidade através de análise adversarial.

**Filosofia Central**: Confie em agentes IA autônomos para implementação, use agentes adversariais separados para validação e evitar viés de confirmação.

---

## Índice

1. [Stack Tecnológica & Justificativa](#stack-tecnológica--justificativa)
2. [Fluxo de Desenvolvimento](#fluxo-de-desenvolvimento)
3. [Melhores Práticas](#melhores-práticas)
4. [Análise Adversarial de Código](#análise-adversarial-de-código)
5. [Estratégia de Onboarding](#estratégia-de-onboarding)
6. [Diretrizes & Padrões](#diretrizes--padrões)
7. [Medindo Sucesso](#medindo-sucesso)
8. [Armadilhas Comuns & Soluções](#armadilhas-comuns--soluções)

---

## Stack Tecnológica & Justificativa

### Ferramenta Principal: Claude Code + Opus 4.5

**Por que Claude Code?**
- Integração nativa com terminal
- Consciência completa do contexto do código
- Execução autônoma de tarefas
- Capacidade de edição em múltiplos arquivos
- Integração com Git para commits/PRs
- Extensibilidade via MCP (Model Context Protocol)

**Por que Opus 4.5?**
- Raciocínio superior para decisões arquiteturais complexas
- Melhor em seguir padrões específicos do projeto
- Mais confiável para tarefas autônomas multi-etapas
- Menos alucinações na geração de código
- Melhor compreensão de requisitos implícitos

**Por que Modo Autônomo?**
- **Velocidade**: 5-10x mais rápido que desenvolvimento tradicional
- **Consistência**: Segue padrões consistentemente em todo o código
- **Foco**: Desenvolvedores focam em arquitetura e lógica de negócio, não em boilerplate
- **Iteração**: Prototipagem e refinamento rápidos
- **Contexto**: Agente mantém contexto completo entre sessões

### Ferramenta de Análise Adversarial: Contexto Claude Separado

**Por que Contexto Separado?**
- **Evitar Viés de Confirmação**: Perspectiva fresca no código
- **Encontrar Pontos Cegos**: Agente diferente encontra problemas que o original não viu
- **Foco em Segurança**: Análise dedicada de vulnerabilidades
- **Revisão Objetiva**: Não está investido em defender escolhas de implementação

**Implementação**:
- Nova sessão Claude Code OU conversa separada em Claude.ai
- Fornecer código sem contexto de implementação
- Pedir análise crítica, não validação

---

## Fluxo de Desenvolvimento

### Ciclo de Desenvolvimento Padrão

```
1. FASE DE PLANEJAMENTO (Liderada por Humano)
   ├─ Definir requisitos claramente
   ├─ Identificar restrições arquiteturais
   ├─ Especificar requisitos não-funcionais
   └─ Definir critérios de aceitação

2. IMPLEMENTAÇÃO AUTÔNOMA (Claude Code Opus 4.5)
   ├─ Desenvolvedor fornece tarefa de alto nível
   ├─ Agente planeja abordagem de implementação
   ├─ Agente implementa em múltiplos arquivos
   ├─ Agente escreve testes
   ├─ Agente executa testes e corrige problemas
   └─ Agente faz commit com mensagem descritiva

3. REVISÃO ADVERSARIAL (Contexto Claude Separado)
   ├─ Nova sessão Claude analisa código
   ├─ Scan de vulnerabilidades de segurança
   ├─ Análise de performance
   ├─ Identificação de edge cases
   └─ Gera sugestões de melhoria

4. REFINAMENTO (Claude Code Opus 4.5)
   ├─ Endereçar problemas críticos da revisão
   ├─ Implementar melhorias
   └─ Re-executar testes

5. VALIDAÇÃO HUMANA (Desenvolvedor)
   ├─ Revisar descobertas da análise adversarial
   ├─ Verificar lógica de negócio crítica
   ├─ Aprovar para merge/deploy
   └─ Aprender com decisões do agente para tarefas futuras
```

### Exemplo: Sessão de Desenvolvimento Real

**Tarefa**: "Implementar endpoint de histórico de pedidos do cliente com paginação, filtro por range de datas e status, incluir itens do pedido, e escrever testes abrangentes"

**Passo 1 - Planejamento (2 min)**
```
Desenvolvedor → Claude Code:
"Construir endpoint de histórico de pedidos. Requisitos:
- GET /api/customers/:id/orders
- Paginação (page, limit)
- Filtrar por range de datas (start_date, end_date)
- Filtrar por status (pending, confirmed, shipped, delivered)
- Incluir itens do pedido com detalhes do produto
- Retornar contagem total para paginação
- Escrever testes unitários e de integração
- Seguir nossos padrões de API existentes
- Usar TypeScript com tipos adequados"
```

**Passo 2 - Implementação Autônoma (15 min)**
```
Claude Code executa:
1. Analisa padrões de API existentes no código
2. Cria route handler: src/routes/customers.ts
3. Cria camada de serviço: src/services/orderHistory.ts
4. Cria repositório: src/repositories/orders.ts
5. Adiciona definições TypeScript: src/types/orders.ts
6. Escreve middleware de validação
7. Cria testes abrangentes: src/tests/orderHistory.test.ts
8. Executa testes, corrige problemas
9. Atualiza documentação da API
10. Faz commit com mensagem detalhada
```

**Passo 3 - Revisão Adversarial (5 min)**
```
Desenvolvedor → Nova Sessão Claude:
"Revise este código para vulnerabilidades de segurança, problemas de
performance e edge cases. Seja crítico e adversarial."

[Cola: route handler, service, repository, types]

Claude (Adversarial) identifica:
- Risco de SQL injection na construção de filtro de datas
- Problema de N+1 query ao carregar itens do pedido
- Validação de input faltando para page/limit
- Falta consideração de rate limiting
- Edge case: produtos deletados em itens do pedido
- Performance: falta índice em order_date + customer_id
```

**Passo 4 - Refinamento (10 min)**
```
Desenvolvedor → Claude Code (sessão original):
"Revisão adversarial encontrou estes problemas:
[Cola descobertas]

Corrija todos os problemas críticos e de alta severidade."

Claude Code:
- Usa queries parametrizadas para filtros de data
- Implementa eager loading para itens do pedido
- Adiciona validação Zod para parâmetros de paginação
- Documenta requisitos de rate limiting
- Trata produtos deletados graciosamente
- Adiciona migração de banco para índice composto
```

**Passo 5 - Validação Humana (3 min)**
```
Desenvolvedor revisa:
- Descobertas adversariais foram endereçadas ✓
- Testes passam ✓
- Segue padrões do projeto ✓
- Lógica de negócio está correta ✓
→ Aprovar e fazer merge
```

**Tempo Total**: ~35 minutos (vs 3-4 horas desenvolvimento tradicional)

---

## Melhores Práticas

### 1. Especificação de Tarefas

**Boa Especificação de Tarefa:**
```
"Implementar autenticação de usuário com tokens JWT.

Requisitos:
- POST /auth/login (email, password)
- POST /auth/register (email, password, name)
- POST /auth/refresh (refresh_token)
- Hash de senha com bcrypt (cost factor 12)
- Expiração do access token: 15 minutos
- Expiração do refresh token: 7 dias
- Armazenar refresh tokens no banco de dados
- Incluir role do usuário no payload JWT
- Rate limiting: 5 tentativas de login por 15 minutos por IP
- Escrever testes cobrindo casos de sucesso e falha
- Seguir nossos padrões de tratamento de erros existentes"
```

**Má Especificação de Tarefa:**
```
"Adicionar funcionalidade de login"
```

**Melhores Práticas:**
- Seja específico sobre inputs, outputs, edge cases
- Referencie padrões existentes ("seguir nossos existentes...")
- Inclua requisitos não-funcionais (performance, segurança)
- Especifique expectativas de cobertura de testes
- Forneça critérios de aceitação

### 2. Uso de Agente Autônomo

**Deixe o Agente Dirigir:**
```
✅ "Implementar um sistema completo de gerenciamento de pedidos com operações
    CRUD, validação e testes. Seguir melhores práticas REST."

❌ "Criar arquivo orders.ts"
❌ "Adicionar esta função em orders.ts: [colar código]"
```

**Dê Contexto, Não Instruções:**
```
✅ "Nossa arquitetura atual usa padrão service layer + repository.
    Adicionar funcionalidade de cancelamento de pedido seguindo esses padrões."

❌ "Escrever uma função chamada cancelOrder que recebe orderId e..."
```

**Confie nas Decisões do Agente:**
- Deixe escolher estrutura de arquivos
- Deixe decidir detalhes de implementação
- Deixe escrever testes do seu jeito
- Revise resultados, não processo

### 3. Refinamento Iterativo

**Abordagem Multi-Passo:**

**Passo 1: Amplitude**
```
"Construir um dashboard básico de analytics mostrando:
- Receita total (últimos 30 dias)
- Top 5 produtos
- Novos clientes este mês

Usar dados mock por enquanto, focar em UI/UX."
```

**Passo 2: Profundidade**
```
"Conectar o dashboard de analytics a dados reais do BigQuery.
Usar o schema do data warehouse existente.
Adicionar cache com TTL de 5 minutos."
```

**Passo 3: Polimento**
```
"Adicionar loading states, error handling e empty states ao dashboard.
Implementar atualizações em tempo real com polling a cada 60 segundos."
```

---

## Análise Adversarial de Código

### Por que Análise Adversarial?

**Problema**: O mesmo agente que escreveu o código vai defender suas escolhas (viés de confirmação)

**Solução**: Usar agente novo com mindset adversarial

### Processo de Análise Adversarial

#### Passo 1: Extrair Código para Revisão

Extraia o seguinte para análise:
- Arquivos alterados/novos
- Testes relacionados
- Configuração relevante
- Dependências adicionadas

**NÃO inclua:**
- Descrição original da tarefa
- Raciocínio de implementação
- Iterações anteriores

#### Passo 2: Template de Prompt Adversarial

```
Você é um revisor sênior de segurança e qualidade de código com mindset adversarial.
Seu trabalho é encontrar problemas, não validar código.

Analise o seguinte código criticamente:

[COLAR CÓDIGO]

Revisar para:

1. VULNERABILIDADES DE SEGURANÇA
   - SQL injection, XSS, CSRF
   - Bypasses de autenticação/autorização
   - Riscos de exposição de dados
   - Gaps de validação de input
   - Secrets no código

2. PROBLEMAS DE PERFORMANCE
   - N+1 queries
   - Índices faltando
   - Memory leaks
   - Algoritmos ineficientes
   - Computações desnecessárias

3. EDGE CASES & BUGS
   - Tratamento de null/undefined
   - Condições de boundary
   - Race conditions
   - Gaps de error handling
   - Transições de estado inválidas

4. QUALIDADE DE CÓDIGO
   - Hotspots de complexidade
   - Acoplamento forte
   - Error handling faltando
   - Padrões inconsistentes
   - Testes faltando

5. PREOCUPAÇÕES DE ESCALABILIDADE
   - Exaustão de recursos
   - Crescimento ilimitado
   - Pontos únicos de falha
   - Gargalos

Seja específico com números de linha. Priorize descobertas como:
- CRITICAL: Vulnerabilidades de segurança, riscos de perda de dados
- HIGH: Bugs, problemas de performance
- MEDIUM: Qualidade de código, manutenibilidade
- LOW: Melhorias menores, estilo

NÃO apenas diga "parece bom" - encontre problemas reais.
```

#### Passo 3: Triagem de Severidade

**CRITICAL** → Corrigir imediatamente, bloquear deployment
- SQL injection, bypasses de auth
- Cenários de perda de dados
- Vulnerabilidades de segurança

**HIGH** → Corrigir antes do merge
- Problemas de performance afetando UX
- Bugs em funcionalidade core
- Validação faltando

**MEDIUM** → Corrigir no mesmo PR ou próximo sprint
- Problemas de qualidade de código
- Bugs menores
- Oportunidades de refatoração

**LOW** → Backlog
- Inconsistências de estilo
- Otimizações menores
- Melhorias de documentação

---

## Estratégia de Onboarding

### Fase 1: Fundação (Semana 1)

#### Dia 1-2: Setup & Introdução

**Manhã: Instalação de Ferramentas**
- Instalar Claude Code CLI
- Configurar chaves de API (acesso Opus 4.5)
- Configurar workspace e verificar instalação
- Conectar aos repositórios do projeto

**Tarde: Primeiras Tarefas**
```
Tarefas para iniciantes construir confiança:

1. "Adicionar um novo endpoint de API: GET /health
   Retorna { status: 'ok', timestamp: current_time }
   Escrever um teste para ele."

2. "Criar definição de tipo User com campos:
   id, email, name, createdAt, updatedAt"

3. "Escrever função utilitária que formata telefones brasileiros
   Input: '11999887766'
   Output: '(11) 99988-7766'
   Incluir testes para edge cases."
```

**Noite: Reflexão**
- O que te surpreendeu sobre o modo autônomo?
- O que o agente fez diferente do que você esperava?
- Que perguntas você tem?

#### Dia 3-4: Tarefas Intermediárias

**Tarefas Complexas Multi-Arquivo**
```
1. "Implementar middleware de logging para Express
   - Logar método, path, duração da requisição
   - Incluir request ID
   - Escrever para Winston logger
   - Adicionar testes"

2. "Criar migração de banco para tabela 'products'
   - Campos: id, name, description, price, stock, created_at
   - Adicionar índices apropriados
   - Escrever migrações up e down"

3. "Construir serviço simples de email
   - Função para enviar email via SendGrid
   - Suportar HTML e texto puro
   - Sistema de template para emails comuns
   - Mock para testes"
```

**Primeira Revisão Adversarial**
- Escolha uma de suas implementações
- Use template de prompt adversarial
- Compare descobertas com seu código original
- Corrija problemas identificados

#### Dia 5: Feature Real

**Feature End-to-End**
```
"Construir fluxo de reset de senha:
1. POST /auth/forgot-password (envia email de reset)
2. POST /auth/reset-password (verifica token, atualiza senha)
3. Tokens de reset expiram em 1 hora
4. Enviar email com link de reset
5. Escrever testes abrangentes
6. Adicionar rate limiting (3 requisições por hora por email)"

Requisitos:
- Implementação totalmente autônoma
- Revisão adversarial
- Validação humana da lógica de negócio
```

### Fase 2: Maestria (Semana 2-3)

#### Padrões Avançados

**Semana 2: Tarefas de Arquitetura**
```
1. "Refatorar nosso sistema de autenticação para usar refresh tokens
   - Manter compatibilidade retroativa
   - Migrar sessões existentes
   - Deploy sem downtime"

2. "Implementar camada de cache para catálogo de produtos
   - Baseado em Redis
   - TTL: 5 minutos
   - Invalidação de cache em updates
   - Fallback para database em cache miss"

3. "Adicionar busca full-text ao catálogo de produtos
   - Usar full-text search do PostgreSQL
   - Suportar idioma português
   - Ranking por relevância
   - Sugestões de autocomplete"
```

**Semana 3: Performance & Escala**
```
1. "Otimizar endpoint de histórico de pedidos
   - Atual: N+1 queries carregando itens de pedido
   - Adicionar eager loading
   - Implementar cache de resultados de query
   - Adicionar paginação baseada em cursor (não offset)"

2. "Implementar processamento de jobs em background
   - Usar fila Bull com Redis
   - Job: Enviar email de confirmação de pedido
   - Lógica de retry (backoff exponencial)
   - Dead letter queue para jobs falhados"
```

### Fase 3: Expertise (Semana 4+)

#### Trabalho Real de Produção

**Desenvolvimento Autônomo de Features**
- Propriedade completa da implementação de feature
- Intervenção humana mínima
- Revisão adversarial como prática padrão
- Ship para produção com confiança

**Mentorar Outros**
- Ajudar novos desenvolvedores com prompting efetivo
- Compartilhar padrões que funcionam
- Revisar análises adversariais
- Construir base de conhecimento da equipe

---

## Medindo Sucesso

### Métricas de Produtividade do Desenvolvedor

**Métricas de Velocidade:**
- **Story Points por Sprint**: Rastrear antes/depois da adoção de IA
- **Features Entregues por Mês**: Medir aumento de throughput
- **Tempo até Primeiro PR**: Da atribuição de tarefa até PR pronto
- **Linhas de Código por Hora**: Proxy aproximado (não definitivo)

**Melhorias Alvo:**
- Aumento de 3-5x em story points entregues
- Redução de 50-70% no tempo até primeiro PR
- Mais tempo gasto em arquitetura vs implementação

**Métricas de Qualidade:**
- **Densidade de Bugs**: Bugs por 1000 linhas de código
- **Cobertura de Testes**: % de código coberto por testes
- **Tempo de Code Review**: Tempo de PR até aprovação
- **Incidentes em Produção**: Relacionados a código escrito por IA

**Qualidade Alvo:**
- Manter ou melhorar densidade de bugs
- >80% cobertura de testes em código novo
- Code reviews mais rápidos (menos para revisar)
- Sem aumento em incidentes de produção

### ROI

**Economia de Custos:**
```
Horas Economizadas = (Tempo Desenvolvimento Tradicional - Tempo com IA) × Quantidade de Devs

Exemplo:
- Feature: Sistema de gerenciamento de pedidos
- Tradicional: 2 semanas (80 horas)
- Com IA: 3 dias (24 horas)
- Economia: 56 horas por desenvolvedor

Com 5 desenvolvedores:
- Economia anual: 56 × 5 × 20 features = 5,600 horas
- A R$ 150/hora = R$ 840,000 economizados por ano
```

**Custos:**
```
Custos Anuais de IA:
- Claude API (Opus 4.5): ~$200/mês/desenvolvedor
- 5 desenvolvedores × $200 × 12 = $12,000/ano

ROI = (R$ 840,000 - R$ 60,000) / R$ 60,000 = 1,300% ROI
```

---

## Recursos & Templates

### Biblioteca de Prompts

**Criar CRUD API:**
```
Construir API CRUD completa para [RECURSO].

Endpoints:
- GET /api/[recurso] - Listar com paginação, filtros
- GET /api/[recurso]/:id - Obter item único
- POST /api/[recurso] - Criar novo
- PUT /api/[recurso]/:id - Atualizar
- DELETE /api/[recurso]/:id - Deletar

Requisitos:
- Validação de input com Zod
- Error handling
- Testes (unit + integration)
- Tipos TypeScript
- Seguir nossos padrões de REST API
- Rate limiting: 100 req/min por usuário
```

**Adicionar Feature a Sistema Existente:**
```
Adicionar [FEATURE] ao nosso [SISTEMA].

Contexto:
- Implementação atual: [descrição]
- Padrões existentes: [padrões]
- Tech stack: [stack]

Requisitos:
- Manter compatibilidade retroativa
- Seguir estilo de código existente
- Adicionar testes abrangentes
- Atualizar documentação relevante
```

---

## Melhores Práticas da Comunidade & Técnicas Avançadas

Esta seção compila práticas comprovadas da comunidade Claude Code e orientações oficiais de engenharia da Anthropic.

### Recursos Essenciais do Claude Code

#### 1. CLAUDE.md - Arquivo de Contexto do Projeto

**O que é**: Arquivo especial que Claude lê automaticamente ao iniciar qualquer conversa no seu projeto.

**Melhores Usos** ([Fonte](https://www.anthropic.com/engineering/claude-code-best-practices)):
- Etiqueta do repositório (nomenclatura de branches, preferências merge vs rebase)
- Instruções de setup do ambiente
- Problemas conhecidos e workarounds
- Decisões arquiteturais e padrões
- Tech stack e dependências
- Preferências de estilo de código

**Exemplo CLAUDE.md:**
```markdown
# Diretrizes de Desenvolvimento Cienty

## Tech Stack
- Backend: FastAPI (Python 3.11+)
- Database: PostgreSQL 15 com pgvector
- Frontend: React + TypeScript + Vite
- Testes: Pytest, Jest

## Padrões
- Service layer + Repository pattern
- REST API com documentação OpenAPI
- Zod para validação
- Autenticação JWT

## Estratégia de Branches
- Feature branches: feature/descrição
- Sempre rebase, nunca merge
- Squash commits antes do PR

## Problemas Conhecidos
- Connection pooling do database: máx 20 conexões
- TTL do cache Redis: 5 minutos padrão
- Rate limiting: 100 req/min por usuário
```

#### 2. claude-progress.txt - Rastreamento de Estado da Sessão

**Propósito**: Ajudar agentes a entender rapidamente o estado do trabalho ao iniciar com nova janela de contexto.

**Implementação** ([Fonte](https://www.anthropic.com/engineering/claude-code-best-practices)):
```
# Rastreamento de Progresso

## Última Sessão (2026-01-05 14:30)
- Implementado endpoint de histórico de pedidos
- Adicionado paginação e filtros
- Testes passando
- Pronto para revisão adversarial

## Foco Atual
- Aguardando feedback da revisão adversarial
- Próximo: Adicionar camada de cache

## Bloqueios
- Nenhum

## Contexto
- Trabalhando em Phase 4.3 BigQuery Analytics Agent
- Seguindo padrões dos endpoints de API existentes
```

#### 3. Comando /init - Setup do Projeto

**Uso** ([Fonte](https://skywork.ai/blog/claude-code-2-0-best-practices-ai-coding-workflow-2025/)):
```bash
# Inicializar novo projeto com Claude
/init

# Claude irá:
# 1. Analisar estrutura do código
# 2. Documentar tech stack
# 3. Definir padrões de código
# 4. Criar template CLAUDE.md
# 5. Estabelecer regras de engajamento
```

#### 4. Comandos Customizados - Prompts Reutilizáveis

**Setup** ([Fonte](https://skywork.ai/blog/claude-code-2-0-best-practices-ai-coding-workflow-2025)):
- Guardar templates de prompt na pasta `.claude/commands/`
- Cada arquivo vira um comando slash
- Fazer commit no git para compartilhar com equipe

**Uso**: `/api-endpoint` no Claude Code

### Fluxo de Planejamento & Execução

#### Padrão Research → Plan → Execute

**Descoberta Crítica** ([Fonte](https://www.anthropic.com/engineering/claude-code-best-practices)):

> "Etapas envolvendo pesquisa e planejamento são cruciais—sem elas, Claude tende a pular direto para codificação. Pedir ao Claude para pesquisar e planejar primeiro melhora significativamente a performance em problemas que requerem pensamento mais profundo."

**Implementação:**
```
Desenvolvedor: "Preciso adicionar notificações em tempo real ao app.
Primeiro, pesquise nossa arquitetura atual e planeje a implementação.
NÃO escreva código até eu aprovar o plano."

Claude: [Pesquisa codebase]
"Baseado na minha pesquisa, aqui está o plano:
1. Estado atual: Sem infraestrutura real-time
2. Proposta: Redis pub/sub + Socket.io
3. Mudanças necessárias:
   - Adicionar servidor Socket.io
   - Criar serviço de notificação
   - Atualizar frontend para ouvir
4. Esforço estimado: 2-3 horas
5. Riscos: Precisa instância Redis, handling de conexões

Devo proceder?"

Desenvolvedor: "Aprovado, implemente."
```

#### Metodologia de Desenvolvimento em 4 Fases

**Padrão** ([Fonte](https://sankalp.bearblog.dev/my-experience-with-claude-code-20-and-how-to-get-better-at-using-coding-agents/)):

```
Fase 1: PESQUISA (Nunca exceder 60% de contexto)
- Entender código existente
- Identificar padrões
- Encontrar dependências
- Documentar descobertas

Fase 2: PLANEJAR
- Projetar abordagem
- Listar arquivos a modificar
- Identificar riscos
- Obter aprovação humana

Fase 3: IMPLEMENTAR
- Escrever código
- Seguir plano
- Escrever testes
- Auto-validar

Fase 4: VALIDAR
- Rodar testes
- Checar integração
- Documentar mudanças
- Preparar para revisão
```

**Gestão de Contexto** ([Fonte](https://sankalp.bearblog.dev/my-experience-with-claude-code-20-and-how-to-get-better-at-using-coding-agents/)):
- Nunca exceder 60% de uso de contexto
- Usar `/clear` entre fases
- Dividir tarefas grandes em múltiplas sessões
- Documentar progresso em claude-progress.txt

### Controle de Profundidade de Pensamento

**Sintaxe** ([Fonte](https://sankalp.bearblog.dev/my-experience-with-claude-code-20-and-how-to-get-better-at-using-coding-agents/)):

```
think          < Raciocínio básico
think hard     < Análise mais profunda
think harder   < Resolução de problemas complexos
ultra think    < Profundidade máxima de raciocínio
```

**Trade-off**: Mais pensamento = mais tokens = custo maior

### Sub-Agentes e Fluxos Paralelos

#### Criando Sub-Agentes Especializados

**Propósito** ([Fonte](https://www.pubnub.com/blog/best-practices-for-claude-code-sub-agents/)):
- Executar tarefas específicas e bem definidas
- Operar com prompts de sistema distintos
- Ter permissões de ferramentas curadas
- Manter janelas de contexto isoladas

**Setup:**
```bash
# Abrir modo de agentes
/agents

# Pedir ao Claude para criar sub-agente
"Criar um sub-agente chamado 'security-reviewer' que especializa em
encontrar vulnerabilidades de segurança. Deve revisar código com mindset
adversarial e marcar problemas por severidade."
```

**Papéis de Sub-Agentes** ([Fonte](https://www.pubnub.com/blog/best-practices-for-claude-code-sub-agents/)):
- **Product Spec**: Coleta de requisitos e documentação
- **Architect**: Design de sistema e decisões técnicas
- **Implementer**: Escrita de código e testes
- **Tester**: Garantia de qualidade e edge cases
- **Reviewer**: Análise de segurança e performance

### Estratégias de Revisão de Código

#### Padrão de Revisão Multi-Modelo

**Estratégia** ([Fonte](https://sankalp.bearblog.dev/my-experience-with-claude-code-20-and-how-to-get-better-at-using-coding-agents/)):

```
Claude (Opus 4.5): Implementação e execução
GPT-4/o-series: Revisão, busca de bugs, avaliação de severidade
```

**Justificativa**: Modelos diferentes têm forças diferentes. Usar modelo separado para revisão fornece perspectiva adicional.

#### Comando /review

**Uso** ([Fonte](https://sankalp.bearblog.dev/my-experience-with-claude-code-20-and-how-to-get-better-at-using-coding-agents/)):

```bash
# Comando de revisão integrado
/review

# Claude analisa código e reporta:
# - P1 (Critical): Problemas de segurança, riscos de perda de dados
# - P2 (High): Problemas de performance, bugs
# - P3 (Medium): Problemas de qualidade de código
# - P4 (Low): Melhorias menores
```

#### Comando /coach - Revisão Adversarial

**Padrão Avançado** ([Fonte](https://github.com/agentic-insights/foundry)):

```bash
# Revisão independente de implementação
/coach

# Características:
# - Contexto fresco (sem viés de implementação)
# - Baseado em pesquisa g3 dialectical autocoding da Block
# - Captura auth/error handling faltando
# - Mindset adversarial
```

### Recursos da Comunidade

#### Recursos Oficiais da Anthropic

- [Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices) - Guia oficial de engenharia
- [Building Agents with Claude Agent SDK](https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk) - Documentação do SDK
- [DeepLearning.AI Course](https://www.deeplearning.ai/short-courses/claude-code-a-highly-agentic-coding-assistant/) - Curso gratuito sobre coding agentic

#### Guias da Comunidade

- [sankalp's Claude Code 2.0 Guide](https://sankalp.bearblog.dev/my-experience-with-claude-code-20-and-how-to-get-better-at-using-coding-agents/) - Workflow real e dicas
- [Vladimir Siedykh's Production Guide](https://vladimirsiedykh.com/blog/ai-development-workflow-claude-code-production-complete-guide-2025) - Workflow completo de desenvolvimento
- [Armin Ronacher's Agentic Coding Recommendations](https://lucumr.pocoo.org/2025/6/12/agentic-coding/) - Filosofia e padrões

### Cartão de Referência Rápida

```
COMANDOS ESSENCIAIS:
/init           - Inicializar documentação do projeto
/review         - Revisão de código com ratings de severidade
/coach          - Revisão adversarial (contexto fresco)
/agents         - Abrir modo de agentes para sub-agentes
/clear          - Limpar janela de contexto
/resume         - Retomar conversa anterior

PLANEJAMENTO:
1. Pesquisar primeiro, codificar depois
2. Obter aprovação do plano antes da implementação
3. Nunca exceder 60% de contexto
4. Usar claude-progress.txt para estado da sessão

MELHORES PRÁTICAS:
✓ Criar CLAUDE.md na raiz do projeto
✓ Usar workflow de 4 fases (Research → Plan → Implement → Validate)
✓ Controlar profundidade de pensamento (think, think hard, think harder)
✓ Guardar prompts em .claude/commands/
✓ Dividir trabalho entre sub-agentes para execução paralela
✓ Usar /review ou modelo separado para revisão de código
✓ Ser explícito sobre TDD para evitar mocks
✓ Limpar contexto entre fases principais

ANTI-PADRÕES:
✗ Pular direto para código sem planejamento
✗ Exceder 60% da janela de contexto
✗ Não usar CLAUDE.md para padrões do projeto
✗ Revisar código no mesmo contexto da implementação
✗ Especificações vagas de tarefas
✗ Ignorar sugestões arquiteturais do agente
```

---

**Versão do Documento**: 1.1
**Data**: 5 de Janeiro de 2026
**Autor**: Equipe de Engenharia Cienty
**Próxima Revisão**: Março 2026
**Fontes da Comunidade**: Ver links nas seções acima

---

**Lembre-se**: O objetivo é mover rápido e construir software excelente. Agentes IA são ferramentas para amplificar suas habilidades, não substituir seu julgamento. Use-os sabiamente, revise criticamente, e sempre priorize entregar valor aos clientes.
