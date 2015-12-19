---
title: posts-filter
tag: html-component
---

{% highlight html %}
{% raw %}

<!-- 
First separate site.data or collections
tag or not tag
second check image plain or slideshow             
show rest of data
if site.data check the rest of the variables to print 
-->
<!-- include.component-data = all the data for the component -->

<!-- Assign Content Type - Collection -->
<!-- DEBUG -->
   <!-- show what variables it calls for the component -->
<!--    
{{ include.component-data }}
   {{ include.component-data.limit }}
   {{ include.component-data.content-type }} 
   {{ include.component-data.fields }} 
-->
<!-- Check the content type - Datat or Collections - Posts -->
   {% include html_components/component_includes/componentContentType.html %}
<!-- COMPONENT OPTIONS -->
   {% include html_components/component_includes/componentDivOptions.html %}

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

<!--       Assign CSS class and data-theme class -->
<div  id='filters' {{ component-class }}  {{ component-theme }} >

<!-- Check the group div html element -->
   {% include html_components/component_includes/componentGroupDiv.html %}
   <!-- If list       -->
   <!-- You must add the class="list" to the ul otherwise you get cannot read childnodes -->
   <ul  class="list" >
<!-- Loop through the posts and set a limit if there it exists -->
   {% for post in posts limit:{{include.component-data.limit}} %} 
      <li>
<!--  If there is grouping div got fields -->
           {% if include.component-data.group != nill  %}
              {% assign groups = include.component-data.group %}
              {% for group in groups %}
                 <div class="{{ group.name }}">
                    {% assign fields = group.fields %}                   
                       {% include html_components/postsListCases/postsListCases.html %}
                 </div>
<!--  END loop in group -->
                {% endfor %}   
           {% else %}
<!-- Just print the fields -->
<!-- Loop each field in the component -->
        {% assign fields = include.component-data.fields %}    
               {% include html_components/postsListCases/postsListCases.html %}
<!--  END IF to check for GROUP -->
           {% endif %}
<!--    END Component HTML WRAPPER ELEMENT -->
      </li>
<!-- End loop in posts -->
      {% endfor %} 
   </ul>
</div>

{% endraw %}
{% endhighlight %}