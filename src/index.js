function parseQuery(location) {
  var search = location.search.replace(/^\?/, "");

  var output = {};

  if (search) {
    var tuples = search.split("&");

    for (var i = 0; i < tuples.length; i += 1) {
      var param = tuples[i].split(/=/);

      output[param[0]] = param[1] ? decodeURI(param[1]) : undefined;
    }
  }

  return output;
}

function parseTemplate(template, params) {
  return template.replace(/\{\{(\w+)\}\}/gi, function(_, r) {
    return (params || {})[r] || "";
  });
}

window.run = function() {
  document.addEventListener("DOMContentLoaded", function() {
    document.body.innerHTML = parseTemplate(
      document.body.innerHTML,
      parseQuery(window.location)
    );
  });
};
