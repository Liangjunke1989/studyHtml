//for循环
// for (var i = 0; i <len; i++) {
//     ...
// }

//for循环的应用

//01、批量操作数组成员
// var aList=['a','b','c','d','e','f'];
// for (var i = 0; i < aList.length; i++) {
//     alert(aList[i])
// }

//02、数组去重
// window.onload=function (){
//     var aList02=[1,2,3,4,1,2,3,4,1,2,3,4,1,2,4,5];
//     var aList03=[];
//     for (var i = 0; i <aList02.length ; i++) {
//         if (aList02.indexOf(aList02[i])==i){   //第一次出现的索引值和当前元素的索引值一致，则未出现过该元素
//             aList03.push(aList02[i]);
//         }
//     }
//     alert(aList03);
// }

//03、将数组数据放在页面上
// <li>电影名称排行</li>
window.onload=function (){
   var aList66=['第一名','第二名','第三名','第四名','第五名'];
   var sTr='';
    for (var i = 0; i <aList66.length ; i++) {
        sTr+='<li>'+aList66[i]+'</li>';
    }
    var oList = document.getElementById('list');
    oList.innerHTML=sTr;
}