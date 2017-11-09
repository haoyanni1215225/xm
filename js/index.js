//家电
{
	let jdwz=document.querySelectorAll('.jd-wz2 a');
	// console.log(jdwz);
	let jd=document.querySelectorAll('.jd-bottom');
	jdwz.forEach(function(val,index){
		val.onmouseover=function(){
			for(let i=0;i<jdwz.length;i++){
				jdwz[i].classList.remove('active');
				jd[i].style.display='none';
			}
			val.classList.add('active');
			jd[index].style.display='block';
		}
		
	});
}
// 智能下面的
{	
	let family=document.querySelectorAll('.family');

	function fn(ele){
		let znwz=ele.querySelectorAll(".zn-wz2 a");
		let zn=ele.querySelectorAll(".btt");
		znwz.forEach(function(val,index){
			val.onmouseover=function(){
			
				for(let i=0;i<znwz.length;i++){

					znwz[i].classList.remove("active");
					zn[i].style.display="none";
				}
				val.classList.add("active");
				zn[index].style.display="block";
			}
		});
	}
	
	for(let i=0;i<family.length;i++){
				fn(family[i]);
	}
}



//内容部分
{


    function nrqh(parent) {
        let neiObj = parent.querySelector(".waibox");
        let acirs = parent.querySelectorAll(".neirong-bottom-circle .circlea");
        let l = acirs.length;
        let btnLObj = parent.querySelector(".neirong-btn .btnL");
        let btnRObj = parent.querySelector(".neirong-btn .btnR");
        acirs.forEach(xuanxk);
        function xuanxk(ele, index) {
            ele.onclick = function () {
                for (let i = 0; i < l; i++) {
                    acirs[i].classList.remove("active1");
                }
                ele.classList.add("active1");
                neiObj.style.marginLeft = -310 * index + "px";
                now = index;
            }
        }

        let now = 0;
        btnRObj.onclick = function () {
            now++;
            if (now == l) {
                now = l - 1;
            }
            for (let i = 0; i < l; i++) {
                acirs[i].classList.remove("active1");
            }
            acirs[now].classList.add("active1");

            neiObj.style.marginLeft = -310 * now + "px";
        }
        btnLObj.onclick = function () {
            now--;
            if (now == -1) {
                now = 0;
            }
            for (let i = 0; i < l; i++) {
                acirs[i].classList.remove("active1");
            }
            acirs[now].classList.add("active1");

            neiObj.style.marginLeft = -310 * now + "px";
        }
    }

    let neirXiao = document.querySelectorAll(".neirongXiao");
    for (let i = 0; i < neirXiao.length; i++) {
        nrqh(neirXiao[i]);
    }
}
