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
3. **Minigame: O Tribunal da Qualidade (Gamificação Interativa - 10 min / 7 slides • 12 a 18)**: Dinâmica de competição em tempo real entre os **5 Grupos concorrentes da turma (Grupo 2 ao Grupo 6)** atuando como bancadas de acusação técnica, mediada pelo Grupo 1 na bancada de juízes. O tribunal analisa 5 casos reais ou icônicos de software (CrowdStrike BSOD, SMS Falso do Havaí, Loading infinito do GTA Online, GPS do Michael Scott e o Vírus do Independence Day). Cada rodada desafia os grupos a diagnosticar qual característica da ISO 9126 foi violada, pontuando no placar quíntuplo ao vivo antes de passar para as métricas.
4. **Bloco 3 (As Métricas e o Processo de Avaliação - 10 min / 4 slides • 19 a 22)**: Transiciona da teoria para a quantificação. Abre com os 3 estágios da avaliação de qualidade (Requisitos ➔ Limiares ➔ Medição Prática), conectando diretamente com as medições Internas (código estático), Externas (software em execução) e em Uso (ambiente real do cliente).
5. **Bloco 4 (Softwares Auxiliares na Prática - 15 min / 5 slides • 23 a 27)**: Conecta as métricas a ferramentas reais da engenharia: SonarQube (conceito e arquitetura), Relatório Executivo com métricas reais, Slide de Live Demo (PRÁTICA ao vivo), TestLink (árvore de testes e contextualização de ferramenta legada) e Checklist Interativo de Usabilidade ao vivo com a sala.
6. **Bloco 5 (Batalha Prática, Veredito & Debate - 10 min / 4 slides • 28 a 31)**: Batalha interativa comparativa (Chrome vs. Firefox), votação ao vivo com a turma via Mentimeter, cálculo do veredito final segundo os critérios da ISO 9126 e sessão aberta de perguntas e respostas (Q&A) com sorteador de perguntas.

---

## 3. Estrutura Completa de Slides (30 Slides)

### 📌 Mapa Geral da Apresentação

| # | Bloco | Título / Tema | Tipo / Interatividade |
| :---: | :---: | :--- | :--- |
| **01** | B1 | 1.1: Capa (Qualidade de Software) | Capa & Apresentação da equipe |
| **02** | B1 | 1.2: Sensibilização (O Portal Acadêmico) | Mockup HTTP 504 + Ponte reflexiva p/ o Ariane 5 |
| **03** | B1 | 1.3: O Custo da Falha (Ariane 5 - US$ 370M) | Foto histórica, dados e código Ada-83 |
| **04** | B1 | 1.4: O que é um "Modelo de Qualidade"? | Pirâmide hierárquica em 4 camadas |
| **05** | B1 | 1.5: A Cadeia de Causa e Efeito da Qualidade | Fluxo causal (Processo ➔ Interna ➔ Externa ➔ Uso) |
| **06** | B1 | 1.6: Estrutura da Norma ISO/IEC 9126 | Grid de 4 blocos das partes 1 a 4 |
| **07** | B1 | 1.7: Evolução (Da ISO 9126 para ISO 25010) | Timeline histórica e comparativo SQuaRE |
| **08** | B2 | 2.1: Funcionalidade & Confiabilidade | Card duplo + subcaracterísticas animadas |
| **09** | B2 | 2.2: Usabilidade & Eficiência | Card duplo + ergonomia vs. hardware |
| **10** | B2 | 2.3: Manutenibilidade & Portabilidade | Card duplo + saúde do código vs. infra |
| **11** | B2 | 2.4: Trade-offs de Qualidade (O Dilema da Engenharia) | Grid de 4 conflitos clássicos e síntese técnica |
| **12** | ⚖️ | Minigame: O Tribunal da Qualidade (Abertura) | Abertura com os 5 Grupos (Grupos 2 a 6) + Placar Hero Quíntuplo |
| **13** | ⚖️ | Tribunal: Rodada 1 - O Apagão Azul (CrowdStrike) | Imagem BSOD + Revelação: **Confiabilidade** |
| **14** | ⚖️ | Tribunal: Rodada 2 - O Pânico no Havaí (SMS Míssil) | Imagem SMS + Revelação: **Usabilidade** |
| **15** | ⚖️ | Tribunal: Rodada 3 - O Loading do GTA Online | Vídeo MP4 loop + Revelação: **Eficiência** |
| **16** | ⚖️ | Tribunal: Rodada 4 - O GPS Assassino (The Office) | GIF animado + Revelação: **Funcionalidade** |
| **17** | ⚖️ | Tribunal: Rodada 5 - O Vírus do Independence Day | Imagem + Revelação: **Portabilidade** |
| **18** | ⚖️ | Tribunal: Veredito Final das Bancadas | Pódio & Leaderboard dos 5 Grupos + Teaser p/ Métricas |
| **19** | B3 | 3.1: O Processo de Avaliação & Visão Geral das Métricas | 3 Estágios ➔ 3 Visões da norma integradas |
| **20** | B3 | 3.2: Métricas Internas (Parte 3) | Análise estática + Complexidade Ciclomática (McCabe) |
| **21** | B3 | 3.3: Métricas Externas (Parte 2) | Análise dinâmica + telemetria sob carga (500 users) |
| **22** | B3 | 3.4: Qualidade em Uso (Parte 4) | Matriz dos 4 atributos (Eficácia, Prod., Seg., Satis.) |
| **23** | B4 | 4.1: O que é o SonarQube? | Conceito, pipeline CI/CD e 4 pilares mapeados |
| **24** | B4 | 4.2: SonarQube (Relatório Executivo & Análise Estática) | Imagem real (`sonarcube_report.png`), KPIs e Quality Gate |
| **25** | B4 | 4.3: PRÁTICA: SonarQube ao vivo | Live Demo com terminal prompt para a equipe |
| **26** | B4 | 4.4: TestLink (Gestão e Execução de Testes) | Imagem real (`testlink.jpeg`), árvore e ferramenta legada |
| **27** | B4 | 4.5: Checklist Interativo de Qualidade em Uso | Widget interativo Sim/Não com anel de nota ao vivo |
| **28** | B5 | 5.1: A Batalha (Chrome vs. Firefox) | Tabela interativa comparativa com revelação passo a passo |
| **29** | B5 | 5.2: Votação Interativa da Turma | Mentimeter (Sala 3561 5228), QR Code real e notas |
| **30** | B5 | 5.3: Conclusão e Veredito Final | Cálculo dinâmico do campeão e 4 lições da norma |
| **31** | B5 | 5.4: Dúvidas e Perguntas (Q&A) | 16 perguntas em 4 abas + Sorteador aleatório |

---

### Detalhamento por Bloco

#### Bloco 1: Introdução e Contextualização (12 min • Slides 1 a 7)

- **Slide 1.1 (Capa & Propósito)**
  - **Objetivo**: Estabelecer o tema de forma impactante e apresentar a equipe.
  - **Conteúdo**: Título *"Qualidade de Software: Muito Além do Código Que Funciona"*. Subtítulo apresentando a norma ISO/IEC 9126 e os créditos da turma do CEULP/ULBRA.
  - **Visual**: Background com orbs gradientes em azul/turquesa Nord, grid overlay sutil, terminal prompt e tag de identificação.

- **Slide 1.2 (Sensibilização & Ponte Reflexiva: O Portal Acadêmico)**
  - **Objetivo**: Conectar a plateia com o problema cotidiano da falta de qualidade em software sob estresse e criar a ponte reflexiva para falhas de alto impacto.
  - **Conteúdo**: Pergunta direta para a turma: *"Quem aqui já tentou enviar um trabalho no portal acadêmico às 23:58 do último dia de prazo e viu a tela girar infinitamente até cair?"*.
  - **Mensagem de Transição (A Ponte do Apresentador)**: *"Para nós, a queda de um sistema no dia a dia causa apenas estresse, raiva e uma entrega atrasada. Mas e quando o impacto da falha de software vai além da nossa frustração momentânea e se transforma em prejuízos multimilionários, colapso de infraestruturas ou risco à vida humana?"*
  - **Visual**: Mockup de navegador com erro real `HTTP 504 Gateway Timeout` e logs de pool esgotado, Card de Ponte Reflexiva (*// DO INCÔMODO AO DESASTRE*) ligando ao Ariane 5 e pill com o Paradoxo da Engenharia.

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
    3. *Manutenibilidade vs. Eficiência (Velocidade)*: Dividir o sistema em classes, módulos e camadas deixa o código fácil de manter e testar, mas adiciona indireções e chamadas extras. Um código procedural direto sem camadas roda mais rápido, mas vira um pesadelo para outro desenvolvedor entender, refatorar ou corrigir no futuro.
    4. *Usabilidade vs. Confiabilidade/Segurança*: Fluxos "1 clique" sem confirmações aumentam agilidade, mas elevam o risco de erros operacionais irreversíveis do usuário (ex.: deletar banco de dados em produção exige atrito intencional).
  - **Visual**: Grid com 4 cards de conflitos com ícones comparativos e banner de síntese: *"Maturidade de Engenharia: Não existe software perfeito em tudo — projetar com qualidade é estabelecer um Perfil de Requisitos consciente para o propósito do negócio"*.

---

#### Minigame Interativo: O Tribunal da Qualidade (10 min • Slides 12 a 18)

- **Slide 12 (Abertura do Tribunal & Os 5 Grupos Participantes: Grupo 2 ao Grupo 6)**
  - **Objetivo**: Engajar a turma em um julgamento técnico interativo entre os 5 grupos da sala (Grupo 2 ao Grupo 6; o Grupo 1 é a equipe apresentadora) logo após a fundamentação das 6 características.
  - **Dinâmica**: Os **5 grupos concorrentes da turma (Grupo 2 ao Grupo 6)** atuam como bancadas de acusação técnica da computação, enquanto o Grupo 1 conduz a sessão como bancada de juízes. O apresentador anuncia que serão apresentados 5 casos reais de desastres computacionais, e o grupo que diagnosticar primeiro qual característica da ISO 9126 foi violada pontua no placar.
  - **Visual & Interatividade**: Placar central "Hero" com 5 bancadas (Grupo 2 a Grupo 6) com cores da paleta Nord, botões de incremento/decremento (+1 / -1) para cada grupo e botão de início para a Rodada 1.

- **Slide 13 (Rodada 1: O "Apagão Azul" - CrowdStrike)**
  - **Mídia**: Fotografia real `assets/images/crowdstrike.webp` (telas azuis BSOD em monitores de aeroportos globais).
  - **Contexto (Apresentador)**: *"Julho deste ano. Uma atualização defeituosa de segurança da CrowdStrike derruba aviões, bancos e hospitais no mundo todo. O sistema recebeu um arquivo com erro, não soube o que fazer, 'entrou em pânico' e derrubou o Windows inteiro."*
  - **A Pergunta (O Desafio)**: *"Valendo ponto: Se o sistema não soube lidar com um erro interno e parou de funcionar completamente, qual característica da ISO 9126 foi ferida?"*
  - **A Resposta Correta**: **Confiabilidade!**
  - **O Veredito**: *"Exato! Faltou Tolerância a falhas e Recuperabilidade. Um bom software deve isolar o erro e continuar operando em modo degradado ou recuperar-se rapidamente, e não causar uma Tela Azul global."*
  - **Visual & Interatividade**: Barra de placar compacto dos 5 grupos (G2 ao G6) no topo com botões para pontuar o grupo vencedor da rodada e botão de revelação animada do veredito.

- **Slide 14 (Rodada 2: O Pânico no Havaí - Alarme Falso de Míssil)**
  - **Mídia**: Imagem histórica real `assets/images/fake_missil_havai.webp` (SMS em caixa alta: *"BALLISTIC MISSILE THREAT INBOUND TO HAWAII. THIS IS NOT A DRILL."*).
  - **Contexto (Apresentador)**: *"2018. O Havaí entra em pânico total após receber um SMS de ameaça de míssil balístico. O motivo? O sistema oficial não tinha bug no código, mas o botão de 'Teste' ficava exatamente colado no botão de 'Alerta Real', sem nenhuma tela de confirmação do tipo 'Tem certeza?'."*
  - **A Pergunta (O Desafio)**: *"Valendo ponto: O código funcionou perfeitamente, mas induziu o humano a um erro catastrófico. Que característica a equipe de design ignorou?"*
  - **A Resposta Correta**: **Usabilidade!**
  - **O Veredito**: *"Acertaram! A norma diz que a Usabilidade inclui a Proteção frente a erros de usuário (Operacionalidade). Se o sistema deixa o usuário destruir o mundo com um clique acidental sem confirmação, a culpa é do software, não do usuário."*
  - **Visual & Interatividade**: Mídia histórica em proporção integral sem cortes, placar compacto dos 5 grupos (G2 ao G6) e botão de revelação de resposta.

- **Slide 15 (Rodada 3: O "Loading" Eterno do GTA Online)**
  - **Mídia**: Vídeo em loop contínuo `assets/videos/gta_loading_meme.mp4` (`autoplay loop muted playsinline`).
  - **Contexto (Apresentador)**: *"Por anos, os jogadores esperaram 10, às vezes 15 minutos pro GTA Online carregar no PC. Até que um fã fez engenharia reversa e descobriu que o jogo usava um único núcleo do processador para ler o mesmo arquivo de texto (JSON) 1.984.531 vezes em um loop quadrático $O(n^2)$."*
  - **A Pergunta (O Desafio)**: *"Valendo ponto: O jogo não caiu e não deu tela azul. Mas o código desperdiçou o processador e o tempo do usuário à toa. Qual característica foi ferida?"*
  - **A Resposta Correta**: **Eficiência!**
  - **O Veredito**: *"Isso mesmo! A Eficiência avalia o Comportamento em relação ao tempo e a Utilização de Recursos. O desenvolvedor substituiu o loop por uma tabela hash com poucas linhas e reduziu o carregamento em 70% (de 15 min para 1m30s). Código mal otimizado fere diretamente a ISO."*
  - **Visual & Interatividade**: Player de vídeo sem cortes com clique para pausar/retomar, placar compacto dos 5 grupos (G2 ao G6) e revelação do veredito.

- **Slide 16 (Rodada 4: O GPS Assassino - The Office / Michael Scott)**
  - **Mídia**: Imagem animada GIF clássica `assets/images/the-office-gps.gif` (Michael Scott e Dwight acelerando o carro para dentro do lago).
  - **Contexto (Apresentador)**: *"O Michael Scott colocou o endereço, o GPS processou a rota matematicamente de forma perfeita. Só que a base de dados do mapa ignorou que havia um lago ali no meio. O sistema mandou ele virar à direita e afundar o carro."*
  - **A Pergunta (O Desafio)**: *"Valendo ponto: O sistema calculou certo, mas entregou um resultado completamente inadequado para o mundo real. Qual característica afundou aqui?"*
  - **A Resposta Correta**: **Funcionalidade!**
  - **O Veredito**: *"Fechou! Faltou Acurácia e Adequação. A funcionalidade só é garantida quando as funções cumprem a necessidade real do usuário de forma correta e válida para o mundo real."*
  - **Visual & Interatividade**: GIF animado clássico em destaque, placar dos 5 grupos (G2 ao G6) e revelação final.

- **Slide 17 (Rodada 5: O Vírus do Independence Day)**
  - **Mídia**: Imagem `assets/images/independence_day_virus.jpeg` (David Levinson conectando o PowerBook 5300 à Nave Mãe).
  - **A História**: A Terra é atacada por alienígenas. O cientista David Levinson (Jeff Goldblum) conecta seu notebook Apple (PowerBook 5300 com Mac OS) à Nave Mãe com um cabo e faz upload de um vírus criado na Terra. O servidor alienígena aceita o vírus perfeitamente e os escudos caem.
  - **Contexto (Apresentador)**: *"Para salvar a Terra, o protagonista conecta o notebook Apple dele num painel da Nave Mãe alienígena. E por um milagre de Hollywood, o sistema operacional dos ETs reconhece o Mac OS, aceita o cabo e roda o vírus terráqueo perfeitamente, sem precisar instalar nenhum driver!"*
  - **A Pergunta (O Desafio)**: *"Valendo o último ponto: Se um código feito num Mac de 1996 roda nativamente num servidor alienígena construído do outro lado da galáxia... Os ETs têm nota 10 em qual característica?"*
  - **A Resposta Correta**: **Portabilidade!** (especificamente Interoperabilidade, Adaptabilidade e Capacidade de Instalação).
  - **Visual & Interatividade**: Imagem com zoom, placar compacto dos 5 grupos (G2 ao G6) e revelação do veredito.

- **Slide 18 (Veredito Final dos 5 Grupos & Transição para Métricas)**
  - **Objetivo**: Encerrar o minigame com a celebração do grupo campeão e criar a ponte lógica definitiva para o Bloco 3.
  - **Conteúdo**: Leaderboard dinâmico completo com ranking geral dos 5 grupos (Grupo 2 ao Grupo 6 com medalhas 🥇, 🥈, 🥉), pontuação total, destaque ao grupo campeão (ou empate em 1º) e botão para zerar o placar.
  - **Gancho do Apresentador (Teaser)**: *"Agora que a sala já sabe apontar na prática onde cada pilar da ISO foi quebrado... como a engenharia mede e previne esses erros usando métricas numéricas formais? É exatamente isso que vamos desvendar no Bloco 3."*

---

#### Bloco 3: As Métricas de Qualidade - ISO 9126-2, -3 e -4 (10 min • Slides 19 a 22)

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

#### Bloco 4: Softwares Auxiliares na Prática (15 min • Slides 23 a 27)

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

#### Bloco 5: Batalha Prática, Veredito & Perguntas (10 min • Slides 28 a 31)

- **Slide 5.1 (A Batalha: Chrome vs. Firefox)**
  - **Objetivo**: Aplicar os 6 critérios da ISO 9126 em um confronto técnico real entre dois navegadores conhecidos.
  - **Conteúdo**: Comparação de Funcionalidade (extensões/DevTools), Confiabilidade (isolamento de processos), Usabilidade (interface/sincronização), Eficiência (motor V8 vs. SpiderMonkey e uso de RAM), Manutenibilidade (Chromium vs. Mozilla) e Portabilidade.
  - **Visual & Interatividade**: Tabela dinâmica de confronto comparativo com logos dos navegadores. O apresentador avança com a tecla <kbd>→</kbd> para **revelar critério por critério** progressivamente, gerando expectativa e debate antes da votação.

- **Slide 5.2 (Votação Interativa da Turma via Mentimeter)**
  - **Objetivo**: Coletar as notas da turma para Eficiência, Funcionalidade e Usabilidade.
  - **Conteúdo**:
    - Orientações de acesso: **QR Code oficial** (`assets/images/mentimeter_qr_code.png`) escaneável com suporte a zoom em tela cheia, link direto para `menti.com` e **Código Oficial da Sala: `3561 5228`**.
    - Painel de lançamento de notas (0 a 10) para Chrome e Firefox em cada critério com botões <kbd>−</kbd> e <kbd>+</kbd> (passo de 0,5), botão de simulação rápida e barras comparativas coloridas.
  - **Visual**: Layout split com o QR Code oficial escaneável e badge de código destacado à esquerda e o console de controle de notas com barras gradientes à direita.

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
   - Todo o conteúdo dos 31 slides está unificado no arquivo [index.html](file:///home/leonidas/dev/faculdade/apresentacao-iso9126/index.html).
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
   - Os placares do Tribunal da Qualidade **sempre iniciam zerados** a cada carregamento da página (não são persistidos, evitando pontos residuais de testes anteriores; use o botão "Zerar Placar" no slide 17 para reiniciar). As notas lançadas para Chrome e Firefox (`iso9126_spa_notes`) são salvas no `localStorage`.
4. **Exibição e Renderização de Mídia Otimizada**:
   - **Sem cortes ou perdas**: Todas as mídias utilizam `object-fit: contain` em containers generosos com proporção adaptável (`clamp(400px, 50vh, 520px)` no minigame e `clamp(290px, 38vh, 390px)` no Ariane 5), garantindo que imagens verticais (como o alerta SMS do Havaí de 984×1750 e o vídeo do GTA Online de 576×1024) sejam exibidas com 100% do seu conteúdo visível, sem cortes no topo ou na base.
   - **Lightbox em Tela Cheia**: Todas as imagens possuem a classe `.zoomable` e podem ser clicadas a qualquer momento para abrir uma visualização ampliada (`95vw` × `95vh`) com fundo escurecido.
   - **Controle de Vídeo Interativo**: O vídeo em loop do GTA Online permite clique direto para pausar ou retomar a reprodução durante a explicação.
