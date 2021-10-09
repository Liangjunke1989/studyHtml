//定时器
function myalert(){
    alert("起床了！！！");
}

//创建只执行一次的定时器
var timer01 = setTimeout(myalert,2000);//第一个参数：函数名称，第二个参数：间隔时间毫秒

//关闭只执行一次的定时器
clearTimeout(timer01);

//创建反复执行的定时器
var timer02 = setInterval(myalert,2000);

//关闭反复执行的定时器
clearInterval(timer02);


