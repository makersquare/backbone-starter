var TodoView = Backbone.View.extend({
  initialize: function(options) {
    this.todos = options.todos;
    this.el = options.el;
    this.newTodoForm = options.newTodoForm;
    var todoTemplateHtml = $('#templates .todo').html();
    this.template = _.template(todoTemplateHtml)
    for (var i = 0; i < this.todos.length; i++) {
      this.listenTo(this.todos[i], 'change:complete', this.cleanCompletedTodos)
    }
  },
  render: function() {
    $(this.el).empty();
    $(this.el).append(this.newTodoForm);
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
    this.todos[index - 2].set("complete", true);
  },

  addTodo: function(e) {
    e.preventDefault();
    var name = $('.task-name').val();
    var description = $('.task-description').val();
    var newTodo = new Todo({
      taskName: name,
      description: description
    })
    this.todos.push(newTodo)
    this.listenTo(newTodo, 'change:complete', this.cleanCompletedTodos)
    this.render();
  },

  events: {
    'change .complete': 'markAsComplete',
    'submit .new-todo-form': 'addTodo'
  }
})

