---
title: Fields Cases
tag: html-component
---

## Options
{% highlight text %}
fields:
  - field: title
    data:
     class:
     link: [posts / products]
  - field: images
    data:
     limit:
     link: post
     images-path: /assets/slideshow/
     image-hash: image #the hash tah we use in the file or collection 
     tag:
     alt:
     subfields:
  - field: image
     images-path: /assets/slideshow/
     image-hash: image
     alt:
  - field: icon
    data:
     class:
     link: 
     label:
     htmlElement: [ div / span or empty ]
  - field: text
    data:
     class:
     text-teaser: [ yes or anyhting ]
     text-words:
  - field: percent
    data:
      class:
  - field: link
    data:
     button: [yes]
     class: 
     link: [ posts / buybutton / empty ( post.url) / custom path ]
     label:     
  - field: count
    data:
     from:
     to:
  - field: video
    data:
     service: [ youtube / vimeo ]
     video-id:
     
{% endhighlight %}

## Code
_includes/component_includes/fieldsCases.html

{% highlight html %}
{% raw %}

<!-- Just print the fields -->
{% for field in fields  %}
   <!--  Check what type of field we are prinitng -->
   {% case field.field  %}
      <!-- Multiple images --> 
      {% when 'images' %}
      {% include html_components/postsListCases/imagesCase.html field_Data=field.data field_Field=field.field content-type=include.component.content-type %}
      <!--  One images --> 
      {% when 'image' %}
      {% include html_components/postsListCases/imageCase.html field_Data=field.data field_Field=field.field content-type=include.component.content-type %}
      <!-- LINK  -->                 
      {% when 'link' %}
      {% include html_components/postsListCases/linkCase.html field_Data=field.data field_Field=field.field %}
      <!-- PERCENTAGE -->
      {% when 'percentage' %}
      {% include html_components/postsListCases/percentageCase.html field_Data=field.data field_Field=field.field %}
      <!--   TEXT -->
      {% when 'text' %}
      {% include html_components/postsListCases/textCase.html field_Data=field.data field_Field=field.field  content-type=include.component.content-type %}
      <!-- TITLE  -->
      {% when 'title' %}
      {% include html_components/postsListCases/titleCase.html field_Data=field.data field_Field=field.field %}
      <!-- ICON  -->             
      {% when 'icon' %}
      {% include html_components/postsListCases/iconCase.html field_Data=field.data field_Field=field.field %}        
      <!-- COUNT  -->             
      {% when 'count' %}
      {% include html_components/postsListCases/countCase.html field_Data=field.data field_Field=field.field %}        
      <!-- VIDEO  -->    
      {% when 'video' %}
      {% include html_components/postsListCases/videoCase.html field_Data=field.data field_Field=field.field %}  
      {% else %}
      <!-- Print every field as separate div -->
      <div class="{{field.field}} {{ field.data.class }}">
      {% case field.data.link %}
      {% when 'posts' %}
      <a href="{{ site.baseurl}}{{ post.url }}"> 
      {% when 'products' %}
      <a href="{{ site.baseurl}}products/{{ post.sku }}.html">         
      {% endcase %}
      {{ post.[field.field] }}
      </a> </div>
   <!--  End case of fields -->
   {% endcase %}
<!--  End loop in fields -->
{% endfor %}
                  
{% endraw %}
{% endhighlight %}

###countCase.html
{% highlight html %}
{% raw %}
<div class="countTo" data-from="{{ post.[include.field_Data.from]}}" data-to="{{ post.[include.field_Data.to]}}" data-speed="5000" data-refresh-interval="50"></div>
{% endraw %}
{% endhighlight %}

###iconCase.html
{% highlight html %}
{% raw %}
{% if include.field_Data.htmlElement %}
   <{{ include.field_Data.htmlElement }} class="{{ include.field_Data.class }}">
      {% if include.field_Data.link %}
            <a href="include.field_Data.path">include.field_Data.label</a>
         {% endif%}
      <i class="icon-{{ post.icon }}"></i>
   </{{ include.field_Data.htmlElement }}>
{% else %}
      {% if include.field_Data.link %}
         <a href="include.field_Data.link">include.field_Data.label</a>
      {% endif%}
   <i class="icon-{{ post.icon }}"></i>
{% endif %}
{% endraw %}
{% endhighlight %}

###imagesCase.html
{% highlight html %}
{% raw %}
<!-- Loop through the images of the post and set limit -->
   {% if include.field_Data.tag != nill %}
      {% assign images = post.images | where: 'tag', include.field_Data.tag %}
   {% else %}
      {% assign images = post.images %}
   {% endif %}

<!-- Loop through the images of the post and set limit -->
   {% for image in post.images limit: include.field_Data.limit  %}
      <div class="post-image {{ include.field_Data.class }}" data-eq-pts="{{ include.field_Data.eqs }}">
         {% if include.field_Data.link == 'post' %}
               <a href="{{ site.baseurl}}{{ post.url }}"> 
            {% endif %}
          <img src="{{ include.field_Data.images-path }}{{ image.image }}" alt="{{ image.alt }}">  
          {% if include.field_Data.subfields  %}
<!-- SUBFIELDS INCLUDE -->
                  {% include html_components/subfields.html  component-data=include.field_Data %}                       {% endif %}
         </a>           
      </div>   
   {% endfor %}
{% endraw %}
{% endhighlight %}

##imageCase 
{% highlight html %}
{% raw %}
<!-- Loop through the images and set limit -->
   <div class="post-image {{ include.field_Data.class }}" data-eq-pts="{{ include.field_Data.eqs }}">
      
      {% case include.field_Data.link %}
         {% when 'post' %}
               <a href="{{ site.baseurl}}{{ post.url }}"> 
         {% when 'products' %}
                <a href="{{ site.baseurl}}products/{{ post.sku }}.html">         
         {% endcase %}      
                   
     <img src="{{ site.baseurl}}{{ include.field_Data.images-path }}{{ post.[include.field_Data.image-hash] }}" alt="{{ post.alt }}">
                 
      </a>           
   </div>   
{% endraw %}
{% endhighlight %}

###linkCase.html
{% highlight html %}
{% raw %}
<!-- LINK FIELD -->
  {% if include.field_Data.button == 'yes' %}
 <!-- Set the Css class for the div -->
            {% capture linkElement %}<button {% endcapture %}
           {% capture linkElementEnd %}</button>{% endcapture %}            
{% else %}
            {% capture linkElement %}<div {% endcapture %}
           {% capture linkElementEnd %}</div>{% endcapture %}
   {% endif %}
              <linkElement class="{{include.field_Field}} {{include.field_Data.class}}">
<!-- LINK PATH -- Check for the link path if it is about posts or not -->
                           {% case include.field_Data.link %}
                                {% when 'posts' %}
                                     <a href="{{ site.baseurl}}{{ post.url }}">
                                {% when 'buybutton' %}
                                        <a href="#"
                                           class="snipcart-add-item"
                                           data-item-id="{{ post.sku }}"
                                           data-item-name="{{ post.title }}"
                                           data-item-price="{{ post.price }}"
                                           data-item-weight="20"
                                           data-item-url="{{ site.url }}{{ site.baseurl }}"
                                           data-item-description="{{ post.description }}">
                                           Buy Snipcart
                                       </a>
                                {% when nill %}
                                     <a href="{{ site.baseurl}}{{ post.link }}">  
                                {% else %}
                                      <a href="{{ include.field_Data.link }}">
                              {% endcase %}
<!--  LINK LABEL -->
                         {{ include.field_Data.label }}
<!-- IF SUBFIELDS                                          -->

                                         
                       </a>
                    </linkElementEnd>
{% endraw %}
{% endhighlight %}

###percentageCase.html
{% highlight html %}
{% raw %}
<span>{{ post.percentage }}</span>
   <div class="percentage-wrapper">
     <div class="{{include.field_Data.class}}"data-percent="{{ post.percentage }}"></div>
     </div>
{% endraw %}
{% endhighlight %}

###productLinkCase.html
{% highlight html %}
{% raw %}
<!-- LINK FIELD -->
  {% if include.field_Data.button == 'yes' %}
 <!-- Set the Css class for the div -->
            {% capture linkElement %}<button {% endcapture %}
           {% capture linkElementEnd %}</button>{% endcapture %}            
{% else %}
            {% capture linkElement %}<div {% endcapture %}
           {% capture linkElementEnd %}</div>{% endcapture %}
   {% endif %}
              <linkElement class="{{include.field_Field}} {{include.field_Data.class}}">
<!-- LINK PATH -- Check for the link path if it is about posts or not -->
                           {% case include.field_Data.path %}
                                {% when 'posts' %}
                                     <a href="{{ site.baseurl}}{{ post.url }}">
                                {% when nill %}
                                     <a href="{{ site.baseurl}}{{ post.link }}">  
                                {% else %}
                                      <a href="{{ include.field_Data.path }}">
                              {% endcase %}
<!--  LINK LABEL -->
                         {{ include.field_Data.label }}
<!-- IF SUBFIELDS                                          -->

                                         
                       </a>
                    </linkElementEnd>
              
{% endraw %}
{% endhighlight %}


###textCase.html
{% highlight html %}
{% raw %}
<!-- If text is about blog which means the to print the post.content -->
               {% if include.content-type == 'blog' %}
<!-- If it is about a blog teaser -->
                        {% if include.field_Data.text-teaser != nill %}
   <!-- Check if there is words limit or use the excerpt separator -->
                             {% if include.field_Data.text-words %}
   <!-- The syntax it is not right but it works - I ommited }} at the end -->
                                    <div class="{{include.field_Data.class}}">{{ post.content | strip_html | truncatewords: {{text-words}}</div>  
                              {% else %}
                                    <div class="{{include.field_Data.class}}">{{ post.content | split:'<!--more-->' | first }}</div>
                              {% endif %}
                        {% else %}
                           <div class="{{include.field_Data.class}}">{{ post.content }}</div>
                           {% endif %}
                 {% else %}
<!-- If it is about a simple text field -->
<!-- and there is a teaser -->
                        {% if include.field_Data.text-teaser != nill %}
<!-- Check if there is words limit or use the excerpt separator -->
                                    {% if include.field_Data.text-words %}
                                          <div class="{{include.field_Data.class}}">{{ post.text | strip_html | truncatewords:{{ text-words }}</div>  
                                    {% else %}
                                          <div class="{{include.field_Data.class}}">{{ post.text | split:'<!--more-->' | first }}</div>  
                                       {% endif %}
                              {% else %}
                                 <div class="{{ include.field_Data.class }}">{{ post.text }}</div>
                        {% endif %} 
                    {% endif %}
{% endraw %}
{% endhighlight %}


###titleCase.html
{% highlight html %}
{% raw %}
<!-- TITLE CASE -->
<div class="{{ include.field_Data.class }}">
      {% case include.field_Data.link %}
      {% when 'posts' %}
            <a href="{{ site.baseurl}}{{ post.url }}">{{ post.[include.field_Field] }}</a>
      {% when 'products' %}
             <a href="{{ site.baseurl}}products/{{ post.sku }}.html">{{ post.[include.field_Field] }}</a>
      {% else %}
           {{ post.[include.field_Field] }} 
      {% endcase %}
   </div>
{% endraw %}
{% endhighlight %}


###videoCase.html
{% highlight html %}
{% raw %}
{% case include.field_Data.service %}
{% when 'youtube' %}
   <div class="video">
   <iframe width="640" height="360"  src="//www.youtube.com/embed/{{ post.video-id }}" frameborder="0" allowfullscreen></iframe>
      </div>
{% when 'vimeo' %}
    <div class="video">
   <iframe src="//player.vimeo.com/video/{{ post.video-id }}" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
   </div>
{% endcase %}
{% endraw %}
{% endhighlight %}