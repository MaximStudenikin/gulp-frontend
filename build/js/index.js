var dataList=document.getElementById("json-datalist"),input=document.getElementById("ajax"),request=new XMLHttpRequest;request.onreadystatechange=function(e){if(4===request.readyState)if(200===request.status){var t=JSON.parse(request.responseText);t.forEach(function(e){var t=document.createElement("option");t.value=e,dataList.appendChild(t)}),input.placeholder="e.g. datalist"}else input.placeholder="Couldn't load datalist options :("},request.open("GET","https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/html-elements.json",!0),request.send();