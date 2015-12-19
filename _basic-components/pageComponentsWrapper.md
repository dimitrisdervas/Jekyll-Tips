<!-- DEBUG FILE: html_components/basic_components/pageIncludes/pageComponentsWrapper.html -->

<!--       -->
<!-- ALIAS -->
<!--       -->
{% assign htmlComponent.data.wrapperDiv.theme = %}


 <!--                 -->
<!--  PAGE COMPONENTS WRAPPER -->
<!--                 -->

{% if htmlComponent.data.wrapperDiv %}
   {% capture componentWrapperDiv %}<div {% include basic_components/pageIncludes/themeElement.html elementData=htmlComponent.data.wrapperDiv.theme %}>{% endcapture %}
   {% capture componentWrapperDivEnd %}</div>{% endcapture %}
{% else %}
   {% capture componentWrapperDiv %}{% endcapture %}
   {% capture componentWrapperDivEnd %}{% endcapture %}
{% endif %}

{{ componentWrapperDiv }}
