---
title: posts-list
tag: html-component
---
You can have 

 - fields
{% highlight html %}
         <div class="anyclass">[field value]</div>
 {% endhighlight %}        
 - group field
 
    - just group fields
 {% highlight html %} 
            <div class="groupclas">
               <div class="anyclass">[field value]</div>
             </div>
 {% endhighlight %} 
    - group field with background image and fields inside
 {% highlight html %} 
             <div class="groupclas" style="background:url(./url/imagename.jpg)">
               <div class="anyclass">[field value]</div>
             </div>
  {% endhighlight %}          
 - fields that have fields inside
 {% highlight html %}
               <div class="anyclass">[field value] <div class="anotherclass">[another field value]</div>
 {% endhighlight %} 

## Component Options

{% highlight text %}
- component: posts-list.html
  content-type: [ name of the file csv,yml,json in _data or the collection ]
  data-type: [data-list  or empty (default: collection) ]
  post-title:
  javascript-plugin:
  javascript-plugin-data:
    items: 1
  groupFieldsElement: [ div or empty (default to ul > li )]
  groupFieldsElementClass:
  groupFieldsElementId: 
  class:
  id:
  theme:
  limit:
  offset:
  view: [masonry # if nill nothing happens if tru prints div.masonry-grid-sizer]
  title:
   data:
    link:
    label:
    separator:
  subtitle:
   data:
    link:
    label:
    separator:
  fields:
   - field:
   - field:
  groupdiv:
   - class:           
     fields:
       - field:
       - field:
case slideshow
   javascript-plugin: owl-carousel
   class: owl-carousel
   groupFieldsElement: div
   content-type: slideshow
   data-type: data-list
   groupdiv:
    - class: slideshow-group div
     fields:
    - field: image
      data:
      images-path: /assets/slideshow/
    - field: title
      data:
      class: slideshow-title
    - field: subtitle
   
case filters

  groupFieldsElementClass: list
  filters:
   - filter: 
   - filter:
{% endhighlight %}
         
- content-type:
   - [ name of the file csv,yml,json in _data or the collection ]
- data-type:
   - data-list 
      - path to file inside _data/content
      - if multilingual it searches inside the _data/content/en , _data/content/gr
   - [empty] 
      - path to file inside collection folder ex. _rooms
      - if multilingual path to file inside collection folder ex. _rooms/en , _rooms/gr
- post-title:
   - [title of the post]
      -  two variations if it is about a file ex. yaml file or
         This case it references the file an looks inside the file for certain post-title
         ex. 
         content-type: offers
         data-type: data-list
         post-title: seasons
         ### _data/content/offers.ymal
         {% highlight text %}
         offers:
         - nights: 5
         - nights: 3

         seasons:
         - season: low
         - season: medium
         - season: high
         {% endhighlight %}
         
         It will look for the offers.yml and the sasons key
       - a collection, then it will look for the specific post with the title
       
- groupFieldsElement:
    - default [ ul > li ]
    - div
    Basically choose 
        
- title and subtitle
   - link
   - label
   - separator
   in order to create something like this
    {% highlight text %}
      Products / see all products
         {% endhighlight %}
- fields or group / fields
  assign wich fields to be created or assign a <div> to group certain fields 
  


##Code
posts-list.html

{% highlight html %}
{% raw %}
<!-- COMPONENT TITLE -->
{% include html_components/component_includes/componentTitle.html %}    

<!-- Check the content type - Data or Collections - Posts -->
   {% include html_components/component_includes/componentContentType.html %}    
<!-- MASONRY -->
   {% include html_components/component_includes/div-masonry-sizer.html %}
      
<!-- Check the group  html element -->      
      {% case include.component-data.groupFieldsElement %}
            {% when 'div' %}
               {% capture groupdivDiv %}<div id="{{ include.component-data.groupFieldsElementId }}" class="{{ include.component-data.groupFieldsElementClass }}" >{% endcapture%}
               {% capture groupdivDivEnd %}</div>{% endcapture%}
            {% else %}
               {% capture groupdivUl %}<ul>{% endcapture%}
               {% capture groupdivLi %}<li id="{{ include.component-data.groupFieldsElementId }}" class="{{ include.component-data.groupFieldsElementClass }}" >{% endcapture%}
               {% capture groupdivLiEnd %}</li>{% endcapture%}
               {% capture groupdivUlEnd %}</ul>{% endcapture%}      
       {% endcase %}

{% if include.component-data.filters %}
<!--    Filters for the listsjs  -->
<div class="filter-categories">
   <ul>
      {% for filter in include.component-data.filters %}
            <li id="filter-{{ filter.filter }}" data-category-name="{{ filter.filter }}">
              {{ filter.filter }}
               </li>
         {% endfor %}
   </ul>
</div>
  {% capture filterDiv %}<div id="{{ include.component-data.groupFieldsElementId }}" class="{{ include.component-data.groupFieldsElementClass }}" >{% endcapture%}
  {% capture filterDivEnd %}</div>{% endcapture%}
{% endif %}

{{ filterDiv }}
     {{ groupdivUl }}
<!-- Loop through the posts and set a limit if there it exists -->
   {% for post in posts limit:{{include.component-data.limit}} %} 
<!--  IF div -->  
      {{ groupdivDiv }}
<!-- If list -->
     {{ groupdivLi }}
<!--  If there is grouping div got fields -->
           {% if include.component-data.group != nill  %}
              {% for group in include.component-data.groupdiv %}
                 <div class="{{ group.class }}">
                    {% assign fields = group.fields %}                   
                       {% include html_components/fieldsCases.html %}
                 </div>
<!--  END loop in group -->
                {% endfor %}   
           {% else %}
<!-- Just print the fields -->
<!-- Loop each field in the component -->
              {% assign fields = include.component-data.fields %}    
              {% include html_components/fieldsListCases.html %}
<!--  END IF to check for GROUP -->
           {% endif %}
<!--    END Component HTML WRAPPER ELEMENT -->
         {{ groupdivLiEnd }}
         {{ groupdivDiv }}
<!-- End loop in posts -->
      {% endfor %} 
   {{ groupdivUlEnd }}
{{ filterDivEnd }}
{% endraw %}
{% endhighlight %}



