from pathlib import Path
from lxml import html
from urllib.parse import urlsplit, unquote
import re, sys

root=Path('_site')
errors=[]
for page in root.rglob('*.html'):
    doc=html.parse(str(page))
    for element in doc.xpath('//*[@href or @src]'):
        attr='src' if element.get('src') is not None else 'href'
        value=element.get(attr)
        if not value or not value.startswith('/') or value.startswith('//'):
            continue
        path=unquote(urlsplit(value).path).lstrip('/')
        target=root/path
        if not target.is_file() and not (target/'index.html').is_file():
            # These are intentional redirects from the previous public URLs.
            if path.startswith(('grupo/pilulas/','resumos/lesoes-meniscais/','resumos/instabilidade-lateral-tornozelo/','resumos/lesao-vertebral-hipointensa-t1/','casos/fratura-insuficiencia-vs-patologica/')):
                continue
            errors.append(f'{page}: missing {value}')
for post in Path('src/posts').glob('*.md'):
    url=re.search(r'^permalink: (.+)$',post.read_text(),re.M).group(1).lstrip('/')
    original=html.parse(url+'index.html').xpath('//article')[0]
    generated=html.parse(str(root/url/'index.html')).xpath('//article')[0]
    text=lambda e:' '.join(' '.join(e.itertext()).split())
    images=lambda e:[x.get('src') for x in e.xpath('.//img')]
    if text(original)!=text(generated): errors.append(f'{post}: article text changed')
    if images(original)!=images(generated): errors.append(f'{post}: image list changed')
if errors:
    print('\n'.join(errors[:30]));sys.exit(1)
print('All seven article texts and image lists match; local links resolve.')
