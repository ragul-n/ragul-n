document.addEventListener('DOMContentLoaded', function(){
  // Select all footnote reference links
  var footnoteRefs = document.querySelectorAll('a[href^="#fn:"]');
  footnoteRefs.forEach(function(ref) {
    var footnoteID = ref.getAttribute('href').substring(1);
    var footnote = document.getElementById(footnoteID);
    if (footnote) {
      var cloned = footnote.cloneNode(true);
      cloned.querySelectorAll('a').forEach(function(link) {
        link.remove();
      });
      ref.setAttribute('data-tippy-content', cloned.textContent.trim());
      // Remove native title if it exists
      ref.removeAttribute('title');
    }
  });
  // Initialize Tippy on the footnote reference links
  tippy('a[href^="#fn:"]');
});
