
// ##[37个JavaScript基本面试问题和解答](https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651554124&idx=1&sn=1db5378dfcab8e4477e930a729c74edc&chksm=8025568db752df9b8430eadceb1531733b187e081097f91388a212d7269c7886fcbdec07cbd9&mpshare=1&scene=23&srcid=0511ggkCXAaeloX3FQKLZ9RG#rd)
//1.变量声明，可以参考MDN
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var
function test() {

    var a = b = 1;
    // console.log(a,b);
}

test();

function testa() {

    var c = 1, d = 2;
    console.log(c, d);
}

testa();



//2.考虑下面的两个函数。他们都会返回同样的值吗？为什么或者为什么不？
function foo1() {
    return {
        bar: "hello"
    };
}

function foo2() {

    return

    {
        bar: "hello"
    };
}

foo1();//Object {bar: "hello"}
foo2();//undefined
// 原因与JavaScript中分号在技术上是可选的事实有关（尽管忽略它们通常是非常糟糕的形式）。
// 因此，在foo2()中遇到包含return语句的行（没有其他内容）时，会在return语句之后立即自动插入分号。



//3. iframe有那些优缺点？
//  iframe的优点：
// 1.iframe能够原封不动的把嵌入的网页展现出来。
// 2.如果有多个网页引用iframe，那么你只需要修改iframe的内容，就可以实现调用的每一个页面内容的更改，方便快捷。
// 3.网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用iframe来嵌套，可以增加代码的可重用。
// 4.如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由iframe来解决。
// iframe的缺点：
// 1.会产生很多页面，不容易管理。
// 2.iframe框架结构有时会让人感到迷惑，如果框架个数多的话，可能会出现上下、左右滚动条，会分散访问者的注意力，用户体验度差。
// 3.代码复杂，无法被一些搜索引擎索引到，这一点很关键，现在的搜索引擎爬虫还不能很好的处理iframe中的内容，所以使用iframe会不利于搜索引擎优化。
// 4.很多的移动设备（PDA 手机）无法完全显示框架，设备兼容性差。
// 5.iframe框架页面会增加服务器的http请求，对于大型网站是不可取的。 分析了这么多，现在基本上都是用Ajax来代替iframe，所以iframe已经渐渐的退出了前端开发。


//4.将类数组/可遍历的对象转为数组
// es5写法
var aa = { '0': 'a', '1': 'b', length: 2 };
Array.prototype.splice.call(aa);
// es6写法
Array.from(aa);


// 3.find和findIndex()
debugger
[1, 2, 3, 4].find(a => a == 4);
[1, 2, 3, NaN].find(a => Object.is(a, NaN));
// 4
[1, 2, 3, 4].findIndex(a => a == 3);

[1, 2, 3, NaN].indexOf(1);

// 4.Array.prototype.map和Array.prototype.filter
var a = [1, 2, 3];
var b = a.map(d => { return d * 2; });

var c = [1, 2, 3];
var d = c.filter((item, index) => {
    if (item == 2 || index == 2)
        return item;
}); 
