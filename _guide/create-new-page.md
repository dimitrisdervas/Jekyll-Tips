---
title: Create new page
tag: tutorial start
---


POSSIBLE START THE OTHER WAY AROOUND FROM END TO START
To start a new page for example domain.com/myposrtofolio
 - create new folder with url i want to have
  for example a folder named "portofolio"
 - create inside index.md
  front matter
  ---
  layout: portofolio
  ---
  If i want to use a layout completely different from the rest of the site use a custom layout or reuse anothe layout
  use tha name of the layout - which means a html page that it will have my layoutI would like to use
   
 - create the layout file
  ex. portofolio.html
 - put this code inside the ex. _layouts/portofolio.html
  ----
   layout: default
   confFile: frontpage
   ---
   
{% highlight html %}
{% raw %}
 {% include basic_components/page.html yaml-file=page.confFile %}
   {% endraw %}
{% endhighlight %} 
 - _data/pages put the file that i wrote in layout/portofolio.html
   _data/pages/portofolio.yml


Next create the html through settings