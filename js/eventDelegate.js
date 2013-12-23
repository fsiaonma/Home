var EventDelegate = EventDelegate || {
	delegateList: [],

	init: function() {
		var self = this;

		document.body.addEventListener("click", function(e) {
			self.delegateList.map(function(item) {
				var target = e.target;
				(function(t) {
					if(item.id === t.id) {
						item.callback(e);
					} else if (t.parentNode) {
						arguments.callee(t.parentNode);
					}
				})(target);
			});
		}, true);

		window.addEventListener("hashchange", function(e) {
			Router.handleHash(e.newURL);
		});

		window.addEventListener("load", function() {
			HomeView.renderEl("welcome");
		});
	},

	bind: function(id, callback) {
		this.delegateList.push({
			id: id,
			callback: callback
		})
	},

	remove: function(id) {
		for (var i = 0, len = this.delegateList.length; i < len; ++i) {
			if (this.delegateList[i].id === id) {
				var temp = this.delegateList[i];
				this.delegateList[i] = this.delegateList[len - 1];
				this.delegateList[len - 1] = temp;
				this.delegateList.pop();
			}
		}
	}
}

