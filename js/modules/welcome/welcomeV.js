var HomeView = View.Extend({
	el: "target",

	events: {
		"toWelcome": "renderWelcome",
		"toProject": "renderProject",
		"toLearnning": "renderLearnning",
		"toBlog": "renderBlog",
		"toShare": "renderShare",
		"toAbout": "renderAbout"
	},

	renderWelcome: function() {
		this.renderEl("welcome");
	},

	renderProject: function() {
		this.renderEl("project");
	},

	renderLearnning: function() {
		this.renderEl("learnning");
	},

	renderBlog: function() {
		this.renderEl("blog");
	},

	renderShare: function() {
		this.renderEl("share");
	},

	renderAbout: function() {
		this.renderEl("about");
	}
});