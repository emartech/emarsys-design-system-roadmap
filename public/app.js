(function() {
  var button = document.querySelector('button');
  var hiddenElements = document.querySelectorAll('.hidden');

  button.addEventListener('click', function() {
    [].forEach.call(hiddenElements, function(hiddenElement) {
      hiddenElement.classList.toggle('hidden');
    });
  });
})();
