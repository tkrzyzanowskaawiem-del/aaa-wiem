#!/usr/bin/env python3
"""Generate public HTML and index from CMS Markdown. Run in GitHub Actions."""
from pathlib import Path
import json,re,html
import yaml,markdown
ROOT=Path(__file__).resolve().parents[1]
content=ROOT/'content/artykuly'
entries=[]
def e(v):return html.escape(str(v or ''),quote=True)
for path in sorted(content.glob('*.md')):
 raw=path.read_text(encoding='utf-8')
 if not raw.startswith('---\n'):
  print('Pominięto bez frontmatter:',path);continue
 _,front,body=raw.split('---',2)
 meta=yaml.safe_load(front) or {}
 slug=str(meta.get('slug') or path.stem)
 if not re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*',slug):
  raise ValueError(f'Niepoprawny slug w {path}: {slug}')
 title=str(meta.get('title') or slug)
 category=str(meta.get('category') or 'Inne')
 description=str(meta.get('description') or '')
 image=str(meta.get('image') or '')
 featured=bool(meta.get('featured',False))
 # avoid untrusted HTML embedded in markdown
 body_html=markdown.markdown(body,extensions=['extra','sane_lists'],output_format='html')
 body_html=re.sub(r'<script\b[^>]*>.*?</script\s*>','',body_html,flags=re.I|re.S)
 article=f"""<!doctype html><html lang="pl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{e(title)} — AAA, WIEM!</title><meta name="description" content="{e(description)}"><link rel="stylesheet" href="style.css"></head><body><header><div class="wrap nav"><a class="logo" href="index.html" style="text-decoration:none">aaa, wiem<span>!</span></a><nav><a href="index.html#start">Start</a><a href="index.html#odkrywaj">Odkrywaj</a><a href="index.html#quizy">Quizy</a></nav></div></header><main class="article-page"><a class="back" href="index.html#odkrywaj">← Wszystkie artykuły</a><p class="tag">{e(category)}</p><h1>{e(title)}</h1><p class="lead">{e(description)}</p>{f'<img class="article-hero" src="{e(image)}" alt="">' if image else ''}<div class="article-content">{body_html}</div></main><footer class="sitefoot"><div class="wrap">AAA, WIEM! · Świat wyjaśniony po ludzku</div></footer></body></html>"""
 (ROOT/f'{slug}.html').write_text(article,encoding='utf-8')
 entries.append(dict(slug=slug,title=title,category=category,description=description,image=image,featured=featured))
(ROOT/'artykuly.json').write_text(json.dumps(entries,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(f'Zbudowano {len(entries)} artykułów')
