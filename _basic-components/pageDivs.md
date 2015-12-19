<!-- DEBUG FILE: html_components/basic_components/pageIncludes/pageDivs.html -->
<!--       -->
<!-- ALIAS -->
<!--       -->
{% assign div.div.theme = %}

<!--                 -->
<!--  PAGE DIVS      -->
<!--                 -->
{% if div.div %}
  {% capture divClassElement %}<div {% include basic_components/pageIncludes/themeElement.html elementData=div.div.theme %}>{% endcapture %}
  {% capture divClassElementEnd %}</div>{% endcapture %}
{% else %}
  {% capture divClassElement %}{% endcapture %}
  {% capture divClassElementEnd %}{% endcapture %}
{% endif %}
{{ divClassElement }}
