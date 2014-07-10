var TodoView = Backbone.View.extend({
  initialize: function(options) {
    this.todos = options.todos;
    this.el = options.el;
    var todoTemplateHtml = $('#templates .todo').html();
    this.template = _.template(todoTemplateHtml)
  },
  render: function() {
    $(this.el).empty();
    for (var i = 0; i < this.todos.length; i++) {
        var newHtml = this.template(this.todos[i].toJSON());
        $(this.el).append(newHtml);
    }
  }
})

