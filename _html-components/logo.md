---
title: Logo
tag: html-component
---
## Options
{% highlight text %}
- component: logo.html
  data:
   image: [ path to image ]
   or
   text: [ text for logo ]
{% endhighlight %}

## Code
{% highlight html %}
{% raw %}

 <a href="{{ site.baseurl }}"> 
    {% if include.component-data.image %}
      <img src="{{ site.baseurl }}/{{include.component-data.image}}" alt="{{ site.title }}">
    {% else %}
      {{ include.component-data.text}}
    {% endif %}
</a>  

{% endraw %}
{% endhighlight %}