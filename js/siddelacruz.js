$(document).ready(function(){

  $('#navi').localScroll(800);

  /*$('#navi a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    if ($('.btn').is(":visible"))
      $('.btn').click();
  });*/

  $('#navi a').on('click', function(){
    $(".btn-navbar").click();
  });

  $('#btn-submit').click(function() {
    var payload = $('#form-contact').serializeObject();
    var err = 0;
    if(payload["email"] == "")
    {
      err += 1;
      alert("Please enter an email.");
    }
    if(payload["name"] == "")
    {
      err += 1;
      alert("Please enter a name.");
    }
    if(err == 0){
      //alert(JSON.stringify(payload));
      $.post("contact.php", payload, function(data) {
        if(data == "200"){
          alert("Success: email sent!");
        }
        else if(data == "501")
          alert("Error: failed to send email.");
        else
          alert("Error sending email.");
      },"json");
    }
    return false;
  });

  $('#btn-brand').click(function() {
    return false;
  });

  $.fn.serializeObject = function()
  {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      }
      else {
        o[this.name] = this.value || '';
      }
    });
    return o;
  }

});