---
title: Social
tag: html-component
---
## Options
{% highlight text %}
- component: social.html
{% endhighlight %}

## Code
{% highlight html %}
{% raw %}

<!-- Font Awesome -->
<div class="social">
 <ul>
    {% for icon in site.data.content.social %}
    <li>
       <a href="{{ icon.url }}">
         <i class="fa fa-{{ icon.name }}"></i>
        </a>
     </li>
    {% endfor %}
    </ul>
   </div> 


{% endraw %}
{% endhighlight %}