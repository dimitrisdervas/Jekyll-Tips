---
title: slideshow
tag: html-component
---

Create a slideshow
{% highlight html %}
{% raw %}

<!-- Call the slideshow-id -->
<div id="{{ include.component-data.slideshow-id }}" class="owl-carousel" data-theme-slideshow="{{ include.component-data.theme }}"> 
   {% case include.component-data.slideshow-data %}
<!-- IMAGES -->
    {% when 'images' %}
         {% for image in site.data.content.[include.component-data.slideshow-src]  limit:{{include.component-data.limit}} %}        
   <!--    Group fields in one slideshow item -->
                      <div class="{{ include.component-data.class }}">
                        <img src="{{ image.image}}" alt="{{ image.image}}">    
                         <!-- Add extra fields -->
                         {% if include.component-data.fields %}
                            <div class="caption">
                             {% assign fields = include.component-data.fields %}
                             {% for name in fields  %}
                               <div class="{{ name.field }}">{{ image.[name.field] }}</div>
                                {% endfor %}
                            </div>
                         {% endif %}
                     </div>
            {% endfor %}
<!-- TEXT -->
     {% when 'text' %}
            {% for post in site.data.content.[include.component-data.slideshow-src]   limit:{{include.component-data.limit}}%}
<!--    Group fields in one slideshow item -->
               <div>
                  {% assign fields = include.component-data.fields %}
                  {% for name in fields  %}
                     <!--  Check what type of field we are prinitng -->
                   {% case name.field  %}
                        <!--  IMAGES FIELD    -->
                           <!--   Check if the field is more images -->    
                              {% when 'images' %}
                                {% include html_components/postsListCases/imagesCase.html %}
                           <!--   Check if the field is one images --> 
                              {% when 'image' %}
                                {% include html_components/postsListCases/imageCase.html %}
                           <!-- LINK  -->
                           <!--     Check if the field is about link  -->                  
                               {% when 'link' %}
                                {% include html_components/postsListCases/linkCase.html %}
                             <!--            PERCENTAGE -->
                              {% when 'percentage' %}
                                {% include html_components/postsListCases/percentageCase.html %}
                                  <!--   TEXT -->
                              {% when 'text' %}
                                {% include html_components/postsListCases/textCase.html %}
                                <!-- TITLE  -->
                           <!--     Check if the field is about title  -->                  
                              {% when 'title' %}
                                {% include html_components/postsListCases/titleCase.html %}
                                     <!-- ICON  -->
                           <!--     Check if the field is about title  -->                  
                              {% when 'icon' %}
                                {% include html_components/postsListCases/iconCase.html %}        
                              {% else %}
                              <!-- THE REST OF THE FIELDS -->
                              <!-- Print every field as separate div -->
                              <div class="{{name.field}}">{{ post.[name.field] }}</div>
                           <!--  End case of fields -->
                     {% endcase %}
                  {% endfor %}
               </div>
            {% endfor %}
      {% endcase%}
      

{% endraw %}
{% endhighlight %}