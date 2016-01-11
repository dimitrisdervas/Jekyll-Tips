---
title: Posts Filter
config:
 - section: 
    data:
     htmlelement: section
   divs:
    - divClass: posts-filter
      components:
       - component: posts-list
         data:
          title: services
          id: filters-component
          content-type: services
          data-type: collection
          groupFieldsElement: ul
          groupFieldsElement-data-ul:
               class: list
          javascript-plugin: listjs
          javascript-plugin-data:
             filters:   
              - element: all
                categories:
                 - filter: all
              - element: category
                categories:
                 - filter: Newsletters
                 - filter: Analytics
                 - filter: Community
                 - filter: Backends
                 - filter: Contact Forms
              - element: name
                categories:
                 - filter: AWeber
          fields:
           - field: image
             data:
               link: post
               image-hash: image_path
           - field: name
             data:
               link: post
           - field: category
           - field: link
scss: |
   .filter-categories  ul ,
   .filter-categories ul li {
             float:left;
             padding: 10px;
             list-style-type: none;
             cursor: pointer;
         }

---

{% include basic_components/page.html %}

##Code
{% highlight html %}
{% raw %}

{% include basic_components/page.html %}

{% endraw %}
{% endhighlight %}

##Google Map Generator
https://mapbuildr.com/buildr

Copy the code inside the script in a file inside the _includes/js


## Config FrontMatter

{% highlight text %}
{% raw %}

config:
 - section: section
   divs:
    - class: posts-filter
      components:
       - component: posts-list.html
         data:
          title: services
          id: filters-component
          groupFieldsElement: list #obligatory
          content-type: services
          data-type: collection
          javascript-plugin: listjs
          javascript-plugin-data:
             filterHtmlElement:
              - element: category
             filters:
              - filter: all
              - filter: Newsletters
              - filter: Analytics
              - filter: Community
              - filter: Backends
              - filter: Contact Forms
          fields:
           - field: image
             data:
               link: post
               collection-hash: image_path
           - field: name
             data:
               link: post
           - field: category
           - field: link
---

{% endraw %}
{% endhighlight %}


