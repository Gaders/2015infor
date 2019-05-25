
var startPage = 5

var Ajax= {
    ajax:function(obj) {
        var xml = null

        if (window.XMLHttpRequest) {
            xml=new XMLHttpRequest()
        }else {
            xml=new ActiveXObject()
        }
        if (obj.type=='get') {
            xml.open(obj.type, obj.url+obj.data, true)
            xml.send()
    }  

        xml.onreadystatechange=function() {
            if (xml.readyState==4 && xml.status==200) {
                var n = xml.responseText
                obj.success(n)
            }else if (xml.status==400) {
                obj.error()    
            }    
        }
    }
}

window.onload = function() { 
    var btn1 = document.querySelector("#btnZuo")
    var btn2 = document.querySelector("#btnYou")

    btn1.addEventListener("click", function() {
        var p1 = document.getElementById("p1")
        a = p1.textContent.replace("当前页数:", "")

        if (a <= 10 && a > 1 ) {
            a = a-1
            var p1 = document.getElementById("p1")
            p1.textContent = "当前页数:" + a

            Ajax.ajax ({
                type: "get",
                url: "https://api.tumiv.com/v2/cqupt/student",
                data: "?year=2015&page=" + a,
                success:function(n){
                    var str = JSON.stringify(JSON.parse(n).result)        
                    var transFormation = str.replace(/{/g, "<br>").replace(/,{"/g, "").replace(/"}/g, "</br>").replace("[", "").replace("]", "").replace(/class_num/g, "班级代号").replace(/gender/g, "性别").replace(/major/g, "专业").replace(/name/g, "姓名").replace(/"/g, "").replace(/,/g, "&nbsp;&nbsp;&nbsp;").replace(/student_num/g, "学号")
                    var first = document.getElementById("first")

                    first.innerHTML = transFormation
                },
                error:function(){
                    alert("这里有一些难以言喻的错误发生了呢")
                }
            })
        }else{
            alert("没有东西了  求求您不要戳了")
        }    
})


    
    btn2.addEventListener("click",function() {
        var p1 = document.getElementById("p1")
        a = parseInt(p1.textContent.replace("当前页数:", ""))

        if (a < 10 && a >1 ){
            a = a + 1
            var p1 = document.getElementById("p1")
            p1.textContent="当前页数:" + a

            Ajax.ajax({
                type: "get",
                url: "https://api.tumiv.com/v2/cqupt/student",
                data: "?year=2015&page=" + a,
                success:function(n){
                    var str = JSON.stringify(JSON.parse(n).result)       
                    var transFormation = str.replace(/{/g, "<br>").replace(/,{"/g, "").replace(/"}/g, "</br>").replace("[", "").replace("]", "").replace(/class_num/g, "班级代号").replace(/gender/g, "性别").replace(/major/g, "专业").replace(/name/g, "姓名").replace(/"/g, "").replace(/,/g, "&nbsp;&nbsp;&nbsp;").replace(/student_num/g, "学号")
                    var first = document.getElementById("first")
                    first.innerHTML = transFormation
                },
                error:function(){
                    alert("这里有一些难以言喻的错误发生了呢")
                }
            })
        }else if (a ==1 ) {
            a =2
            var p1 = document.getElementById("p1")
            p1.textContent="当前页数:" + a

            Ajax.ajax({
                type: "get",
                url: "https://api.tumiv.com/v2/cqupt/student",
                data: "?year=2015&page=" + a,
                success:function(n){
                    var str = JSON.stringify(JSON.parse(n).result)     
                    var transFormation = str.replace(/{/g,"<br>").replace(/,{"/g,"").replace(/"}/g,"</br>").replace("[","").replace("]","").replace(/class_num/g,"班级代号").replace(/gender/g,"性别").replace(/major/g,"专业").replace(/name/g,"姓名").replace(/"/g,"").replace(/,/g,"&nbsp;&nbsp;&nbsp;").replace(/student_num/g,"学号")
                    var first = document.getElementById("first")

                    first.innerHTML = transFormation
                },
                error:function(){
                    alert("这里有一些难以言喻的错误发生了呢")
                }
            })
        }else {
             alert("没有东西了  求求您不要戳了")
        }
 })
} 
 

//ajax 的封装后的调用
Ajax.ajax({
    type: "get",
    url:  "https://api.tumiv.com/v2/cqupt/student",
    data: "?year=2015&page=" + startPage,
    success:function(n){  
      var n1 = JSON.parse(n)
      var str = JSON.stringify(n1.result)     
      var transFormation = str.replace(/{/g, "<br>").replace(/,{"/g, "").replace(/"}/g, "</br>").replace("[", "").replace("]", "").replace(/class_num/g, "班级代号").replace(/gender/g, "性别").replace(/major/g, "专业").replace(/name/g, "姓名").replace(/"/g, "").replace(/,/g, "&nbsp;&nbsp;&nbsp;").replace(/student_num/g, "学号")
      var first = document.getElementById("first")
      
      first.innerHTML = transFormation
    },
    error:function(){
        alert("这里有一些难以言喻的错误发生了呢")
    }
})