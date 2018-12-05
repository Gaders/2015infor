var a = 5


function loadXMLDoc(a){
    var xml = null
    if(window.XMLHttpRequest)
    {
    xml=new XMLHttpRequest();
    }
    else{
        xml=new ActiveXObject();
    }
    



   
   
   
    xml.onreadystatechange=function(){
     
        if(xml.readyState==4&&xml.status==200){
           var n = xml.responseText
         
           var n1 = JSON.parse(n)
           
        
              var str = JSON.stringify(n1.result)
              
        var zhuanHuan1 = str.replace(/,{"/g,"<br>")
        var zhuanhuan2 = zhuanHuan1.replace(/"}/g,"</br>")  
        var zhuanHuan3= zhuanhuan2.replace("[","")
        var zhuanHuan4= zhuanHuan3.replace("]","")
        var zhuanHuan5= zhuanHuan4.replace('{"',"")
        var zhuanHuan6= zhuanHuan5.replace(/class_num/g,"班级代号")
        var zhuanHuan7= zhuanHuan6.replace(/gender/g,"性别")
        var zhuanHuan8= zhuanHuan7.replace(/major/g,"专业")
        var zhuanHuan9= zhuanHuan8.replace(/name/g,"姓名")
        var zhuanHuan10= zhuanHuan9.replace(/student_num/g,"学号")
        var zhuanHuan11= zhuanHuan10.replace(/"/g,"")
        var zhuanHuan12= zhuanHuan11.replace(/,/g,"&nbsp;&nbsp;&nbsp;")
        var first = document.getElementById("first")
        first.innerHTML=zhuanHuan12
           
            
            
        }
    }   



   
     
         xml.open("GET","https://api.tumiv.com/v2/cqupt/student?year=2015&page="+a);
         xml.send();




    }
 
 
 
window.onload = function() { 
var btn1 = document.querySelector("#btnZuo")
btn1.addEventListener("click",function(){
  
    var p1 = document.getElementById("p1")
    a=p1.textContent.replace("当前页数:","")
         if (a <= 10 && a > 1 ){
         a = a-1
         var p1 = document.getElementById("p1")
         p1.textContent="当前页数:"+a

         loadXMLDoc(a)}


         else{
             alert("没有东西了  求求您不要戳了")
         }
 })


var btn2 = document.querySelector("#btnYou")
btn2.addEventListener("click",function(){
  
    var p1 = document.getElementById("p1")
    a=parseInt(  p1.textContent.replace("当前页数:",""))
     if (a < 10 && a >1 ){
         a = a+1
         var p1 = document.getElementById("p1")
         p1.textContent="当前页数:"+a

         loadXMLDoc(a)
        }
        else if(a==1 ){
          a =2
          var p1 = document.getElementById("p1")
         p1.textContent="当前页数:"+a

          loadXMLDoc(a)
        }

         else{
             alert("没有东西了  求求您不要戳了")
         }
 })


 loadXMLDoc(a)








}
 
 




