/**
 * ===================================================================
 * MOTOR DE APRESENTAÇÃO WEB - SINGLE PAGE APPLICATION (SPA)
 * Qualidade de Software & ISO/IEC 9126 (Partes 1, 2, 3 e 4)
 * CEULP/ULBRA • Engenharia de Software
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  const state = {
    currentSlide: 1,
    totalSlides: totalSlides || 21,
    slideTitles: Array.from(slides).map(s => s.dataset.title || ''),
    timerSeconds: 0,
    timerInterval: null,
    votes: 34,
    maxClassVotes: 40
  };

  // Metadados dos 5 Blocos + Minigame Tribunal
  const blockMeta = [
    { start: 1,  end: 7,  name: 'BLOCO 01: INTRODUÇÃO & CONTEXTUALIZAÇÃO (12 MIN)', blockId: 1 },
    { start: 8,  end: 11, name: 'BLOCO 02: O MODELO DE QUALIDADE - ISO 9126-1 (15 MIN)', blockId: 2 },
    { start: 12, end: 17, name: 'MINIGAME: O TRIBUNAL DA QUALIDADE (10 MIN)', blockId: 3 },
    { start: 18, end: 21, name: 'BLOCO 03: AS MÉTRICAS DE QUALIDADE (10 MIN)', blockId: 4 },
    { start: 22, end: 26, name: 'BLOCO 04: SOFTWARES AUXILIARES NA PRÁTICA (15 MIN)', blockId: 5 },
    { start: 27, end: 30, name: 'BLOCO 05: BATALHA PRÁTICA & ENCERRAMENTO (10 MIN)', blockId: 6 }
  ];

  // Elementos do DOM
  const progressBar = document.getElementById('progressBar');
  const currentSlideNum = document.getElementById('currentSlideNum');
  const totalSlidesNum = document.getElementById('totalSlidesNum');
  const slideTitlePreview = document.getElementById('slideTitlePreview');
  const blockIndicator = document.getElementById('blockIndicator');
  const blockNavBtns = document.querySelectorAll('.block-nav-btn');
  const dotBtns = document.querySelectorAll('.dot-btn');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const btnFullscreen = document.getElementById('btnFullscreen');
  const btnHelp = document.getElementById('btnHelp');
  const helpModal = document.getElementById('helpModal');
  const btnCloseHelp = document.getElementById('btnCloseHelp');
  const timerWidget = document.getElementById('timerWidget');
  const blockTimer = document.getElementById('blockTimer');

  // Quebra-gelo
  const btnVote = document.getElementById('btnVote');
  const btnResetVote = document.getElementById('btnResetVote');
  const voteCount = document.getElementById('voteCount');
  const pollBarFill = document.getElementById('pollBarFill');

  /**
   * Navega para um slide específico (1 a totalSlides)
   */
  window.goToSlide = function(slideNumber) {
    if (slideNumber < 1 || slideNumber > state.totalSlides) return;

    state.currentSlide = slideNumber;

    // Atualiza classes ativas nos slides
    slides.forEach((slide) => {
      const num = parseInt(slide.getAttribute('data-slide'), 10);
      slide.classList.remove('active', 'prev');
      if (num === state.currentSlide) {
        slide.classList.add('active');
      } else if (num < state.currentSlide) {
        slide.classList.add('prev');
      }
    });

    // Identifica e atualiza o bloco atual
    const currentBlock = blockMeta.find(b => state.currentSlide >= b.start && state.currentSlide <= b.end) || blockMeta[0];
    if (blockIndicator) {
      blockIndicator.textContent = currentBlock.name;
    }
    blockNavBtns.forEach((btn, idx) => {
      btn.classList.toggle('active', (idx + 1) === currentBlock.blockId);
    });

    // Atualiza Barra de Progresso Superior
    if (progressBar) {
      const progressPercent = ((state.currentSlide - 1) / (state.totalSlides - 1)) * 100;
      progressBar.style.width = `${progressPercent}%`;
    }

    // Atualiza Contadores e Títulos
    if (currentSlideNum) currentSlideNum.textContent = String(state.currentSlide).padStart(2, '0');
    if (totalSlidesNum) totalSlidesNum.textContent = String(state.totalSlides).padStart(2, '0');
    if (slideTitlePreview) {
      slideTitlePreview.textContent = state.slideTitles[state.currentSlide - 1] || `Slide ${state.currentSlide}`;
    }

    // Atualiza Dots
    dotBtns.forEach((dot) => {
      const goto = parseInt(dot.getAttribute('data-goto'), 10);
      dot.classList.toggle('active', goto === state.currentSlide);
    });

    // Atualiza Botões de Navegação
    if (btnPrev) btnPrev.disabled = state.currentSlide === 1;
    if (btnNext) {
      if (state.currentSlide === state.totalSlides) {
        btnNext.innerHTML = `<span class="btn-text">Fim da Apresentação</span> <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
      } else {
        btnNext.innerHTML = `<span class="btn-text">Avançar</span> <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
      }
    }

    // Dispara animações de métricas do slide ativo
    const activeSlide = document.getElementById(`slide-${state.currentSlide}`);
    if (activeSlide) {
      animateMetrics(activeSlide);
    }
  };

  // Revelação progressiva de elementos com classe .step (Tabela da Batalha, etc.)
  function revealNextStep() {
    const active = document.querySelector('.slide.active');
    const hidden = active && active.querySelector('.step:not(.shown)');
    if (!hidden) return false;
    hidden.classList.add('shown');
    const left = active.querySelectorAll('.step:not(.shown)').length;
    const hint = document.getElementById('stepHint');
    if (hint && !left) hint.textContent = '✔ Todos os critérios revelados: avance para a votação';
    return true;
  }

  function nextSlide() {
    if (revealNextStep()) return;
    if (state.currentSlide < state.totalSlides) {
      goToSlide(state.currentSlide + 1);
    }
  }

  function prevSlide() {
    if (state.currentSlide > 1) {
      goToSlide(state.currentSlide - 1);
    }
  }

  // Animação de barras e contadores numéricos
  function animateMetrics(slideEl) {
    slideEl.querySelectorAll('.bar-fill').forEach((b) => {
      b.style.width = '0%';
      requestAnimationFrame(() => requestAnimationFrame(() => {
        b.style.width = (b.dataset.w || '0') + '%';
      }));
    });

    slideEl.querySelectorAll('[data-count]').forEach((el) => {
      const target = parseInt(el.dataset.count, 10);
      if (isNaN(target) || target <= 0) return;
      let cur = 0;
      const stepTime = Math.max(10, Math.floor(600 / target));
      const t = setInterval(() => {
        cur++;
        el.textContent = cur;
        if (cur >= target) clearInterval(t);
      }, stepTime);
    });
  }

  // Event Listeners dos Controles
  btnNext?.addEventListener('click', nextSlide);
  btnPrev?.addEventListener('click', prevSlide);

  dotBtns.forEach((dot) => {
    dot.addEventListener('click', () => {
      const target = parseInt(dot.getAttribute('data-goto'), 10);
      goToSlide(target);
    });
  });

  // Seletor de blocos no cabeçalho
  blockNavBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = parseInt(btn.getAttribute('data-target-slide'), 10);
      goToSlide(target);
    });
  });

  // Tira o foco de botões clicados para evitar reativações involuntárias com Espaço/Enter
  document.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (b) b.blur();
  });

  // Atalhos de Teclado
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        nextSlide();
        break;

      case 'ArrowLeft':
      case 'PageUp':
      case 'Backspace':
        e.preventDefault();
        prevSlide();
        break;

      case 'Home':
        e.preventDefault();
        goToSlide(1);
        break;

      case 'End':
        e.preventDefault();
        goToSlide(state.totalSlides);
        break;

      case 'f':
      case 'F':
        toggleFullscreen();
        break;

      case 't':
      case 'T':
        resetTimer();
        break;

      case '?':
      case 'h':
      case 'H':
        toggleHelpModal();
        break;

      case 'Escape':
        closeAllModals();
        break;

      // Atalhos numéricos para os blocos e tribunal (teclas 1 a 6)
      case '1': goToSlide(1); break;
      case '2': goToSlide(8); break;
      case '3': goToSlide(12); break;
      case '4': goToSlide(18); break;
      case '5': goToSlide(22); break;
      case '6': goToSlide(27); break;
    }
  });

  // Modo Tela Cheia
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.warn(`Erro ao ativar modo tela cheia: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  btnFullscreen?.addEventListener('click', toggleFullscreen);

  // Modais
  function toggleHelpModal() {
    helpModal?.classList.toggle('open');
  }

  function closeAllModals() {
    helpModal?.classList.remove('open');
    document.getElementById('lightbox')?.classList.remove('open');
    document.getElementById('spot')?.classList.remove('open');
  }

  btnHelp?.addEventListener('click', toggleHelpModal);
  btnCloseHelp?.addEventListener('click', () => helpModal?.classList.remove('open'));

  // Cronômetro da Apresentação (60 min)
  function startTimer() {
    state.timerInterval = setInterval(() => {
      state.timerSeconds++;
      const mins = Math.floor(state.timerSeconds / 60);
      const secs = state.timerSeconds % 60;
      if (blockTimer) {
        blockTimer.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      }
      if (mins >= 60 && timerWidget) {
        timerWidget.style.borderColor = 'var(--nord11)';
        blockTimer.style.color = 'var(--nord11)';
      }
    }, 1000);
  }

  function resetTimer() {
    state.timerSeconds = 0;
    if (blockTimer) blockTimer.textContent = '00:00';
    if (timerWidget) {
      timerWidget.style.borderColor = '';
      blockTimer.style.color = '';
    }
  }

  timerWidget?.addEventListener('click', resetTimer);
  startTimer();

  // Interatividade Quebra-Gelo (Slide 2)
  if (btnVote) {
    btnVote.addEventListener('click', () => {
      state.votes++;
      if (voteCount) voteCount.textContent = state.votes;
      const pct = Math.min(Math.round((state.votes / state.maxClassVotes) * 100), 100);
      if (pollBarFill) pollBarFill.style.width = `${pct}%`;
      btnVote.style.transform = 'scale(0.96)';
      setTimeout(() => { btnVote.style.transform = ''; }, 100);
    });
  }

  if (btnResetVote) {
    btnResetVote.addEventListener('click', () => {
      state.votes = 0;
      if (voteCount) voteCount.textContent = '0';
      if (pollBarFill) pollBarFill.style.width = '0%';
    });
  }

  // Lightbox para imagens (todas com classe .zoomable)
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const lbImg = document.getElementById('lightboxImg');
    document.addEventListener('click', (e) => {
      const zoomImg = e.target.closest('img.zoomable');
      if (zoomImg && lbImg) {
        lbImg.src = zoomImg.src;
        lightbox.classList.add('open');
      }
    });
    lightbox.addEventListener('click', () => lightbox.classList.remove('open'));
  }

  // Interatividade de vídeo (clique para alternar reprodução)
  document.querySelectorAll('video').forEach((v) => {
    v.style.cursor = 'pointer';
    v.title = 'Clique para pausar ou reproduzir';
    v.addEventListener('click', () => {
      if (v.paused) v.play();
      else v.pause();
    });
  });

  // ==========================================
  // MINIGAME: O TRIBUNAL DA QUALIDADE
  // ==========================================
  let tribunalState = { a: 0, b: 0 };
  try {
    const saved = localStorage.getItem('iso9126_tribunal_scores');
    if (saved) tribunalState = Object.assign(tribunalState, JSON.parse(saved));
  } catch (e) {}

  function renderTribunalScores() {
    // Atualiza placar Hero (Slide 12)
    const heroA = document.getElementById('heroScoreA');
    const heroB = document.getElementById('heroScoreB');
    if (heroA) heroA.textContent = tribunalState.a;
    if (heroB) heroB.textContent = tribunalState.b;

    // Atualiza placares compactos dos casos (Slides 13 a 16)
    for (let i = 1; i <= 4; i++) {
      const elA = document.getElementById(`cScoreA${i}`);
      const elB = document.getElementById(`cScoreB${i}`);
      if (elA) elA.textContent = tribunalState.a;
      if (elB) elB.textContent = tribunalState.b;
    }

    // Atualiza Card de Vencedor (Slide 17)
    const wbScore = document.getElementById('wbScoreDisplay');
    const wbTitle = document.getElementById('wbTitle');
    const wbIcon = document.getElementById('wbIcon');
    if (wbScore) {
      wbScore.textContent = `Lado A: ${tribunalState.a} pts × Lado B: ${tribunalState.b} pts`;
    }
    if (wbTitle && wbIcon) {
      if (tribunalState.a === 0 && tribunalState.b === 0) {
        wbTitle.textContent = '⚖️ Aguardando Vereditos das Rodadas...';
        wbIcon.textContent = '⚖️';
      } else if (tribunalState.a === tribunalState.b) {
        wbTitle.textContent = '🤝 Empate Técnico entre as Bancadas!';
        wbIcon.textContent = '🤝';
      } else if (tribunalState.a > tribunalState.b) {
        wbTitle.textContent = '🏆 Lado A Campeão!';
        wbIcon.textContent = '🏆';
      } else {
        wbTitle.textContent = '🏆 Lado B Campeão!';
        wbIcon.textContent = '🏆';
      }
    }

    try {
      localStorage.setItem('iso9126_tribunal_scores', JSON.stringify(tribunalState));
    } catch (e) {}
  }

  window.addTribunalScore = function(team, delta) {
    if (team === 'a' || team === 'b') {
      tribunalState[team] = Math.max(0, tribunalState[team] + delta);
      renderTribunalScores();
    }
  };

  window.resetTribunalScore = function() {
    tribunalState.a = 0;
    tribunalState.b = 0;
    renderTribunalScores();
  };

  window.revealVerdict = function(caseNum) {
    const card = document.getElementById(`verdictCard${caseNum}`);
    const btn = document.getElementById(`btnRevealCase${caseNum}`);
    if (!card) return;
    const isRevealed = card.classList.toggle('revealed');
    if (btn) {
      btn.innerHTML = isRevealed
        ? `<span>✔ Veredito Revelado (Ocultar)</span>`
        : `<span>⚖️ Revelar Veredito da ISO 9126</span>`;
    }
  };

  renderTribunalScores();

  // Checklist Interativo (Slide 26)
  const chkList = document.getElementById('chkList');
  if (chkList) {
    const items = chkList.querySelectorAll('.chk-item');
    const ring = document.getElementById('chkRing');
    function updateChecklist() {
      let yes = 0, no = 0;
      items.forEach((it) => {
        if (it.dataset.answer === 'yes') yes++;
        if (it.dataset.answer === 'no') no++;
      });
      const total = items.length, answered = yes + no;
      const pct = answered ? Math.round((yes / total) * 100) : 0;
      const elYes = document.getElementById('chkYes');
      const elNo = document.getElementById('chkNo');
      const elLeft = document.getElementById('chkLeft');
      const elPct = document.getElementById('chkPct');
      if (elYes) elYes.textContent = yes;
      if (elNo) elNo.textContent = no;
      if (elLeft) elLeft.textContent = total - answered;
      if (elPct) elPct.textContent = pct + '%';
      if (ring) {
        const color = pct >= 80 ? 'var(--nord14)' : pct >= 50 ? 'var(--nord13)' : 'var(--nord11)';
        ring.style.background = `conic-gradient(${color} ${pct * 3.6}deg, var(--nord2) 0deg)`;
      }
      let v = 'Aguardando respostas…';
      if (answered === total) {
        const name = document.getElementById('chkSystem')?.value || 'O sistema';
        v = pct >= 80 ? `${name}: excelente nível de usabilidade!` : pct >= 50 ? `${name}: usabilidade razoável, com débitos ergonômicos.` : `${name}: usabilidade crítica, requer redesign imediato.`;
      } else if (answered) {
        v = 'Avaliação da turma em andamento…';
      }
      const elVerdict = document.getElementById('chkVerdict');
      if (elVerdict) elVerdict.textContent = v;
    }
    chkList.addEventListener('click', (e) => {
      const btn = e.target.closest('.chk-btn');
      if (!btn) return;
      const item = btn.closest('.chk-item');
      item.dataset.answer = btn.dataset.val;
      item.querySelectorAll('.chk-btn').forEach((b) => b.classList.toggle('selected', b === btn));
      btn.blur();
      updateChecklist();
    });
    document.getElementById('chkReset')?.addEventListener('click', (e) => {
      items.forEach((it) => {
        it.dataset.answer = '';
        it.querySelectorAll('.chk-btn').forEach((b) => b.classList.remove('selected'));
      });
      e.currentTarget.blur();
      updateChecklist();
    });
    updateChecklist();
  }

  // Batalha Chrome vs Firefox e Votação Mentimeter (Slides 27, 28, 29)
  const voteBody = document.querySelector('.vote-body');
  const CRITS = ['efi', 'fun', 'usa'];
  const CRIT_NAMES = { efi: 'Eficiência', fun: 'Funcionalidade', usa: 'Usabilidade' };
  let notes = { efi: [0, 0], fun: [0, 0], usa: [0, 0] };
  try {
    notes = Object.assign(notes, JSON.parse(localStorage.getItem('iso9126_spa_notes') || '{}'));
  } catch (e) {}

  function renderConclusion() {
    const rows = document.getElementById('scoreRows');
    if (!rows) return;
    const tot = [0, 0];
    CRITS.forEach((k) => { tot[0] += notes[k][0]; tot[1] += notes[k][1]; });
    const any = tot[0] + tot[1] > 0;
    const name = document.getElementById('winnerName');
    const score = document.getElementById('winnerScore');
    if (!any) {
      if (name) name.textContent = 'Aguardando votação…';
      if (score) score.textContent = 'Lance as notas no slide 28';
      rows.innerHTML = '';
      return;
    }
    const diff = Math.abs(tot[0] - tot[1]);
    if (name) name.textContent = diff < 0.5 ? '🤝 Empate técnico!' : (tot[0] > tot[1] ? '🏆 Google Chrome' : '🏆 Mozilla Firefox');
    if (score) score.textContent = `Chrome ${tot[0].toFixed(1)} × ${tot[1].toFixed(1)} Firefox (máx. 30)`;
    rows.innerHTML = CRITS.map((k) => {
      const [c, f] = notes[k];
      const lead = c === f ? 'tie' : (c > f ? 'c' : 'f');
      return `<div class="sr-row"><span class="mono">${CRIT_NAMES[k]}</span><div class="sr-bars">
        <div class="sr-bar c ${lead === 'c' ? 'lead' : ''}" style="width:${c * 10}%"><b>${c.toFixed(1)}</b></div>
        <div class="sr-bar f ${lead === 'f' ? 'lead' : ''}" style="width:${f * 10}%"><b>${f.toFixed(1)}</b></div></div></div>`;
    }).join('');
  }

  function renderVotes() {
    CRITS.forEach((k) => [0, 1].forEach((b) => {
      const v = notes[k][b];
      const el = document.getElementById(`v-${k}-${b}`);
      if (el) {
        el.textContent = v.toFixed(1);
        const bar = document.getElementById(`b-${k}-${b}`);
        if (bar) bar.style.width = `${v * 10}%`;
      }
    }));
    try { localStorage.setItem('iso9126_spa_notes', JSON.stringify(notes)); } catch (e) {}
    renderConclusion();
  }

  if (voteBody) {
    voteBody.addEventListener('click', (e) => {
      const btn = e.target.closest('.vt-btn');
      if (!btn) return;
      const k = btn.closest('.vote-row').dataset.crit, b = +btn.dataset.br;
      notes[k][b] = Math.max(0, Math.min(10, notes[k][b] + parseFloat(btn.dataset.d)));
      renderVotes();
    });
    document.getElementById('voteSim')?.addEventListener('click', () => {
      CRITS.forEach((k) => [0, 1].forEach((b) => {
        notes[k][b] = Math.round((5 + Math.random() * 4.5) * 2) / 2;
      }));
      renderVotes();
    });
    document.getElementById('voteReset')?.addEventListener('click', () => {
      CRITS.forEach((k) => { notes[k] = [0, 0]; });
      renderVotes();
    });
    renderVotes();
  }

  // QR Code ilustrativo
  const qrGrid = document.getElementById('qrGrid');
  if (qrGrid) {
    const N = 21; let seed = 9126;
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const finder = (x, y) => [[0, 0], [N - 7, 0], [0, N - 7]].some(([ox, oy]) => {
      const dx = x - ox, dy = y - oy;
      if (dx < 0 || dy < 0 || dx > 6 || dy > 6) return false;
      return dx === 0 || dy === 0 || dx === 6 || dy === 6 || (dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4);
    });
    const inFinderZone = (x, y) => [[0, 0], [N - 8, 0], [0, N - 8]].some(([ox, oy]) => x >= ox && x <= ox + 7 && y >= oy && y <= oy + 7);
    let html = '';
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      const on = inFinderZone(x, y) ? finder(x, y) : rnd() > 0.5;
      html += `<i class="${on ? 'on' : ''}"></i>`;
    }
    qrGrid.innerHTML = html;
  }

  // Q&A Interativo e Sorteador (Slide 30)
  const qaTabs = document.querySelectorAll('.qa-tab');
  if (qaTabs.length) {
    qaTabs.forEach((t) => t.addEventListener('click', () => {
      qaTabs.forEach((x) => x.classList.toggle('active', x === t));
      document.querySelectorAll('.qa-panel').forEach((p) => p.classList.toggle('active', p.dataset.cat === t.dataset.cat));
    }));
    document.querySelectorAll('.qa-q').forEach((q) => q.addEventListener('click', () => q.parentElement.classList.toggle('open')));

    const spot = document.getElementById('spot');
    const all = Array.from(document.querySelectorAll('.qa-card')).map((c) => ({
      cat: qaTabs[parseInt(c.parentElement.dataset.cat, 10)]?.textContent || 'Conceitos',
      q: c.querySelector('.qa-q span:nth-child(2)')?.textContent || '',
      a: c.querySelector('.qa-a')?.innerHTML || ''
    }));
    let used = [];
    function drawQuestion() {
      if (used.length === all.length) used = [];
      let i; do { i = Math.floor(Math.random() * all.length); } while (used.includes(i));
      used.push(i);
      const elCat = document.getElementById('spotCat');
      const elQ = document.getElementById('spotQ');
      const elA = document.getElementById('spotA');
      const elShow = document.getElementById('spotShow');
      if (elCat) elCat.textContent = `// ${all[i].cat.toUpperCase()}`;
      if (elQ) elQ.textContent = all[i].q;
      if (elA) { elA.innerHTML = all[i].a; elA.classList.remove('show'); }
      if (elShow) elShow.textContent = 'Mostrar resposta';
      spot?.classList.add('open');
    }
    document.getElementById('qaRandom')?.addEventListener('click', drawQuestion);
    document.getElementById('spotNext')?.addEventListener('click', drawQuestion);
    document.getElementById('spotClose')?.addEventListener('click', () => spot?.classList.remove('open'));
    document.getElementById('spotShow')?.addEventListener('click', () => {
      document.getElementById('spotA')?.classList.add('show');
      const elShow = document.getElementById('spotShow');
      if (elShow) elShow.textContent = 'Resposta exibida ✔';
    });
  }

  // Suporte a Touch Swipe em tablets / telas touch
  let touchStartX = 0;
  let touchEndX = 0;
  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) nextSlide();
      else prevSlide();
    }
  }, { passive: true });

  // Inicia sempre no Slide 1
  goToSlide(1);
});
