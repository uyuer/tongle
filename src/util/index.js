import Vue from 'vue'
Vue.directive('drag',{
	inserted:function (el, binding) {
        let oDiv = el;   //当前元素
        let self = this;  //上下文
        oDiv.onmousedown = function (e) {
        	console.log('mousedown')
         //鼠标按下，计算当前元素距离可视区的距离
            let disX = e.clientX - oDiv.offsetLeft;
            let disY = e.clientY - oDiv.offsetTop;

            document.onmousemove = function (e) {
            	console.log('move')
              //通过事件委托，计算移动的距离 
                let l = e.clientX - disX;
                let t = e.clientY - disY;
              //移动当前元素  

                // oDiv.style.transform = 'translateX('+l+'px)';
                oDiv.style.left = l + 'px';
                oDiv.style.top = t + 'px';
                 //将此时的位置传出去
                // binding.value({x:e.pageX,y:e.pageY})
            };
            oDiv.onmouseup = function (e) {
            	console.log('mouseup')
            
                document.onmousemove = null;
                document.onmouseup = null;
            };
        };
    }
});
