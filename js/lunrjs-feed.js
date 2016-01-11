---
---
// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('category')
  this.field('name')
  this.ref('id')
});

{% assign count = 0 %}
{% for post in site.services %}
index.add({
  title: {{post.name | jsonify}},
  category: {{post.category | jsonify}},
  link: {{post.link | jsonify}},
  id: {{count}}
});                       
{% assign count = count | plus: 1 %}
{% endfor %}
console.log( jQuery.type(index) );

// builds reference data
var store = [{% for post in site.services %}{
  "title": {{post.name | jsonify}},
  "link": {{ post.url | jsonify }},
  "service": {{ post.link | jsonify }},
  "image": {{ post.image_path | jsonify }},
  "date": {{ post.date | date: '%B %-d, %Y' | jsonify }},
  "category": {{ post.category | jsonify }},
  "excerpt": {{ post.content | strip_html | truncatewords: 20 | jsonify }}
 }{% unless forloop.last %},{% endunless %}{% endfor %}
]

// builds search
$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    // Get query
    var query = $(this).val();
    // Search for it
    var result = index.search(query);
    // Show results
    resultdiv.empty();
    // Add status
    resultdiv.prepend('<p class="">Found '+result.length+' result(s)</p>');
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = '<div class="result"><div class="result-body"><a href="'+store[ref].link+'" class="post-title">'+store[ref].title+'</a><div class="post-date small">'+store[ref].category+' &times; '+store[ref].date+'</div><p>'+store[ref].excerpt+'</p><p>'+store[ref].date+'<p></div>';
      resultdiv.append(searchitem);
    }
  });
});
