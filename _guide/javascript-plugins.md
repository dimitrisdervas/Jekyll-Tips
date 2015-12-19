---
title: Add javascript plugins
---

##LOAD
FILE _data/pluginsSourceFiles/jsSourceFiles.yml

put active to all the plugins that we want to call in the footer
All the plugins are add to this file js/components.js

# COde
## the html that scans per page the javascript components
_inludes/basic_components/perpage_plugins.html 
this html is called from default layout

{% highlight html %}
{% raw %}

{% if page.confFile %}
   {% assign config = site.data.pages[page.config-file] %}
{% else %}
   {% assign config = page.config %}
{% endif %}

{% for section in config %}
{% assign currentSectionDivs = section.divs %}    
   {% for div in currentSectionDivs %} 
   {% assign currentComponents = div.components %}
      {% for component in currentComponents %}
         {% if  component.data.javascript-plugin %}

            {% case component.data.javascript-plugin %}                                         
               {% when 'map' %}
               {% when 'countTo' %}    
               {% when 'listjs' %}  
               {% when 'masonry' %}     
               {% when 'owl-carousel' %}
                  {% include basic_components/javascriptPluginsCases/owlSlideshow.js slideshowOwlData= component.data.javascript-plugin-data %}
             {% endcase %}

          {% endif %}
       {% endfor %} 
    {% endfor %}
 {% endfor %}

{% endraw %}
{% endhighlight %}

## energise per page the components
e.x. owl slideshow

it will be automatics the code put in the footer 
_inludes/basic_components/javascriptPluginsCases/owl-Slideshow.js

{% highlight js %}
{% raw %}

   $("#{{ component.data.id }}").owlCarousel( {
   {% for owlData in slideshowOwlData %}
   {{ owlData[0] }} : {{ owlData[1]}} {% unless forloop.last%},{% endunless%}
   {% endfor %}
   });
   
{% endraw %}
{% endhighlight %}
