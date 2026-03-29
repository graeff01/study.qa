const { createCanvas } = require('canvas');
const fs = require('fs');

function makeIcon(size, path) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#0e0f11';
  ctx.fillRect(0, 0, size, size);
  const r = size * 0.38;
  ctx.beginPath();
  ctx.arc(size/2, size/2, r, 0, Math.PI*2);
  ctx.strokeStyle = '#a78bfa';
  ctx.lineWidth = size * 0.06;
  ctx.stroke();
  ctx.fillStyle = '#a78bfa';
  ctx.font = `bold ${size*0.32}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('QA', size/2, size/2);
  fs.writeFileSync(path, canvas.toBuffer('image/png'));
  console.log('Created', path);
}

try {
  makeIcon(192, '/home/claude/qa-pwa/icon-192.png');
  makeIcon(512, '/home/claude/qa-pwa/icon-512.png');
} catch(e) {
  console.log('canvas not available, icons will be skipped:', e.message);
}
