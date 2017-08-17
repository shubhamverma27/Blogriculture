
           var x1=0;
        var y1=0;
            var z1=0;
            



          function sql2(){

  		var dataString11 = "";
                var dataString12 = "";
                var dataString13 = "";
                var nameorig=document.getElementById("name12").value;
                
  $.ajax({
      
        type: "GET",
        url: "http://localhost/bal.php",
        data: dataString11,
                cache: false,
        success: function(data) {
			
			    x1=JSON.parse(data);
				document.getElementById("bal2").innerHTML=x1['balance'];
        },
        
        error: function(data)
        {
        }   
    });
            
          
        

};    

function sa(){
	setTimeout(function(){
		sql2();
	},2000);
};


