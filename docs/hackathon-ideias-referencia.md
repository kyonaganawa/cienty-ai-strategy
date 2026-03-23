# Cienty Agent Sprint — Ideias de Projetos

Boa tarde pessoal! Como vcs já estão sabendo, vamos realizar um Hackathon da Cienty no dia 20/3. A ideia é que vamos passar o dia desenvolvendo projetos em pequenos grupos multidisciplinares, com muito auxílio de IA.
Os projetos a serem desenvolvidos deverão ser enviados até o dia 18/3 para validação. No dia do Hackathon vamos apresentar a lista de ideias que poderão ser escolhidos pelos times.

## Como propor sua ideia

O banco de projetos do hackathon e construido por todo o time. Voce nao precisa ser tecnico para propor uma ideia — alias, as melhores ideias costumam vir de quem vive o problema no dia a dia.

### O que faz uma boa ideia de hackathon?

- **Resolve um problema real** — algo que voce ou seus colegas enfrentam hoje na Cienty, ou uma dor que voce ouve de clientes
- **Pode virar um prototipo em ~5 horas** — nao precisa ser perfeito, precisa funcionar o suficiente para mostrar o valor
- **Produz uma demo funcional** — algo que da para abrir, clicar, interagir. Nao slides
- **Usa IA como motor** — o hackathon e sobre construir com agentes de IA, entao pense em como IA pode ser o diferencial

### Como descrever sua ideia

Para cada ideia, preencha:

1. **Nome do projeto** — curto e direto
2. **Problema** — qual dor existe hoje? Quem sofre com isso?
3. **Solucao proposta** — o que o prototipo faria? Como a IA entra?
4. **Quem se beneficia** — clientes (farmacias), time interno, ou ambos?
5. **Seu nome** — para darmos credito e podermos tirar duvidas

Nao se preocupe com detalhes tecnicos. Se voce sabe *o que* quer resolver, o squad descobre *como* construir no dia do evento.

---

## 3 Projetos de Referencia

Abaixo, tres exemplos detalhados para inspirar suas proprias ideias. Repare que cada um parte de um problema concreto e propoe algo construivel em um dia.

---

### 1. Radar de Farmacias em Risco de Churn

**Problema**

Hoje, o time de CS descobre que uma farmacia esta insatisfeita ou prestes a sair quando ja e tarde demais — geralmente quando ela para de fazer pedidos ou abre um ticket critico. Nao existe uma forma sistematica de identificar sinais de alerta antes que o churn aconteca.

**Solucao proposta**

Um painel que cruza dados de uso da plataforma (frequencia de pedidos, tickets abertos, tempo desde o ultimo login, variacao no volume de compras) e usa IA para gerar um score de risco por farmacia. Para cada farmacia em risco, a IA sugere uma acao concreta para o CS: ligar, oferecer desconto, agendar visita, etc.

**Como a IA entra**

- Analisa padroes nos dados e identifica combinacoes de sinais que um humano demoraria para cruzar
- Gera recomendacoes de acao em linguagem natural, personalizadas por farmacia
- Pode resumir o historico recente da farmacia para o CS se preparar antes de ligar

**Quem se beneficia:** Time de CS + clientes (farmacias em risco recebem atencao proativa)

**Complexidade:** Media

**Escopo para o hackathon:** Dashboard simples com lista de farmacias ranqueadas por risco, score visual, e 2-3 frases de contexto/recomendacao geradas por IA. Dados podem ser simulados.

---

### 2. Copiloto de Proposta Comercial

**Problema**

O time comercial gasta tempo significativo montando propostas para novas farmacias ou redes. Cada proposta precisa ser personalizada (mix de produtos sugerido, argumentos de venda, comparativos de preco), mas o processo e manual: copiar dados de planilhas, adaptar templates, revisar numeros.

**Solucao proposta**

Uma ferramenta onde o vendedor informa o perfil da farmacia (tamanho, regiao, categorias de interesse) e a IA gera automaticamente um rascunho de proposta comercial. A proposta inclui: mix de produtos sugerido com base em farmacias similares, argumentos de venda personalizados, e projecao de economia.

**Como a IA entra**

- Recebe o perfil da farmacia e busca padroes em dados de clientes existentes
- Gera texto persuasivo adaptado ao segmento (farmacia independente vs. rede, capital vs. interior)
- Monta a proposta em formato apresentavel (HTML ou PDF simples)

**Quem se beneficia:** Time comercial (menos tempo montando propostas) + clientes (propostas mais relevantes)

**Complexidade:** Media

**Escopo para o hackathon:** Formulario simples de input + geracao de proposta em HTML. Foco em 2-3 perfis de farmacia. Dados de referencia podem ser mockados.

---

### 3. Assistente de Analise de Pedidos Anomalos

**Problema**

Pedidos com valores muito acima ou abaixo do padrao, itens incomuns, ou combinacoes estranhas passam despercebidos ate causarem problemas — devolucoes, reclamacoes de farmacias, ou ate suspeita de fraude. Hoje, esse tipo de analise depende de alguem olhar manualmente ou de regras rigidas que geram muitos falsos positivos.

**Solucao proposta**

Um sistema que analisa pedidos em tempo real (ou em batch) e sinaliza anomalias usando IA. Para cada pedido sinalizado, o sistema explica em linguagem natural *por que* considera aquele pedido anomalo e sugere uma acao (confirmar com a farmacia, revisar manualmente, aprovar com ressalva).

**Como a IA entra**

- Compara cada pedido contra o historico da farmacia e de farmacias similares
- Identifica anomalias que regras fixas nao pegariam (ex: farmacia pequena pedindo volume de rede)
- Gera explicacao legivel do motivo da flag, evitando que o operador precise investigar do zero

**Quem se beneficia:** Time de operacoes + clientes (menos erros em pedidos, resolucao mais rapida)

**Complexidade:** Alta

**Escopo para o hackathon:** Feed de pedidos simulados com flags visuais (verde/amarelo/vermelho), painel de detalhes com explicacao da IA, e botoes de acao. Dados mockados, foco na experiencia e na qualidade das explicacoes.

---

## Proximos passos

1. Leia os exemplos acima para se inspirar
2. Pense nas dores que voce ve no seu dia a dia — o que te faz perder tempo? O que seus clientes reclamam?
3. Descreva sua ideia seguindo o formato sugerido
4. Envie pelo formulario ou mande no canal #cienty-agent-sprint

Toda ideia e bem-vinda. Se voce acha que e simples demais, provavelmente e perfeita para um hackathon de 1 dia.
