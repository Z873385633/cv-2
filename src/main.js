let demo = document.querySelector('#demo');
let style = document.querySelector('#style');
let string = `
/*你好，我是一名前端新人
 *接下来我要加样式
 *我要加的样式是
 */
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来我把div编程一个八卦图
 *注意看好
 *首先，把div变成一个圆
 */
#div1{
     border-radius:50%;
     box-shadow:0 0 3px rgba(0,0,0,0.5);
     border:none;
 }
 /*接下来一黑一白
  *看好了
  */
 #div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
 }
/*加两个圆圈
 */
#div1::before{
    width:100px;
    height:100px;
    top:0;
    right:50%;
    transform:translateX(50%);
    border-radius:50%;
    background:black;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:white;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 26%, rgba(255,255,255,1) 26%, rgba(255,255,255,1) 100%);
}
/*
`;
let string2 = '';
let n = 0;

let step = () => {
    setTimeout(() => {

        if (string[n] === '\n') {
            string2 += '<br>';
        } else if (string[n] === ' ') {
            string2 += '&nbsp;';
        } else {
            string2 += string[n];
        }
        demo.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        demo.scrollTo(0, 99999);
        if (n < string.length - 1) {
            n = n + 1;
            step();
        } else {
        }
    }, 10)
}
step();