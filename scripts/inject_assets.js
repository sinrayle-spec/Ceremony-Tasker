import fs from 'fs';
import path from 'path';

const distPath = path.join(process.cwd(), 'dist');
const assetsPath = path.join(distPath, 'assets');
const swPath = path.join(distPath, 'sw.js');

try {
  // 1. assetsフォルダ内のファイルを取得
  const files = fs.readdirSync(assetsPath);
  
  // 2. キャッシュ対象のファイルパス一覧を作成
  const assetsToCache = [
    './',
    './index.html',
    './manifest.json',
    './icon.svg'
  ];

  files.forEach(file => {
    // index-*.js や index-*.css などを追加
    assetsToCache.push(`./assets/${file}`);
  });

  // 3. dist/sw.js を読み込み
  let swContent = fs.readFileSync(swPath, 'utf8');

  // 4. ASSETS_TO_CACHE 配列の部分を置換
  const replaceTarget = /const ASSETS_TO_CACHE = \[\s*[\s\S]*?\s*\];/;
  const newArrayStr = `const ASSETS_TO_CACHE = [\n  ${assetsToCache.map(f => `'${f}'`).join(',\n  ')}\n];`;
  
  swContent = swContent.replace(replaceTarget, newArrayStr);

  // 5. 書き戻し
  fs.writeFileSync(swPath, swContent, 'utf8');
  console.log('✅ sw.js にビルドアセットを正常に注入しました！');
} catch (err) {
  console.error('❌ sw.js へのアセット注入に失敗しました:', err);
}
