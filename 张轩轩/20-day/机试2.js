 window.onload = function(){
            document.getElementById('ll').onclick=function(){  
                var aa=document.getElementsByName('items');  
                for(var i=0;i<aa.length;i++){  
                    var cc=aa[i];  
                    cc.checked="checked";  
                }  
            }  
            document.getElementById('No').onclick=function(){  
                var aa=document.getElementsByName('items');  
                for(var i=0;i<aa.length;i++){  
                    var cc=aa[i];  
                    cc.checked=null;  
                }  
            }  
             document.getElementById('sss').onclick=function(){    
                var aa=document.getElementsByName('items');  
                for(var i=0;i<aa.length;i++){  
                    var cc=aa[i];  
                    if (cc.checked) {  
                        cc.checked=null;  
                    }  
                    else{  
                        cc.checked="checked";  
                    } 
                }  
            }  
            document.getElementById('checkItems').onclick=function()  
            {  
                var aa=document.getElementsByName('items');  
                if (this.checked) {  
                    for(var i=0;i<aa.length;i++){  
                        var cc=aa[i];  
                        cc.checked="checked";  
                    }  
                }  
                else{  
                    for(var i=0;i<aa.length;i++){  
                        var cc=aa[i];  
                        cc.checked=null;  
                    }  
                }  
            } 
            document.getElementById('send').onclick = function(){
                var aa=document.getElementsByName('items');  
                for(var i=0;i<aa.length;i++){  
                    var cc=aa[i];  
                    if (cc.checked) {  
                        alert(aa[i].value)  
                    }  
                }  
            }
        }