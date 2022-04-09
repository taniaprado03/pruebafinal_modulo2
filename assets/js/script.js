document.getElementsByClassName('card-text')[0].addEventListener('click',function(){

})

$(".cuadro-100").click(function(){
    $(".card-text").toggle();
    
  });

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })