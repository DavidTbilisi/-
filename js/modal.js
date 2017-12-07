var mBox = (function() {

    var view = (function() {

    	var dom = {
        modalBackground : document.querySelector(".m-bg"),
        modalTriger : document.querySelectorAll(".m-triger"),
        modalWrap : document.querySelector(".m-wrap"),
				formModalLocation: function (){ return document.querySelectorAll(".location")}
    	};

 return {
 	dom:dom
 }
 })();


    var controller = (function(v) {


    	// FN 
    		function append(selector,element,content) {
				var node = document.createElement(element);
				node.classList.add("m-close-btn");
				node.classList.add("fa");
				node.classList.add("fa-3x");
				node.classList.add("fa-window-close");
				var textnode = document.createTextNode(content);
				node.appendChild(textnode);                              
				var a_to = document.querySelector(selector);
				a_to.insertBefore(node,a_to.children[0]);
    		}
			function asigneValue(val) {
    			if ( document.querySelectorAll('.location') > 1 ) {
					document.querySelectorAll('.location').forEach(function (item) {
						item.value = val;
					})
                } else {
                    document.querySelector('.location').value = val;
				}
            }

    		function mClose() {
					v.dom.modalBackground.classList.remove('m-show');
					v.dom.modalBackground.classList.add('m-hide');
    		}
    		function mOpen(e) {
					v.dom.modalBackground.classList.add('m-show');
					v.dom.modalBackground.classList.remove('m-hide');
					var loc = e.target.dataset.location || 'not assigned';
                asigneValue(loc);
    		}

    	// eventListeners
            document.querySelector("body").addEventListener("click",function (e) {
            	// console.dir(e.target);
            	if( e.target.className.indexOf('m-close-btn') >= 0){
            		mClose();
            	} else if( e.target.className.indexOf('m-triger') >= 0){
                    mOpen(e);
                } else if ( e.target.className.indexOf('m-bg') >= 0) {
                    mClose();
				} else{
            		// console.log(e.target.classList)
				}
            });


            return{
            	append:append
            }

    })(view);

    return {
        name: "modal box",
        author: "david chincharashvili",
        view: view,
        controller: controller
    }
})();

mBox.controller.append(".m-wrap","i", "");
