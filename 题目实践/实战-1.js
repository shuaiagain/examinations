
// ##[37个JavaScript基本面试问题和解答](https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651554124&idx=1&sn=1db5378dfcab8e4477e930a729c74edc&chksm=8025568db752df9b8430eadceb1531733b187e081097f91388a212d7269c7886fcbdec07cbd9&mpshare=1&scene=23&srcid=0511ggkCXAaeloX3FQKLZ9RG#rd)
//1.变量声明，可以参考MDN
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var
function test () {

    var a = b = 1;
    // console.log(a,b);
}

test();
// debugger;

function testa () {

    var c=1 ,d = 2;
    console.log(c,d);
}

testa();
debugger;


//2.考虑下面的两个函数。他们都会返回同样的值吗？为什么或者为什么不？
function foo1(){
    return {
        bar: "hello"
    };
  }
  
  function foo2(){
  
    return
  
    {
        bar: "hello"
    };
  }

foo1();//Object {bar: "hello"}
foo2();//undefined
// 原因与JavaScript中分号在技术上是可选的事实有关（尽管忽略它们通常是非常糟糕的形式）。
// 因此，在foo2()中遇到包含return语句的行（没有其他内容）时，会在return语句之后立即自动插入分号。