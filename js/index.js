window.onload=function () {
    let s = document.getElementById('oneee');
    s.onmouseenter = function () {
        s.style.color = "#00c1de";

    };
    s.onmouseleave = function () {
        s.style.color = "#ffffff";
    };
    let ssf = document.getElementById('ssf');                 //ul
    let ssd = ssf.getElementsByTagName('li');             //下标点集合
    let zuo=document.getElementsByClassName('leftbtn');      //左按钮
    let you=document.getElementsByClassName('rightbtn');       //右按钮
    let  wai=document.getElementsByClassName('firstpiqy');   //外边框
    let imga = document.getElementsByClassName("firstpiqyi"); //图片
    let imgs=document.getElementsByClassName('imgaa');
    let flag=true;
    console.log(imgs);
    let  w=616;
    console.log(w);
    let current=0;
    let next=0;
    ssd[0].style.background='aqua';
    you[0].onclick=function(){
        if (!flag){
            return;
        }
        flag=false;
        next++;
        if(next==imgs.length){
            next=0;
        }
        imgs[next].style.left=w+'px';
        animate(imgs[current],{left:-w});
        animate(imgs[next],{left:0},function () {
            flag=true;
        });
        console.log(imgs[current]);
        ssd[current].style.background='#fff';
        ssd[next].style.background='aqua';
        current=next;

    };
    zuo[0].onclick=function(){
        if (!flag){
            return;
        }
        flag=false;
        next--;
        if(next<0){
            next=imgs.length-1;
        }
        imgs[next].style.left=-w+'px';
        animate(imgs[current],{left:w});
        animate(imgs[next],{left:0},function() {
            flag=true;
        });
        console.log(imgs[current]);
        ssd[current].style.background='#fff';
        ssd[next].style.background='aqua';
        current=next;
        console.log(w);
        console.log(next);
    };
    for (let i=0;i<ssd.length;i++){
        ssd[i].onclick=function () {
            if (i==next){
                return;
            }
            next=i;
            if (next > current) {
                imgs[next].style.left=w+'px';
                animate(imgs[current],{left:-w});
                animate(imgs[next],{left:0});
                ssd[current].style.background='#fff';
                ssd[next].style.background='aqua';
                current=next;
            }else {
                imgs[next].style.left=-w+'px';
                animate(imgs[current],{left:w});
                animate(imgs[next],{left:0});
                ssd[current].style.background='#fff';
                ssd[next].style.background='aqua';
                current=next;
            }

        }
    }
    let adc=setInterval(function () {
        you[0].onclick();
    },3000);
    wai[0].onmouseenter=function () {
                clearInterval(adc);
            };
            wai[0].onmouseleave=function () {
                 adc=setInterval(function () {
                    you[0].onclick();
                },3000);

            };

    for (let i = 0; i < 4; i++) {
        ssd[i].onmouseenter=function () {
            ssd[i].style.background='aqua';

        };
        ssd[i].onmouseleave=function () {
            if (current!=i){
                ssd[i].style.background='#fff';
            } else {
                ssd[i].style.background='aqua';
            }


        }
    }









    // var zzz=40;
    // //初始化下标点
    // ssd[0].style.background='aqua';
    // //每隔3秒轮播
    // let adc=setInterval(function () {
    //     zzz++;
    //     for (let i = 0; i < 4; i++) {
    //
    //         imga[i].style.visibility = 'hidden';
    //         ssd[i].style.background='#fff';
    //     }
    //     imga[zzz%4].style.visibility = 'visible';
    //     ssd[zzz%4].style.background='aqua';
    // },3000)
    // //点击左边按钮
    // zuo[0].onclick=function () {
    //     console.log(zuo[0]);
    //     setTimeout(function () {
    //         zzz--;
    //         for (let i = 0; i < 4; i++) {
    //             imga[i].style.visibility = 'hidden';
    //             ssd[i].style.background='#fff';
    //         }
    //         imga[zzz%4].style.visibility = 'visible';
    //         ssd[zzz%4].style.background='aqua';
    //     },1)
    //     console.log(zzz);
    // };
    // //点击右边按钮
    // you[0].onclick=function () {
    //     console.log(zuo[0]);
    //     setTimeout(function () {
    //         zzz++;
    //         for (let i = 0; i < 4; i++) {
    //             imga[i].style.visibility = 'hidden';
    //             ssd[i].style.background='#fff';
    //         }
    //         imga[zzz%4].style.visibility = 'visible';
    //         ssd[zzz%4].style.background='aqua';
    //     },1)
    //     console.log(zzz);
    // };
    // //点击下标点
    // for (let i = 0; i < 4; i++) {
    //     ssd[i].onclick = function () {
    //         for (let i = 0; i < 4; i++) {
    //             imga[i].style.visibility = 'hidden';
    //             ssd[i].style.background='#fff';
    //         }
    //         imga[i].style.visibility = 'visible';
    //         ssd[i].style.background='aqua';
    //         zzz=40+i;
    //     };
    //
    // }
    // //下标点移入移出事件
    // for (let i = 0; i < 4; i++) {
    //     ssd[i].onmouseenter=function () {
    //         ssd[i].style.background='aqua';
    //
    //     };
    //     ssd[i].onmouseleave=function () {
    //         if ((zzz%4)!=i){
    //             ssd[i].style.background='#fff';
    //         } else {
    //             ssd[i].style.background='aqua';
    //         }
    //
    //
    //     }
    // }
    //        //鼠标悬停时停止轮播
    //     wai[0].onmouseenter=function () {
    //         clearInterval(adc);
    //     };
    //     wai[0].onmouseleave=function () {
    //
    //         adc=setInterval(function () {
    //             zzz++;
    //             for (let i = 0; i < 4; i++) {
    //                 imga[i].style.visibility = 'hidden';
    //                 ssd[i].style.background='#fff';
    //             }
    //             imga[zzz%4].style.visibility = 'visible';
    //             ssd[zzz%4].style.background='aqua';
    //         },3000)
    //     };
    //下一个轮播页
    let teblists = document.querySelectorAll('.ddddd>li');
    let teblistss = document.querySelectorAll('.ddddd>li>p');
    console.log(teblists);
    console.log(teblistss);
    for (let i=0;i<5;i++){
        teblists[i].onmouseenter = function () {
            for (let j = 0; j < 5; j++) {
                teblistss[j].style.display='none';

            }
            teblistss[i].style.display='-webkit-box';


        };
    }

}