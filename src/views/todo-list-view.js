var TodoView = Backbone.View.extend({
  initialize: function(options) {
    this.todos = options.todos;
    this.el = options.el;
    var todoTemplateHtml = $('#templates .todo').html();
    this.template = _.template(todoTemplateHtml)
    for (var i = 0; i < this.todos.length; i++) {
      this.listenTo(this.todos[i], 'change:complete', this.cleanCompletedTodos)
    }
  },
  render: function() {
    $(this.el).empty();
    for (var i = 0; i < this.todos.length; i++) {
        var newHtml = this.template(this.todos[i].toJSON());
        $(this.el).append(newHtml);
    }
  },
  cleanCompletedTodos: function() {
    var newTodos = [];
    for (var i = 0; i < this.todos.length; i++) {
      if (!this.todos[i].get("complete")) {
        newTodos.push(this.todos[i]);
      }
    }
    this.todos = newTodos;
    this.render();
  },
  markAsComplete: function(e) {
    var listParent = $(e.currentTarget).parents('li');
    var index = $('.todos').children().index(listParent);
    this.todos[index].set("complete", true);
  },
  events: {
    'change .complete': 'markAsComplete'
  }
})

