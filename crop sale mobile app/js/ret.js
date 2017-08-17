
           var x1=0;
        var y1=0;
            var z1=0;
            
          function sql1(){
  		var dataString11 = "";
                var dataString12 = "";
                var dataString13 = "";
  $.ajax({
      
        type: "GET",
        url: "http://localhost/ret.php",
        data: dataString11,
                cache: false,
        success: function(data) {
			
			    	x1=JSON.parse(data);
				y1=JSON.parse(x1);
				z1=y1.length;
				console.log(y1);
				if (z1>=1) {
				document.getElementById('c1').style.display="block";
			
				document.getElementById('n1').innerHTML=y1[0]["fname"];
					document.getElementById('a1').innerHTML=y1[0]["faddr"];
						document.getElementById('cr1').innerHTML=y1[0]["croptype"];
							document.getElementById('ar1').innerHTML=y1[0]["area"];
							document.getElementById('id1').innerHTML=y1[0]["fid"];
                   } e
                   if (z1>=2) {
                   	
					document.getElementById('c2').style.display="block";
					document.getElementById('n2').innerHTML=y1[1]["fname"];
						document.getElementById('a2').innerHTML=y1[1]["faddr"];
							document.getElementById('cr2').innerHTML=y1[1]["croptype"];
								document.getElementById('ar2').innerHTML=y1[1]["area"];
								document.getElementById('id2').innerHTML=y1[1]["fid"];
	                   } 
	                   if (z1>=3) {
	                   	
					document.getElementById('c3').style.display="block";
					document.getElementById('n3').innerHTML=y1[2]["fname"];
						document.getElementById('a3').innerHTML=y1[2]["faddr"];
							document.getElementById('cr3').innerHTML=y1[2]["croptype"];
								document.getElementById('ar3').innerHTML=y1[2]["area"];
								document.getElementById('id3').innerHTML=y1[2]["fid"];
	                   } 
	                   if(z1>=4) {
	                   	 	
					document.getElementById('c4').style.display="block";
					document.getElementById('n4').innerHTML=y1[3]["fname"];
						document.getElementById('a4').innerHTML=y1[3]["faddr"];
							document.getElementById('cr4').innerHTML=y1[3]["croptype"];
								document.getElementById('ar4').innerHTML=y1[3]["area"];
								document.getElementById('id4').innerHTML=y1[3]["fid"];
	                   } 
				
        },
        
        error: function(data)
        {
        }   
    });
            
          
        

};    



           var x1=0;
        var y1=0;
            var z1=0;
            
          function namesql(){
  		var dataString11 = "";
                var dataString12 = "";
                var dataString13 = "";
  $.ajax({
      
        type: "GET",
        url: "http://localhost/name.php",
        data: dataString11,
                cache: false,
        success: function(data) {
			
			    	x1=JSON.parse(data);
				y1=JSON.parse(data);
				z1=y1.length;
				console.log(y1);
				
				if (z1>=1) {
				document.getElementById('c1').style.display="block";
			
				document.getElementById('n1').innerHTML=y1[0]["fname"];
					document.getElementById('a1').innerHTML=y1[0]["faddr"];
						document.getElementById('cr1').innerHTML=y1[0]["croptype"];
							document.getElementById('ar1').innerHTML=y1[0]["area"];
							document.getElementById('id1').innerHTML=y1[0]["fid"];
							document.getElementById('sname1').value=x1[0]["fname"];
					document.getElementById('saddr1').value=x1[0]["faddr"];
						document.getElementById('scroptype1').value=x1[0]["croptype"];
							document.getElementById('sarea1').value=x1[0]["area"];
							document.getElementById('sid1').value=x1[0]["fid"];
							document.getElementById('sname').innerHTML=y1[0]["fname"];
					document.getElementById('saddr').innerHTML=y1[0]["faddr"];
						document.getElementById('scroptype').innerHTML=y1[0]["croptype"];
							document.getElementById('sarea').innerHTML=y1[0]["area"];
							document.getElementById('sid').innerHTML=y1[0]["fid"];
				

                   } 
                   if (z1>=2) {
                   	
					document.getElementById('c2').style.display="block";
					document.getElementById('n2').innerHTML=y1[1]["fname"];
						document.getElementById('a2').innerHTML=y1[1]["faddr"];
							document.getElementById('cr2').innerHTML=y1[1]["croptype"];
								document.getElementById('ar2').innerHTML=y1[1]["area"];
								document.getElementById('id2').innerHTML=y1[1]["fid"];
	                   } 
	                   if (z1>=3) {
	                   	
					document.getElementById('c3').style.display="block";
					document.getElementById('n3').innerHTML=y1[2]["fname"];
						document.getElementById('a3').innerHTML=y1[2]["faddr"];
							document.getElementById('cr3').innerHTML=y1[2]["croptype"];
								document.getElementById('ar3').innerHTML=y1[2]["area"];
								document.getElementById('id3').innerHTML=y1[2]["fid"];
	                   } 
	                   if(z1>=4) {
	                   	 	
					document.getElementById('c4').style.display="block";
					document.getElementById('n4').innerHTML=y1[3]["fname"];
						document.getElementById('a4').innerHTML=y1[3]["faddr"];
							document.getElementById('cr4').innerHTML=y1[3]["croptype"];
								document.getElementById('ar4').innerHTML=y1[3]["area"];
								document.getElementById('id4').innerHTML=y1[3]["fid"];
	                   } 

							
				console.dir(x1);
        },
        
        error: function(data)
        {
        }   
    });
            
          
        

};    
