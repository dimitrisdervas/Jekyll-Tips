---
title: footerDate
component: footerDate
config:
 - section: 
    data:
     htmlelement: section
   divs:
      - divClass: footerDateClass     
        components:
         - component: footerDate
           data:
             text-before: Copyright &copy; test
             text-after: All rights reserved.

---

##PREVIEW
{% include basic_components/page.html %}


## [See Component Code]({{site.baseurl}}/html-components/{{page.component}})


<h2>Config FrontMatter</h2>

{% highlight text %}
{% raw %}

config:
 - section: 
    data:
     htmlelement: section
   divs:
      - divClass: footerDateClass     
        components:
         - component: footerDate
           data:
             text-before: Copyright &copy; test
             text-after: All rights reserved.


{% endraw %}
{% endhighlight %}


