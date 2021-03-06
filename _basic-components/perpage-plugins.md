---
title: Per Page plugins
tag: html-component
---
_includes/_basic-components/perpage_plugins.html
It checks the config file of every page and if it finds javacript plugin it imports the plugin

## Code
{% highlight html %}
{% raw %}
<!-- DEBUG FILE: basic_components/perpagePlugins.html -->
{% if include.config-file %}
    {% assign config = site.data.pages.[include.config-file] %}
{% elsif page.config-file %}
   {% assign config = site.data.pages.[page.config-file] %}
{% else %}
   {% assign config = page.config %}
{% endif %}

{% for section in config %}
{% assign currentSectionDivs = section.divs %}    
   {% for div in currentSectionDivs %} 
   {% assign currentComponents = div.components %}
      {% for component in currentComponents %}
         {% if component.data.javascript-plugin %}
          
            {% case component.data.javascript-plugin %}     

               {% when 'gmap' %}
                  <script src="https://maps.googleapis.com/maps/api/js?key={{ component.data.javascript-plugin-data.apiKey }}"
  type="text/javascript"></script>

                {% when 'photoswipe' %}
                  <script>
                      {% include basic_components/javascriptPluginsCases/photoswipe.js photoswipeData= component.data.javascript-plugin-data %}
                    </script>
              {% endcase %}

  <script type="text/javascript">
       $(document).ready(function() {
                    
            {% case component.data.javascript-plugin %}  
          
               {% when 'gmap' %}
                 {% capture gmapFile %}js/{{ component.data.javascript-plugin-data.gmapFilePath }}{% endcapture %}
                 {% include  {{ gmapFile }} %}
                 
               {% when 'leaflet' %}
                  {% include basic_components/javascriptPluginsCases/leaflet.js leafletMaplData= component.data.javascript-plugin-data %}
                  
               {% when 'countTo' %}    
                  {% include basic_components/javascriptPluginsCases/countTo.js countToData= component.data.javascript-plugin-data %}
               
               {% when 'list.js' %}                
                  {% include basic_components/javascriptPluginsCases/listjs.js listjsData= component.data.javascript-plugin-data %}
               
               {% when 'jplist' %}                
                  {% include basic_components/javascriptPluginsCases/jplist.js jplistData= component.data.javascript-plugin-data %}
                
               {% when 'masonry' %}      

               {% when 'tabs' %}                
                  {% include basic_components/javascriptPluginsCases/tabs.js sidenavData= component.data.javascript-plugin-data %}      
               
               {% when 'sidenav' %}                
                  {% include basic_components/javascriptPluginsCases/sidenav.js sidenavData= component.data.javascript-plugin-data %}       

               {% when 'scrollpsy' %}                
                  {% include basic_components/javascriptPluginsCases/scrollpsy.js scrollpsyData= component.data.javascript-plugin-data %}  

               {% when 'rome' %} 
                  {% include basic_components/javascriptPluginsCases/rome.js %}
                  
               {% when 'dropjs' %} 
                  {% include basic_components/javascriptPluginsCases/dropdown.js dropdownData= component.data.javascript-plugin-data %}
                 
               {% when 'form'%}
                  {% include basic_components/javascriptPluginsCases/pickadate.js pickadateData= component.data.javascript-plugin-data %}
                  {% include basic_components/javascriptPluginsCases/formSelect.js formselectData= component.data.javascript-plugin-data %}  
                  {% include basic_components/javascriptPluginsCases/simpleformAjax.js simpleformData= component.data.javascript-plugin-data %}  
                  
               {% when 'owl-carousel' %}
                  {% include basic_components/javascriptPluginsCases/owlSlideshow.js slideshowOwlData= component.data.javascript-plugin-data %}
 
               {% when 'conditionize' %}
                   $('.conditional').conditionize();
                
               {% when 'simpsum-noactive' %}
                   {% include basic_components/javascriptPluginsCases/simpsum.js simpsumData= component.data.javascript-plugin-data %}
                   
             {% endcase %}
             
       });
 </script>


          {% endif %}
       {% endfor %} 
    {% endfor %}
 {% endfor %}
{% endraw %}
{% endhighlight %}