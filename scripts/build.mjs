import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import ts from 'typescript';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const generated = path.join(root, '.static-build');
const output = path.join(root, 'docs');
await fs.mkdir(generated, { recursive: true });
await fs.mkdir(path.join(output, 'zh'), { recursive: true });
for (const name of ['policy-content', 'policy']) {
  const filename = path.join(root, 'app', name === 'policy' ? 'policy.tsx' : 'policy-content.ts');
  const source = await fs.readFile(filename, 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
    fileName: filename,
  });
  await fs.writeFile(path.join(generated, `${name}.mjs`), outputText.replace("'./policy-content'", "'./policy-content.mjs'"));
}
const { default: Policy } = await import(pathToFileURL(path.join(generated, 'policy.mjs')).href);
for (const language of ['en', 'zh']) {
  const title = language === 'zh' ? '隐私政策 · Memory Camera' : 'Privacy Policy · Memory Camera';
  const description = language === 'zh' ? '了解 Memory Camera 如何处理照片、权限、购买信息及删除请求。隐私联系人：Jocelyn。' : 'How Memory Camera handles photographs, permissions, purchases and deletion requests. Privacy contact: Jocelyn.';
  const href = `https://zhanghaichao.github.io/memory-camera-privacy/${language === 'zh' ? 'zh/' : ''}`;
  const html = '<!doctype html>\n' + renderToStaticMarkup(createElement('html', { lang: language === 'zh' ? 'zh-CN' : 'en' },
    createElement('head', null,
      createElement('meta', { charSet: 'utf-8' }),
      createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
      createElement('title', null, title),
      createElement('meta', { name: 'description', content: description }),
      createElement('meta', { name: 'theme-color', content: '#f3f0e9' }),
      createElement('link', { rel: 'canonical', href }),
      createElement('link', { rel: 'alternate', hrefLang: 'en', href: 'https://zhanghaichao.github.io/memory-camera-privacy/' }),
      createElement('link', { rel: 'alternate', hrefLang: 'zh-CN', href: 'https://zhanghaichao.github.io/memory-camera-privacy/zh/' }),
      createElement('link', { rel: 'icon', href: '/memory-camera-privacy/icon.png' }),
      createElement('link', { rel: 'stylesheet', href: '/memory-camera-privacy/style.css' })),
    createElement('body', null, createElement(Policy, { language }))));
  if (!html.includes('seansheaton@gmail.com') || !html.includes('com.memorycamera.app')) throw new Error('Policy identity missing');
  if ((html.match(/class="policy-section"/g) || []).length !== 13) throw new Error('Policy sections missing');
  if (/<script\b/i.test(html)) throw new Error('The static policy must not need JavaScript');
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
  for (const [, id] of html.matchAll(/href="#([^"]+)"/g)) if (!ids.has(id)) throw new Error(`Broken anchor: ${id}`);
  await fs.writeFile(path.join(output, language === 'zh' ? 'zh/index.html' : 'index.html'), html);
}
const css = (await fs.readFile(path.join(root, 'app/globals.css'), 'utf8')).replace(/^@import 'tailwindcss';\s*/, '');
await fs.writeFile(path.join(output, 'style.css'), css);
await fs.copyFile(path.join(root, 'public/icon.png'), path.join(output, 'icon.png'));
await fs.writeFile(path.join(output, '.nojekyll'), '');
console.log('Built and validated English and Chinese policies in docs/. No browser JavaScript or third-party assets.');
