var View = View || {
	Extend: function(obj) {
		// 事件绑定
		if (obj.events) {
			for (var i in obj.events) {
				(function(evtId) {
					EventDelegate.bind(evtId, function() {
						obj[obj.events[evtId]].call(obj);
					});
				})(i);
			};
		}
		// 渲染方法
		obj.renderEl = function(el) {
			if (obj.el) {
				document.getElementById(obj.el).innerHTML = "";
				document.getElementById(obj.el).innerHTML = document.getElementById(el).innerHTML;
			}
		}
		return obj;
	}
}