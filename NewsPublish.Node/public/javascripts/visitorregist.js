$(document).ready(function(){
        $("#male, #female").click(function(){
            if($(this).hasClass('btn-secondary')){
                $("#male, #female").toggleClass('btn-primary btn-secondary');
            }
        });
        
  });