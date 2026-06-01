const CAT_COLOR = {
  surfaktan:   'var(--surfaktan)',
  builder:     'var(--builder)',
  antibakteri: 'var(--antibakteri)',
  pemutih:     'var(--pemutih)',
  filler:      'var(--filler)',
  aditif:      'var(--aditif)',
};

const CAT_EMOJI = {
  surfaktan:   '🫧',
  builder:     '🔩',
  antibakteri: '🦠',
  pemutih:     '✨',
  filler:      '📦',
  aditif:      '🌸',
};

function makeCard(d) {
  const color = CAT_COLOR[d.kat] || '#888';
  const emoji = CAT_EMOJI[d.kat] || '🧪';
  const compounds = d.senyawa ? `<div class="card-compounds">💊 ${d.senyawa}</div>` : '';
  return `
    <div class="card-wrap" onclick="this.classList.toggle('flipped')">
      <div class="card-inner">
        <div class="card-face card-front" style="--cat-color:${color}">
          <div class="card-cat">${d.katLabel}</div>
          <div class="card-emoji">${emoji}</div>
          <div class="card-name">${d.nama}</div>
          <div class="card-formula">${d.rumus}</div>
          <div class="card-hint">klik untuk fungsi →</div>
        </div>
        <div class="card-face card-back" style="--cat-color:${color}">
          <div class="card-cat">${d.katLabel}</div>
          <div class="card-back-label">Fungsi:</div>
          <div class="card-fungsi">${d.fungsi}</div>
          ${compounds}
        </div>
      </div>
    </div>
  `;
}

function renderFlat(data, gridId) {
  document.getElementById(gridId).innerHTML = data.map(makeCard).join('');
}

function renderGrouped(data, containerId) {
  document.getElementById(containerId).innerHTML = data.map(group => {
    const img = group.img
      ? `<img class="product-img" src="images/${group.img}" alt="${group.produk}" />`
      : '';
    return `
      <div class="section-title">— ${group.produk} —</div>
      ${img}
      <div class="grid">${group.senyawa.map(makeCard).join('')}</div>
    `;
  }).join('');
}

renderFlat(sabunData,       'grid-sabun');
renderFlat(soklinData,      'grid-soklin');
renderGrouped(kebersihanData, 'content-kebersihan');
renderGrouped(toiletriesData, 'content-toiletries');
renderGrouped(p3kData,        'content-p3k');
renderGrouped(dapurData,      'content-dapur');

function switchTab(name, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('panel-' + name).classList.add('active');
  btn.classList.add('active');
  document.querySelectorAll('.card-wrap.flipped').forEach(c => c.classList.remove('flipped'));
}
