/**
 * js判断中英文字符并计算实际字符串长度的5种方法
 * @authors Your Name (you@example.org)
 * @date    2017-08-31 21:33:53
 * @version $Id$
 */

/计算字符串长度(英文占1个字符，中文汉字占2个字符)
方法一：
[javascript] view plain copy 在CODE上查看代码片派生到我的代码片
String.prototype.gblen = function() {    
    var len = 0;    
    for (var i=0; i<this.length; i++) {    
        if (this.charCodeAt(i)>127 || this.charCodeAt(i)==94) {    
             len += 2;    
         } else {    
             len ++;    
         }    
     }    
    return len;    
}    
方法二：
[javascript] view plain copy 在CODE上查看代码片派生到我的代码片
function strlen(str){  
    var len = 0;  
    for (var i=0; i<str.length; i++) {   
     var c = str.charCodeAt(i);   
    //单字节加1   
     if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {   
       len++;   
     }   
     else {   
      len+=2;   
     }   
    }   
    return len;  
}  
方法三：
[javascript] view plain copy 在CODE上查看代码片派生到我的代码片
var jmz = {};  
jmz.GetLength = function(str) {  
    ///<summary>获得字符串实际长度，中文2，英文1</summary>  
    ///<param name="str">要获得长度的字符串</param>  
    var realLength = 0, len = str.length, charCode = -1;  
    for (var i = 0; i < len; i++) {  
        charCode = str.charCodeAt(i);  
        if (charCode >= 0 && charCode <= 128) realLength += 1;  
        else realLength += 2;  
    }  
    return realLength;  
};  
方法四：
[javascript] view plain copy 在CODE上查看代码片派生到我的代码片
var l = str.length;   
var blen = 0;   
for(i=0; i<l; i++) {   
if ((str.charCodeAt(i) & 0xff00) != 0) {   
blen ++;   
}   
blen ++;   
}  
方法五：
把双字节的替换成两个单字节的然后再获得长度
[javascript] view plain copy 在CODE上查看代码片派生到我的代码片
getBLen = function(str) {  
    if (str == null) return 0;  
    if (typeof str != "string"){  
        str += "";  
    }  
    return str.replace(/[^\x00-\xff]/g,"01").length;  