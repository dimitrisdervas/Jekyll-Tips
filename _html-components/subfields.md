---
title: Subfields
tag: html-component
---

{% highlight html %}
{% raw %}

<!-- Import subfiel;ds parameter -->
   {% assign fields = include.component-data.subfields %}    
   {% for field in fields  %}
     {% include html_components/postsListCases/postsListCases.html %}
   {% endfor %}
   
{% endraw %}
{% endhighlight %}