






           var x=0;
        var y=0;
            var z=0;
            var time;
            var res=0;
          
  var dataString = "";
                var dataString2 = "";
                var dataString3 = "";
  var arr=[];
  var arr2=[];
  var i=0;
  var xyarr=[];
  var yzarr=[];
  var zxarr=[];
  var x;
var flag =1;

  var stop=setInterval(function(){
  $.ajax({
      'async': false,
        type: "GET",
        url: "http://192.168.43.241/index.php",
        data: dataString,
                cache: false,
        success: function(data) {
                 x=data;
        if(x<48&&flag==1)
              {

              var bala=document.getElementById("bal2").innerHTML;
        var prem=document.getElementById("premium1").innerHTML;
        bala=parseInt(bala);
        prem=parseInt(prem);
        prem=prem*8;
          var fina=bala+prem;
          console.log(prem);
          console.log(fina);
          document.getElementById("bal2").innerHTML=fina;
          flag=0;
          //break;
              }
		



                  arr[i]=i+1;
                             arr2[i]=data;
                             i++;   

                    

                         var layout = {
                  
                    paper_bgcolor: 'rgba(245,246,249,0)',
                    plot_bgcolor: 'rgba(245,246,249,0.4)',

                    showlegend: false,
                    annotations: [],
                    xaxis: {
                      title: 'Time'
                    },
                    yaxis: {
                      title: 'Temperature'
                    }
                  };

                         console.log(x);
                    var trace1 = {
                      x: arr, 
                      y: arr2, 
                      type: 'scatter',
                      line: {
                        color: 'rgb(219, 64, 82)',
                        width: 3
                      }
                      

                    };
                    var data = [trace1];
                    Plotly.newPlot('myDiv', data,layout);
                    


                },
        error: function(data)
        {
        //  alert("No data");
        }   
    });

},1000);

//console.log(arr);
//console.log(xyarr);

        
