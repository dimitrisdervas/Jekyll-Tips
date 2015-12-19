---
title: Page configuration File
tag: html-component
---

If inside 
# Code
#### select the config file either in _data/pages or in the FrontMatter
{% highlight html %}
{% raw %}

   {% if page.config-file %}
      {% assign config = site.data.pages[page.confif-file] %}
   {% else %}
      {% assign config = page.config %}
   {% endif %}

{% endraw %}
{% endhighlight %}

##Config FIle in _data/pages/[ config filename].yml
{% highlight html %}
{% raw %}
---
layout: component
title: Image Case - Slideshow
config-File: slideshow
---

   {% include basic_components/page.html %}

{% endraw %}
{% endhighlight %}
##Config FIle FrontMatter
{% highlight html %}
{% raw %}
---
layout: component
title: Image Case - Slideshow
config:
 - section: section
   divs:
     - divClass: slideshowDivclass     
       components:
        - component: posts-list.html
          data:
           title: Slideshow
           javascript-plugin: owl-carousel
           javascript-plugin-data:
              items: 1
           class: owl-carousel
           id: slideshow
           groupFieldsElement: div
           content-type: slideshow
           data-type: data-list
           fields:
                 - field: image
                   data:
                     images-path: /assets/slideshow/
                 - field: title
                   data:
                    class: slideshow-title
                 - field: subtitle


---
   {% include basic_components/page.html config-frontmatter='config' %}

{% endraw %}
{% endhighlight %}