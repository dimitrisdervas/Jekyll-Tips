---
title: menu
tag: html component
---

## Options
{% highlight text %}
- component: menu.html
  content-type:
  data-type:
  data:
   limit:
   offset:
   iconFamily: [ font-awesome / et-line ]
{% endhighlight %}

{% highlight html %}
{% raw %}

<!-- Check the content type - Data or Collections - Posts -->
{% include html_components/component_includes/componentContentType.html %}
{% for menu in posts limit: {{ include.component-data.limit }} offset: {{ include.component-data.offset }} %}
   <div class="menu-item" data-theme-menu="{{ include.component-data.theme }}">
      <a href="{{ site.baseurl }}/{{ menu.url }}">{{ menu.name }}
      {% case include.component-data.iconFamily %}
         {% when 'et-line' %}
           <i class="icon-{{ menu.icon }}"></i>
         {% when 'font-awesome' %}
            <i class="fa fa-{{ menu.icon }}"></i>
         {% endcase %}
         </a>
      </div>
   {% endfor %}
   
{% endraw %}
{% endhighlight %}