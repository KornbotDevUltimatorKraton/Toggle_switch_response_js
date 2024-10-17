var input = document.getElementById('toggleswitch');
    var outputtext = document.getElementById('status');

    input.addEventListener('change',function(){
        if(this.checked) {
            outputtext.innerHTML = "aktiv";
            console.log(this.checked);
        } else {
            outputtext.innerHTML = "inaktiv";
            console.log(this.checked); 
        }
    });
  
