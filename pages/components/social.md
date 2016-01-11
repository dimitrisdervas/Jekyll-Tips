---
title: Social
component: social
config:
 - section: 
    data:
     htmlelement: section
   divs:
      - divClass: sociallClass     
        components:
         - component: social
           data:
            title: Social icons in config
            icons:
             - icon: facebook
               path: test.html
             - icon: twitter
               path: test.html
             - icon: youtube
               path: test.html
             - icon: pinterest
               path: test.html
             - icon: vimeo
               path: test.html
             - icon: linkedin
               path: test.html
             - icon: github
               path: test.html
      - divClass: sociallClass     
        components:
          - component: social
            data:
              title: Social icons from _data


css: |
   .icon {
   display: inline-block;
   width: 1em;
   height: 1em;
   fill: currentColor;
   }
   .social ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
   }
---

{% include basic_components/page.html %}

##Create svg

[Iconmoon](https://icomoon.io/app/#/select)

Then copy the files from 'get the code' in 

      _includes/svg/iconmoon 
      
write in config the name of the icon and the path to the social network

icons:

- icon:

  path:
  
- icon:

  path:

or from 

      _data/content/social 

this is better if we want to use the block in many pages


## [See Component Code]({{site.baseurl}}/html-components/{{page.component}})



##Config FrontMatter 

{% highlight text %}
{% raw %}

config:
 - section: 
    data:
     htmlelement: section
   divs:
      - divClass: sociallClass     
        components:
         - component: social
           data:
            title: Social icons in config
            icons:
             - icon: facebook
               path: test.html
             - icon: twitter
               path: test.html
             - icon: youtube
               path: test.html
             - icon: pinterest
               path: test.html
             - icon: vimeo
               path: test.html
             - icon: linkedin
               path: test.html
             - icon: github
               path: test.html
      - divClass: sociallClass     
        components:
          - component: social
            data:
              title: Social icons from _data


{% endraw %}
{% endhighlight %}


