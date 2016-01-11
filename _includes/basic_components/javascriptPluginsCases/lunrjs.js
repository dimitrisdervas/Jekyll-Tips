// builds lunr INDEX
var index = lunr(function () {
{% for data in include.lunrjsData.index-fields %}
this.field('{{data.field}}')
{% endfor %}
  this.ref('id')
});
 // GIVE lunr DATA - TELL LUNR WHAT TO SEARCH - SAME FIELDS
{% assign count = 0 %}
{% assign data-source = component.data.content-type %}
{% for post in site.[data-source] %}
index.add({
{% for data in include.lunrjsData.index-fields %}
  {{ data.field }}: {{post.[data.field] | jsonify}},
{% endfor %}
  id: {{count}}
});{% assign count = count | plus: 1 %}{% endfor %}
console.log( jQuery.type(index) );
var store = [{% for post in site.[data-source] %}{
   {% for data in include.lunrjsData.reference-fields %}
     {{ data.field }}: {{post.[data.field] | jsonify}}
   {% unless forloop.last %},{% endunless %}{% endfor %}
}{% unless forloop.last %},{% endunless %}{% endfor %}]


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
      var searchitem = {{ include.lunrjsData.results }};
      resultdiv.append(searchitem);
    }
  });
});
