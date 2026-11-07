# Guia da Apresentação Interativa: Qualidade de Software e ISO/IEC 9126 (v4 - Completo)

## 1. Visão Geral do Projeto

- **Objetivo**: Apresentação interativa em formato web (Single Page Application - HTML5/CSS3/JavaScript Vanilla) sobre Qualidade de Produto e Métricas de Qualidade baseada na norma ISO/IEC 9126 (Partes 1, 2, 3 e 4) e sua sucessora ISO/IEC 25010 (SQuaRE).
- **Público-Alvo**: Turma de Engenharia de Software do CEULP/ULBRA. O tom é técnico, dinâmico, colaborativo e com forte apelo visual, evitando a leitura passiva de slides carregados de texto.
- **Duração da Apresentação**: 60 minutos (distribuição equilibrada em 5 blocos temáticos + Minigame Interativo "O Tribunal da Qualidade").
- **Design Visual**: Estética moderna voltada para desenvolvedores. Tema escuro baseado na paleta oficial **Nord** (`#2E3440`, `#3B4252`, `#434C5E`, `#D8DEE9`, `#88C0D0`, `#81A1C1`, `#BF616A`, `#A3BE8C`). Tipografia com sans-serif moderna (**Inter**) e monospace (**Fira Code**) para trechos de código, tabelas, logs e métricas.
- **Interatividade Total**: Componentes interativos integrados (votação relâmpago, minigame com placar ao vivo e revelação de vereditos, QR Codes para o Mentimeter, checklist interativo ao vivo com anel de pontuação em tempo real e sorteador aleatório de perguntas para debate com a sala).

---

## 2. Análise e Continuidade Narrativa

A apresentação é organizada em uma linha de raciocínio de 5 blocos lógicos conectados estrategicamente por um minigame prático:

1. **Bloco 1 (Sensibilização & Fundamentação - 12 min / 7 slides • 1 a 7)**: Conecta com uma dor real dos alunos (portal acadêmico fora do ar) e com o caso emblemático do Ariane 5 (US$ 370M). Demonstra por que "qualidade" não pode ser uma opinião subjetiva, introduz a Pirâmide do Modelo de Qualidade, a Cadeia de Causa e Efeito (Processo ➔ Interna ➔ Externa ➔ Uso), a divisão da ISO/IEC 9126 em 4 partes e sua evolução para a ISO/IEC 25010.
2. **Bloco 2 (O Modelo de Qualidade - ISO 9126-1 - 15 min / 4 slides • 8 a 11)**: Disseca em profundidade as 6 características fundamentais em pares complementares (Funcionalidade/Confiabilidade, Usabilidade/Eficiência, Manutenibilidade/Portabilidade) com todas as suas subcaracterísticas, culminando na discussão técnica sobre os **Trade-offs de Qualidade (O Dilema da Engenharia)**.
3. **Minigame: O Tribunal da Qualidade (Gamificação Interativa - 10 min / 6 slides • 12 a 17)**: Dinâmica de competição em tempo real dividindo a sala em duas bancadas: **Lado A (Esquerda)** vs. **Lado B (Direita)**. O tribunal analisa 4 desastres reais de software (CrowdStrike BSOD, SMS Falso do Havaí, Loading infinito do GTA Online e GPS do Michael Scott). Cada rodada exige que a bancada identifique qual característica da ISO 9126 foi violada, pontuando no placar ao vivo antes de passar para as métricas.
4. **Bloco 3 (As Métricas e o Processo de Avaliação - 10 min / 4 slides • 18 a 21)**: Transiciona da teoria para a quantificação. Abre com os 3 estágios da avaliação de qualidade (Requisitos ➔ Limiares ➔ Medição Prática), conectando diretamente com as medições Internas (código estático), Externas (software em execução) e em Uso (ambiente real do cliente).
5. **Bloco 4 (Softwares Auxiliares na Prática - 15 min / 5 slides • 22 a 26)**: Conecta as métricas a ferramentas reais da engenharia: SonarQube (conceito e arquitetura), Relatório Executivo com métricas reais, Slide de Live Demo (PRÁTICA ao vivo), TestLink (árvore de testes e contextualização de ferramenta legada) e Checklist Interativo de Usabilidade ao vivo com a sala.
6. **Bloco 5 (Batalha Prática, Veredito & Debate - 10 min / 4 slides • 27 a 30)**: Batalha interativa comparativa (Chrome vs. Firefox), votação ao vivo com a turma via Mentimeter, cálculo do veredito final segundo os critérios da ISO 9126 e sessão aberta de perguntas e respostas (Q&A) com sorteador de perguntas.

---

## 3. Estrutura Completa de Slides (30 Slides)

### 📌 Mapa Geral da Apresentação

| # | Bloco | Título / Tema | Tipo / Interatividade |
| :---: | :---: | :--- | :--- |
| **01** | B1 | 1.1: Capa (Qualidade de Software) | Capa & Apresentação da equipe |
| **02** | B1 | 1.2: Quebra-Gelo (O Portal Acadêmico Caiu) | Votação relâmpago ao vivo com a sala |
| **03** | B1 | 1.3: O Custo da Falha (Ariane 5 - US$ 370M) | Foto histórica, dados e código Ada-83 |
| **04** | B1 | 1.4: O que é um "Modelo de Qualidade"? | Pirâmide hierárquica em 4 camadas |
| **05** | B1 | 1.5: A Cadeia de Causa e Efeito da Qualidade | Fluxo causal (Processo ➔ Interna ➔ Externa ➔ Uso) |
| **06** | B1 | 1.6: Estrutura da Norma ISO/IEC 9126 | Grid de 4 blocos das partes 1 a 4 |
| **07** | B1 | 1.7: Evolução (Da ISO 9126 para ISO 25010) | Timeline histórica e comparativo SQuaRE |
| **08** | B2 | 2.1: Funcionalidade & Confiabilidade | Card duplo + subcaracterísticas animadas |
| **09** | B2 | 2.2: Usabilidade & Eficiência | Card duplo + ergonomia vs. hardware |
| **10** | B2 | 2.3: Manutenibilidade & Portabilidade | Card duplo + saúde do código vs. infra |
| **11** | B2 | 2.4: Trade-offs de Qualidade (O Dilema da Engenharia) | Grid de 4 conflitos clássicos e síntese técnica |
| **12** | ⚖️ | Minigame: O Tribunal da Qualidade (Abertura) | Divisão Bancada A vs. Bancada B + Placar Hero |
| **13** | ⚖️ | Tribunal: Rodada 1 - O Apagão Azul (CrowdStrike) | Imagem BSOD + Revelação: **Confiabilidade** |
| **14** | ⚖️ | Tribunal: Rodada 2 - O Pânico no Havaí (SMS Míssil) | Imagem SMS + Revelação: **Usabilidade** |
| **15** | ⚖️ | Tribunal: Rodada 3 - O Loading do GTA Online | Vídeo MP4 loop + Revelação: **Eficiência** |
| **16** | ⚖️ | Tribunal: Rodada 4 - O GPS Assassino (The Office) | GIF animado + Revelação: **Funcionalidade** |
| **17** | ⚖️ | Tribunal: Veredito Final das Bancadas | Placar Campeão + Teaser de transição p/ Métricas |
| **18** | B3 | 3.1: O Processo de Avaliação & Visão Geral das Métricas | 3 Estágios ➔ 3 Visões da norma integradas |
| **19** | B3 | 3.2: Métricas Internas (Parte 3) | Análise estática + Complexidade Ciclomática (McCabe) |
| **20** | B3 | 3.3: Métricas Externas (Parte 2) | Análise dinâmica + telemetria sob carga (500 users) |
| **21** | B3 | 3.4: Qualidade em Uso (Parte 4) | Matriz dos 4 atributos (Eficácia, Prod., Seg., Satis.) |
| **22** | B4 | 4.1: O que é o SonarQube? | Conceito, pipeline CI/CD e 4 pilares mapeados |
| **23** | B4 | 4.2: SonarQube (Relatório Executivo & Análise Estática) | Imagem real (`sonarcube_report.png`), KPIs e Quality Gate |
| **24** | B4 | 4.3: PRÁTICA: SonarQube ao vivo | Live Demo com terminal prompt para a equipe |
| **25** | B4 | 4.4: TestLink (Gestão e Execução de Testes) | Imagem real (`testlink.jpeg`), árvore e ferramenta legada |
| **26** | B4 | 4.5: Checklist Interativo de Qualidade em Uso | Widget interativo Sim/Não com anel de nota ao vivo |
| **27** | B5 | 5.1: A Batalha (Chrome vs. Firefox) | Tabela interativa comparativa com revelação passo a passo |
| **28** | B5 | 5.2: Votação Interativa da Turma | Mentimeter, QR Code e console de notas com barras |
| **29** | B5 | 5.3: Conclusão e Veredito Final | Cálculo dinâmico do campeão e 4 lições da norma |
| **30** | B5 | 5.4: Dúvidas e Perguntas (Q&A) | 16 perguntas em 4 abas + Sorteador aleatório |

---

### Detalhamento por Bloco

#### Bloco 1: Introdução e Contextualização (12 min • Slides 1 a 7)

- **Slide 1.1 (Capa & Propósito)**
  - **Objetivo**: Estabelecer o tema de forma impactante e apresentar a equipe.
  - **Conteúdo**: Título *"Qualidade de Software: Muito Além do Código Que Funciona"*. Subtítulo apresentando a norma ISO/IEC 9126 e os créditos da turma do CEULP/ULBRA.
  - **Visual**: Background com orbs gradientes em azul/turquesa Nord, grid overlay sutil, terminal prompt e tag de identificação.

- **Slide 1.2 (Quebra-gelo Interativo: O Portal Acadêmico)**
  - **Objetivo**: Conectar a plateia com o problema prático da falta de qualidade em software sob estresse.
  - **Conteúdo**: Pergunta direta: *"Quem já tentou usar o portal acadêmico às 23:58 no fim do prazo e viu o sistema cair?"*.
  - **Visual & Interatividade**: Mockup de navegador exibindo tela de erro `HTTP 504 Gateway Timeout`, logs de pool esgotado (`HikariPool-1 MaxConnections=150 excedido`) e **botão de votação relâmpago** com contador e barra que sobem ao vivo.

- **Slide 1.3 (O Custo da Falha: O Desastre do Ariane 5)**
  - **Objetivo**: Demonstrar o impacto financeiro e operacional da ausência de gestão rigorosa de qualidade.
  - **Conteúdo**: Estudo de caso do foguete Ariane 5 (04/06/1996) — prejuízo direto de **US$ 370 milhões** por falha de conversão de ponto flutuante em código reutilizado do Ariane 4.
  - **Visual**: Card duplo integrando a **fotografia histórica da explosão** (`Ariane_501_explosion.webp`) com legenda em português, destaque gigante para a cifra de US$ 370M, timeline dos 37 segundos fatais e trecho do código em **Ada-83** simulando a conversão sem proteção de overflow (`Float_64` ➔ `Integer_16`).

- **Slide 1.4 (Conceito: O que é um "Modelo de Qualidade"?)**
  - **Objetivo**: Desmistificar o conceito abstrato de qualidade e mostrar como a norma padroniza a avaliação.
  - **Conteúdo**: O contraste entre percepções cotidianas subjetivas (Dev: *"código limpo"*, Cliente: *"tela bonita"*, Empresa: *"não cair na Black Friday"*) e a solução da norma, que atua como um prisma decompondo o conceito em camadas objetivas.
  - **Visual**: **Pirâmide Hierárquica em 4 Níveis**: *Qualidade Geral ➔ 6 Características ➔ Subcaracterísticas ➔ Métricas Mensuráveis*.

- **Slide 1.5 (A Cadeia de Causa e Efeito da Qualidade)**
  - **Objetivo**: Conectar o processo de desenvolvimento, a saúde do código e a satisfação final do usuário.
  - **Conteúdo**: A relação causal contínua onde a Qualidade do Processo (metodologias, CI/CD) influencia a Qualidade Interna (código limpo), que gera a Qualidade Externa (software estável em runtime) e resulta na Qualidade em Uso (satisfação e eficácia do usuário).
  - **Visual**: Fluxo horizontal contínuo com 4 cartões com ícones e setas com rótulos relacionais (*"influencia"*, *"gera"*, *"garante"*).

- **Slide 1.6 (Estrutura da Norma ISO/IEC 9126)**
  - **Objetivo**: Apresentar a visão geral do padrão internacional e sua divisão em 4 partes.
  - **Conteúdo**: Divisão oficial: Parte 1 (Modelo de Qualidade), Parte 2 (Métricas Externas), Parte 3 (Métricas Internas) e Parte 4 (Qualidade em Uso).
  - **Visual**: Grid moderno de 4 quadrantes com badges das partes, chips de características e focos metodológicos.

- **Slide 1.7 (Evolução Histórica: Da ISO 9126 para a ISO 25010)**
  - **Objetivo**: Contextualizar o legado da ISO 9126 como fundação da família moderna SQuaRE.
  - **Conteúdo**: Linha do tempo de 1991 (1ª edição) ➔ 2001-2004 (4 partes) ➔ 2011-Hoje (ISO/IEC 25010 com 8 características, promovendo Segurança e Compatibilidade a pilares de primeiro nível).
  - **Visual**: Timeline interativa conectada, tabela comparativa e botão de transição para o Bloco 2.

---

#### Bloco 2: ISO/IEC 9126-1 - O Modelo de Qualidade (15 min • Slides 8 a 11)

- **Slide 2.1 (Funcionalidade & Confiabilidade)**
  - **Perguntas-Guia**: *"O sistema faz o que deve? Ele se mantém no ar?"*
  - **Funcionalidade (Característica 01)**: Adequação, Acurácia, Interoperabilidade, Segurança e Conformidade.
  - **Confiabilidade (Característica 02)**: Maturidade, Tolerância a Falhas, Recuperabilidade e Conformidade.
  - **Visual**: Card duplo em grid contrastando as duas características essenciais para operação.

- **Slide 2.2 (Usabilidade & Eficiência)**
  - **Perguntas-Guia**: *"É fácil de usar? Consome muita RAM/CPU ou responde rápido?"*
  - **Usabilidade (Característica 03)**: Inteligibilidade, Apreensibilidade, Operacionalidade, Proteção frente a erros, Estética/Atratividade, Acessibilidade e Conformidade.
  - **Eficiência (Característica 04)**: Comportamento em Relação ao Tempo (latência/throughput), Utilização de Recursos (CPU, RAM, disco) e Conformidade.
  - **Visual**: Card duplo contrastando experiência e ergonomia humana versus consumo de hardware.

- **Slide 2.3 (Manutenibilidade & Portabilidade)**
  - **Perguntas-Guia**: *"O código é limpo para refatoração? Roda em qualquer SO ou infraestrutura?"*
  - **Manutenibilidade (Característica 05)**: Analisabilidade, Modificabilidade, Estabilidade, Testabilidade e Conformidade.
  - **Portabilidade (Característica 06)**: Adaptabilidade, Capacidade de Instalação, Coexistência, Capacidade para Substituir e Conformidade.
  - **Visual**: Card duplo comparando saúde do código interno versus independência de plataforma.

- **Slide 2.4 (O Dilema da Engenharia: Trade-offs de Qualidade)**
  - **Objetivo**: Demonstrar maturidade técnica ao provar que nenhum software atinge excelência em todas as 6 características simultaneamente.
  - **Conteúdo & Conflitos Fundamentais**:
    1. *Segurança vs. Eficiência*: Criptografia pesada (AES-256), hashing e MFA contínuo aumentam latência e uso de CPU (ex.: banco digital prioriza Segurança; game multiplayer prioriza latência ultrabaixa).
    2. *Portabilidade vs. Eficiência*: Camadas de abstração multiplataforma (Electron, Java VM) consomem significativamente mais memória RAM em comparação a binários nativos em C/Rust (ex.: VS Code vs. Vim/Sublime Text).
    3. *Manutenibilidade vs. Velocidade Máxima*: Clean Architecture, injeção de dependência e microsserviços inserem indireções na pilha de chamadas (ex.: sistemas de trading HFT sacrificam abstrações por código procedural em C).
    4. *Usabilidade vs. Confiabilidade/Segurança*: Fluxos "1 clique" sem confirmações aumentam agilidade, mas elevam o risco de erros operacionais irreversíveis do usuário (ex.: deletar banco de dados em produção exige atrito intencional).
  - **Visual**: Grid com 4 cards de conflitos com ícones comparativos e banner de síntese: *"Maturidade de Engenharia: Não existe software perfeito em tudo — projetar com qualidade é estabelecer um Perfil de Requisitos consciente para o propósito do negócio"*.

---

#### Minigame Interativo: O Tribunal da Qualidade (10 min • Slides 12 a 17)

- **Slide 12 (Abertura do Tribunal & Divisão das Bancadas)**
  - **Objetivo**: Engajar a sala ativamente em um julgamento cooperativo/competitivo logo após a fundamentação teórica das 6 características.
  - **Dinâmica**: A sala é dividida em duas grandes bancadas: **Lado A (Esquerda)** vs. **Lado B (Direita)**. O apresentador anuncia que serão apresentados 4 casos reais de desastres computacionais, e a bancada que diagnosticar primeiro qual característica da ISO 9126 foi violada pontua no placar.
  - **Visual & Interatividade**: Placar central "Hero" com pontuação das bancadas, botões de incremento/decremento (+1 / -1) e botão de início para a Rodada 1.

- **Slide 13 (Rodada 1: O "Apagão Azul" - CrowdStrike)**
  - **Mídia**: Fotografia real `assets/images/crowdstrike.webp` (telas azuis BSOD em monitores de aeroportos globais).
  - **Contexto (Apresentador)**: *"Julho deste ano. Uma atualização defeituosa de segurança da CrowdStrike derruba aviões, bancos e hospitais no mundo todo. O sistema recebeu um arquivo com erro, não soube o que fazer, 'entrou em pânico' e derrubou o Windows inteiro."*
  - **A Pergunta (O Desafio)**: *"Valendo ponto: Se o sistema não soube lidar com um erro interno e parou de funcionar completamente, qual característica da ISO 9126 foi ferida?"*
  - **A Resposta Correta**: **Confiabilidade!**
  - **O Veredito**: *"Exato! Faltou Tolerância a falhas e Recuperabilidade. Um bom software deve isolar o erro e continuar operando em modo degradado ou recuperar-se rapidamente, e não causar uma Tela Azul global."*
  - **Visual & Interatividade**: Barra de placar compacto no topo com botões para pontuar a bancada vencedora da rodada e botão de revelação do veredito com animação.

- **Slide 14 (Rodada 2: O Pânico no Havaí - Alarme Falso de Míssil)**
  - **Mídia**: Imagem histórica real `assets/images/fake_missil_havai.webp` (SMS em caixa alta: *"BALLISTIC MISSILE THREAT INBOUND TO HAWAII. THIS IS NOT A DRILL."*).
  - **Contexto (Apresentador)**: *"2018. O Havaí entra em pânico total após receber um SMS de ameaça de míssil balístico. O motivo? O sistema oficial não tinha bug no código, mas o botão de 'Teste' ficava exatamente colado no botão de 'Alerta Real', sem nenhuma tela de confirmação do tipo 'Tem certeza?'."*
  - **A Pergunta (O Desafio)**: *"Valendo ponto: O código funcionou perfeitamente, mas induziu o humano a um erro catastrófico. Que característica a equipe de design ignorou?"*
  - **A Resposta Correta**: **Usabilidade!**
  - **O Veredito**: *"Acertaram! A norma diz que a Usabilidade inclui a Proteção frente a erros de usuário (Operacionalidade). Se o sistema deixa o usuário destruir o mundo com um clique acidental sem confirmação, a culpa é do software, não do usuário."*
  - **Visual & Interatividade**: Mídia histórica de pânico, placar compacto sincronizado e botão de revelação de resposta.

- **Slide 15 (Rodada 3: O "Loading" Eterno do GTA Online)**
  - **Mídia**: Vídeo em loop contínuo `assets/videos/gta_loading_meme.mp4` (`autoplay loop muted playsinline`).
  - **Contexto (Apresentador)**: *"Por anos, os jogadores esperaram 10, às vezes 15 minutos pro GTA Online carregar no PC. Até que um fã fez engenharia reversa e descobriu que o jogo usava um único núcleo do processador para ler o mesmo arquivo de texto (JSON) 1.984.531 vezes em um loop quadrático $O(n^2)$."*
  - **A Pergunta (O Desafio)**: *"Valendo ponto: O jogo não caiu e não deu tela azul. Mas o código desperdiçou o processador e o tempo do usuário à toa. Qual característica foi ferida?"*
  - **A Resposta Correta**: **Eficiência!**
  - **O Veredito**: *"Isso mesmo! A Eficiência avalia o Comportamento em relação ao tempo e a Utilização de Recursos. O desenvolvedor substituiu o loop por uma tabela hash com poucas linhas e reduziu o carregamento em 70% (de 15 min para 1m30s). Código mal otimizado fere diretamente a ISO."*
  - **Visual & Interatividade**: Player de vídeo perfeitamente integrado à interface Nord, placar compacto e revelação do veredito.

- **Slide 16 (Rodada 4: O GPS Assassino - The Office / Michael Scott)**
  - **Mídia**: Imagem animada GIF clássica `assets/images/the-office-gps.gif` (Michael Scott e Dwight acelerando o carro para dentro do lago).
  - **Contexto (Apresentador)**: *"O Michael Scott colocou o endereço, o GPS processou a rota matematicamente de forma perfeita. Só que a base de dados do mapa ignorou que havia um lago ali no meio. O sistema mandou ele virar à direita e afundar o carro."*
  - **A Pergunta (O Desafio)**: *"Valendo o último ponto: O sistema calculou certo, mas entregou um resultado completamente inadequado para o mundo real. Qual característica afundou aqui?"*
  - **A Resposta Correta**: **Funcionalidade!**
  - **O Veredito**: *"Fechou! Faltou Acurácia e Adequação. A funcionalidade só é garantida quando as funções cumprem a necessidade real do usuário de forma correta e válida para o mundo real."*
  - **Visual & Interatividade**: GIF animado clássico com sincronismo imediato, placar compacto e revelação de veredito.

- **Slide 17 (Veredito Final das Bancadas & Transição para Métricas)**
  - **Objetivo**: Encerrar o minigame com a celebração da bancada campeã e criar a ponte lógica definitiva para o Bloco 3.
  - **Conteúdo**: Card dinâmico que avalia a somatória dos pontos (Lado A Campeão, Lado B Campeão ou Empate Técnico), exibe troféu e permite zerar o placar.
  - **Gancho do Apresentador (Teaser)**: *"Agora que a sala já sabe apontar na prática onde cada pilar da ISO foi quebrado... como a engenharia mede e previne esses erros usando métricas numéricas formais? É exatamente isso que vamos desvendar no Bloco 3."*

---

#### Bloco 3: As Métricas de Qualidade - ISO 9126-2, -3 e -4 (10 min • Slides 18 a 21)

- **Slide 3.1 (O Processo de Avaliação & Visão Geral das Métricas)**
  - **Objetivo**: Apresentar o ciclo metodológico de avaliação em 3 estágios e mapear os 3 tipos de métricas.
  - **Conteúdo**:
    1. *Estágio 01 (Planejamento)*: Definição dos Requisitos de Qualidade (priorização e trade-offs).
    2. *Estágio 02 (Preparação)*: Seleção de Métricas & Metas (definição de escalas e limiares de aceitação).
    3. *Estágio 03 (Execução)*: Medição Prática e Decisão (aprovação ou reprovação).
    - Conexão direta com as 3 Partes: Internas (9126-3), Externas (9126-2) e em Uso (9126-4).
  - **Visual**: Painel horizontal de 3 estágios interligados por setas direcionais, seguido de trio de cards com os 3 níveis de medição.

- **Slide 3.2 (Métricas Internas - Parte 3: ISO/IEC 9126-3)**
  - **Objetivo**: Detalhar a medição estática do código-fonte durante a fase de desenvolvimento.
  - **Conteúdo**: Avaliação de modularidade, acoplamento, coesão e complexidade lógica.
  - **Exemplo Prático**: Snippet de código com ifs aninhados e painel de telemetria estática com **Complexidade Ciclomática (McCabe = 18)**, contagem de LOC e profundidade de aninhamento com contadores animados.
  - **Visual**: Card de código com syntax highlight e painel de métricas estáticas com status Ok/Atenção/Crítico.

- **Slide 3.3 (Métricas Externas - Parte 2: ISO/IEC 9126-2)**
  - **Objetivo**: Detalhar a medição dinâmica do software em execução em ambiente de teste ou homologação.
  - **Conteúdo**: Comportamento do sistema sob condições especificadas de estresse e carga.
  - **Exemplo Prático**: Teste de carga com 500 usuários simultâneos, medindo tempo de resposta (820 ms), uso de CPU (64%), uso de memória RAM (1,8 GB) e taxa de erros por requisição (12/1000).
  - **Visual**: Dashboard simulado de telemetria com barras animadas de preenchimento progressivo.

- **Slide 3.4 (Qualidade em Uso - Parte 4: ISO/IEC 9126-4)**
  - **Objetivo**: Apresentar a medição do impacto final do software no ambiente de trabalho do cliente.
  - **4 Atributos Centrais**:
    1. *Eficácia*: Usuários atingem suas metas com precisão e completude.
    2. *Produtividade*: Recursos e tempo gastos em proporção aos resultados obtidos.
    3. *Segurança*: Mitigação de riscos a pessoas, dados ou finanças do negócio.
    4. *Satisfação*: Conforto, aceitação e atratividade na percepção do usuário.
  - **Visual**: Grid de 4 quadrantes numerados com ícones e definições focadas no valor de negócio.

---

#### Bloco 4: Softwares Auxiliares na Prática (15 min • Slides 22 a 26)

- **Slide 4.1 (O que é o SonarQube? Conceito e Pipeline)**
  - **Objetivo**: Apresentar a plataforma de inspeção contínua da qualidade do código.
  - **Conteúdo**:
    - Pipeline de análise: *Código-Fonte ➔ SonarScanner (CI/CD) ➔ Servidor SonarQube ➔ Quality Gate (Pass/Fail)*.
    - Os 4 pilares avaliados mapeados na ISO: **Bugs** (Confiabilidade), **Vulnerabilidades** (Segurança), **Code Smells** (Manutenibilidade/Dívida Técnica) e **Cobertura** (Testabilidade).
  - **Visual**: Pipeline com nós e ícones, seguido de 4 cards descritivos das categorias.

- **Slide 4.2 (SonarQube na Prática: Relatório Executivo)**
  - **Objetivo**: Interpretar um relatório real de auditoria estática e debater o conceito de Quality Gate.
  - **Conteúdo**: Análise de 12.009 linhas de código do projeto WebGoat, destacando 595 Code Smells, 0,8% de Dívida Técnica, 23 Bugs e 42 Vulnerabilidades.
  - **Visual**: Janela simulada com a imagem real `sonarcube_report.png` (com recurso de clique para zoom/lightbox), painel de KPIs e banner de alerta do **Quality Gate: FAILED** (*"Manutenibilidade A, mas Confiabilidade e Segurança E: uma nota boa não compensa falhas críticas"*).

- **Slide 4.3 (PRÁTICA: SonarQube ao Vivo - Live Demo)**
  - **Objetivo**: Slide de transição e anúncio para a demonstração prática da equipe ao vivo.
  - **Conteúdo**: Momento em que os apresentadores abrem o terminal e o navegador para inspecionar um projeto real.
  - **Visual**: Efeito de *glow* radial, prompt de comando piscante `> sonar-scanner --live-demo_` e título monumental **PRÁTICA** com gradiente Nord.

- **Slide 4.4 (TestLink: Gestão e Execução de Testes)**
  - **Objetivo**: Mapear a gestão de testes manuais/funcionais para métricas externas e contextualizar o ciclo de vida de ferramentas.
  - **Conteúdo**: Estruturação de suítes de teste, planos de teste, execução e cálculo de taxa de aprovação (Passed/Failed). Alerta crítico sobre ser uma **ferramenta legada** (sem novas atualizações, substituída no mercado por Xray, Zephyr e TestRail).
  - **Visual**: Árvore de testes simulada com barra de aprovação percentual, acompanhada pela tela real `testlink.jpeg` (com zoomable lightbox) e card de alerta de ferramenta legada.

- **Slide 4.5 (Checklist Interativo de Qualidade em Uso)**
  - **Objetivo**: Engajar a sala em uma avaliação ergonômica ao vivo de um sistema real ou simulado.
  - **Conteúdo**: 6 perguntas práticas cobrindo Inteligibilidade, Apreensibilidade, Operacionalidade, Proteção a erros, Estética e Acessibilidade. O apresentador ou a turma seleciona Sim/Não.
  - **Visual & Interatividade**: Widget interativo com campo editável para o nome do sistema ("Portal Acadêmico"), botões Sim/Não, anel circular de pontuação animado (`conic-gradient`) e veredito gerado em tempo real com base no percentual atingido.

---

#### Bloco 5: Batalha Prática, Veredito & Perguntas (10 min • Slides 27 a 30)

- **Slide 5.1 (A Batalha: Chrome vs. Firefox)**
  - **Objetivo**: Aplicar os 6 critérios da ISO 9126 em um confronto técnico real entre dois navegadores conhecidos.
  - **Conteúdo**: Comparação de Funcionalidade (extensões/DevTools), Confiabilidade (isolamento de processos), Usabilidade (interface/sincronização), Eficiência (motor V8 vs. SpiderMonkey e uso de RAM), Manutenibilidade (Chromium vs. Mozilla) e Portabilidade.
  - **Visual & Interatividade**: Tabela dinâmica de confronto comparativo com logos dos navegadores. O apresentador avança com a tecla <kbd>→</kbd> para **revelar critério por critério** progressivamente, gerando expectativa e debate antes da votação.

- **Slide 5.2 (Votação Interativa da Turma via Mentimeter)**
  - **Objetivo**: Coletar as notas da turma para Eficiência, Funcionalidade e Usabilidade.
  - **Conteúdo**:
    - Orientações de acesso: QR Code para escaneamento no celular, link para `menti.com` e campo de código da sala.
    - Painel de lançamento de notas (0 a 10) para Chrome e Firefox em cada critério com botões <kbd>−</kbd> e <kbd>+</kbd> (passo de 0,5), botão de simulação rápida e barras comparativas coloridas.
  - **Visual**: Layout split com o QR Code à esquerda e o console de controle de notas com barras gradientes à direita.

- **Slide 5.3 (Conclusão e Veredito Final)**
  - **Objetivo**: Declarar o vencedor eleito pela sala e sintetizar os aprendizados finais.
  - **Conteúdo**:
    - Veredito calculado dinamicamente em tempo real (Troféu Chrome, Troféu Firefox ou Empate Técnico) com base na somatória das notas da turma (máx. 30 pontos) e gráfico comparativo de barras.
    - **4 Lições Fundamentais da Norma**: Não há vencedor absoluto (depende do contexto de uso), Meça e não presuma (as 3 visões), Linguagem padronizada e Evolução contínua (rumo à ISO 25010).
  - **Visual**: Card do vencedor em destaque com glow dourado/ciano, comparativo de barras lado a lado e botão de acesso direto para o Q&A.

- **Slide 5.4 (Sessão Aberta de Dúvidas & Perguntas - Q&A)**
  - **Objetivo**: Conduzir o encerramento da apresentação com debate interativo com a turma e com o professor.
  - **Conteúdo**: Banco de **16 perguntas técnicas com respostas formuladas**, divididas em 4 abas:
    1. *Conceitos*: Qualidade de processo vs. produto; A causa raiz do Ariane 5; Validade da ISO 9126 pós-25010; Qualidade além da ausência de bugs.
    2. *Modelo 9126-1*: Funcionalidade vs. Usabilidade; Onde fica a Segurança na norma; O significado de Conformidade; Trade-offs entre características.
    3. *Métricas*: Quando usar métrica interna vs. externa; O limiar da Complexidade Ciclomática (McCabe 18); Métrica interna boa garante aprovação?; Como medir a Satisfação do usuário (SUS/NPS).
    4. *Ferramentas*: O SonarQube substitui testes automatizados?; Por que o Quality Gate falhou com Manutenibilidade A?; Automação no TestLink; O risco crítico de 0% de cobertura.
  - **Visual & Interatividade**: Seletor de abas estilizado, cards retráteis tipo sanfona (accordion) que revelam a resposta ao clique e **botão "🎲 Sortear pergunta"** que abre um modal em tela cheia com revelação controlada para engajar alunos voluntários.

---

## 4. Diretrizes Técnicas e Recursos da Aplicação Web

1. **Arquitetura Single Page Application (SPA)**:
   - Todo o conteúdo dos 30 slides está unificado no arquivo [index.html](file:///home/leonidas/dev/faculdade/apresentacao-iso9126/index.html).
   - Sem recarregamentos de página: transições fluidas por CSS (`transform`, `opacity`), mantendo em memória os votos da turma, placar do tribunal, checklist e cronômetro.
2. **Navegação & Controles**:
   - **Seletor de Blocos no Cabeçalho**: Botões `[B1: Introdução] [B2: Modelo 9126-1] [⚖️ Tribunal] [B3: As Métricas] [B4: Ferramentas] [B5: Batalha & Q&A]` para pular diretamente para qualquer seção com um clique.
   - **Teclado**:
     - <kbd>→</kbd> / <kbd>Espaço</kbd> / <kbd>PageDown</kbd>: Avança o slide ou revela o próximo passo da tabela.
     - <kbd>←</kbd> / <kbd>Backspace</kbd> / <kbd>PageUp</kbd>: Retorna o slide.
     - <kbd>1</kbd> a <kbd>6</kbd>: Pula imediatamente para o início do respectivo bloco (`1: B1`, `2: B2`, `3: Tribunal`, `4: B3`, `5: B4`, `6: B5`).
     - <kbd>F</kbd>: Alterna modo Tela Cheia (Fullscreen).
     - <kbd>T</kbd>: Zera ou reinicia o cronômetro de 60 minutos.
     - <kbd>?</kbd> ou <kbd>H</kbd>: Abre a janela modal com os atalhos.
     - <kbd>Esc</kbd>: Fecha modais e visualizações ampliadas de imagem.
   - **Dispositivos Móveis e Telas Touch**: Suporte nativo a gestos de deslizamento (*swipe*) para a esquerda e para a direita.
3. **Persistência de Dados**:
   - Os placares do Tribunal da Qualidade (`iso9126_tribunal_scores`) e as notas lançadas para Chrome e Firefox (`iso9126_spa_notes`) são salvos no `localStorage`, garantindo que uma atualização acidental do navegador não perca a apuração da turma.
4. **Exibição e Renderização de Mídia Otimizada**:
   - **Sem cortes ou perdas**: Todas as mídias utilizam `object-fit: contain` em containers generosos com proporção adaptável (`clamp(400px, 50vh, 520px)` no minigame e `clamp(290px, 38vh, 390px)` no Ariane 5), garantindo que imagens verticais (como o alerta SMS do Havaí de 984×1750 e o vídeo do GTA Online de 576×1024) sejam exibidas com 100% do seu conteúdo visível, sem cortes no topo ou na base.
   - **Lightbox em Tela Cheia**: Todas as imagens possuem a classe `.zoomable` e podem ser clicadas a qualquer momento para abrir uma visualização ampliada (`95vw` × `95vh`) com fundo escurecido.
   - **Controle de Vídeo Interativo**: O vídeo em loop do GTA Online permite clique direto para pausar ou retomar a reprodução durante a explicação.
