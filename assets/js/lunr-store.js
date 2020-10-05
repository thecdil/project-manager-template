---
# create lunr store 
---
{%- assign items = site.posts | concat: site.html_pages -%}
var store = [ 
    {% for item in items %} 
    { 
        "url": {{ item.url | relative_url | jsonify }},
        "title": {{ item.title | jsonify }},
        "text": {{ item.content | strip_html | normalize_whitespace | jsonify }}
    }{%- unless forloop.last -%},{%- endunless -%}
    {%- endfor -%}
];
