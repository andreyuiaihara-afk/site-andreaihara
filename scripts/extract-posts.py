from pathlib import Path
import json
from lxml import html, etree

POSTS = [
 ('casos/fasciite-plantar', 'casos'),
 ('casos/fratura-vertebral-patologica', 'casos'),
 ('casos/gota-na-rm', 'casos'),
 ('resumos/fratura-insuficiencia-vs-patologica', 'resumos'),
 ('artigos/lesoes-meniscais', 'artigos'),
 ('artigos/instabilidade-lateral-tornozelo', 'artigos'),
 ('artigos/lesao-vertebral-hipointensa-t1', 'artigos'),
]
items=[]
for url, section in POSTS:
    doc=html.parse(f'{url}/index.html')
    def first(xpath):
        x=doc.xpath(xpath)
        return ' '.join(x[0].itertext()).strip() if x else ''
    title=first('//h1')
    summary=first('//p[contains(concat(" ",normalize-space(@class)," ")," dek ")]') or first('//p[contains(concat(" ",normalize-space(@class)," ")," lede ")]')[:280]
    chips=[' '.join(x.itertext()).strip() for x in doc.xpath('//header[contains(concat(" ",normalize-space(@class)," ")," post ")]//span[contains(concat(" ",normalize-space(@class)," ")," chip ")]')]
    article=doc.xpath('//article')
    if not article: raise ValueError(f'No article: {url}')
    body=(article[0].text or '') + ''.join(etree.tostring(c, encoding='unicode', method='html') for c in article[0])
    items.append(dict(url=url, slug=url.split('/')[-1], section=section, title=title, summary=summary, tags=chips, body=body))
Path('scripts/extracted.json').write_text(json.dumps(items,ensure_ascii=False,indent=2))
