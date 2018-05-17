//MDN参考：
// https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest
//构造原生XMLHTTpRequest（ajax）对象
function createXMLHttpRequest() {

    var xmlRequest = null;
    if (window.XMLHttpRequest) {

        xmlRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) {

        try {

            xmlRequest = new ActiveXObject('MSXML2.XMLHTTP');
            if (!xmlRequest) xmlRequest = new ActiveXObject('Microsoft.XMLHTTP');
        } catch (error) {

        }
    }

    return xmlRequest;
}

//get方法
function get() {

    var xmlRequest = new createXMLHttpRequest();
    debugger;
    if (xmlRequest) {
        // readyState值说明  
        // 0	UNSENT (未打开)	open()方法还未被调用.
        // 1	OPENED  (未发送)	open()方法已经被调用.
        // 2	HEADERS_RECEIVED (已获取响应头)	send()方法已经被调用, 响应头和响应状态已经返回.
        // 3	LOADING (正在下载响应体)	响应体下载中; responseText中已经获取了部分数据.
        // 4	DONE (请求完成)	整个请求过程已经完毕.

        // status值说明  
        // 200:成功  
        // 404:没有发现文件、查询或URl  
        // 500:服务器产生内部错误  
        xmlRequest.open('GET', 'http://www.baidu.com', true);
        xmlRequest.onreadystatechange = function () {
            debugger;
            if (xmlRequest.readyState == 4 || xmlRequest.stats == 200) {

                xmlRequest.responseText;
            }
        }

        xmlRequest.send(null);

    }
}


function post() {

    var req = createXMLHttpRequest();
    if (req) {
        req.open("POST", "http://www.baidu.com/", true);
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=gbk;");
        req.send("keywords=手机&name='aa'");
        req.onreadystatechange = function () {

            debugger;
            if (req.readyState == 4) {
                if (req.status == 200) {
                    alert("success");
                } else {
                    alert("error");
                }
            }
        }
    }
}

// get();
// post();


