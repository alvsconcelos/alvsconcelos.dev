/** Small Markdown-to-HTML helper for the resume pages (headings, lists, links, emphasis). */
export function renderMarkdown(src: string): string {
  const lines = src.replace(/\r\n/g, '\n').split('\n');
  const out: string[] = [];
  let para: string[] = [];
  let list: string[] = [];

  const inline = (s: string): string => {
    let t = s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, text: string, url: string) => {
      const safe = String(url).replace(/"/g, '');
      const ext =
        /^https?:/i.test(safe) &&
        !/alvsconcelos\.dev/i.test(safe) &&
        !/^mailto:/i.test(safe);
      return `<a href="${safe}"${ext ? ' rel="noopener noreferrer"' : ''}>${text}</a>`;
    });
    t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    t = t.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    return t;
  };

  const flushPara = () => {
    if (para.length) {
      out.push(`<p>${inline(para.join(' '))}</p>`);
      para = [];
    }
  };
  const flushList = () => {
    if (list.length) {
      out.push(`<ul>${list.map((item) => `<li>${inline(item)}</li>`).join('')}</ul>`);
      list = [];
    }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (line.startsWith('### ')) {
      flushPara();
      flushList();
      out.push(`<h3>${inline(line.slice(4).trim())}</h3>`);
      continue;
    }
    if (line.startsWith('## ')) {
      flushPara();
      flushList();
      out.push(`<h2>${inline(line.slice(3).trim())}</h2>`);
      continue;
    }
    if (/^[-*] /.test(line)) {
      flushPara();
      list.push(line.slice(2));
      continue;
    }
    if (line.trim() === '') {
      flushPara();
      flushList();
      continue;
    }
    flushList();
    para.push(line.trim());
  }
  flushPara();
  flushList();
  return out.join('\n');
}
