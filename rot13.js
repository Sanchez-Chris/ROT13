function rot13(str) {
    

var regex = /[A-Z]/g;


var encrypt = str.replace(regex, function(a){
        var c= a.charCodeAt(0);
        if(c>77){
            return String.fromCharCode(c-13)
        }
         else { //c<77)
            return String.fromCharCode(c+13)
        }
            
           
        });
        
return encrypt;
}
