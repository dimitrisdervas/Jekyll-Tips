---
title: tags by ejs
tag: html-component
---

{% highlight html %}
{% raw %}

<script type="text/javascript" >
(function() {

	var data = {
		posts: [
  {% assign comma = false %}
  {% for post in site.blog %}
  {% unless post.hidden == true %}
    {% if comma %},{% endif %}
    {% assign comma = true %}
    {
      "title": "{{ post.title | escape_once  }}"
    }
  {% endunless %}
  {% endfor %}
]
	};

	$("#containerEJS").html("tplEJS", data);

})();
     </script>
     
{% endraw %}
{% endhighlight %}