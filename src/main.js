var todo1 = new Todo({
  taskName: "Do this",
  description: "Do this now yo"
})
var todo2 = new Todo({
  taskName: "Ruby",
  description: "Did you not finish ruby"
})
var todosView = new TodoView({
  todos: [todo1, todo2],
  el: $('.todos')
})

todosView.render();