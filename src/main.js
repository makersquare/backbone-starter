var todo1 = {
  taskName: "Do this",
  description: "Do this now yo"
}
var todo2 = {
  taskName: "Ruby",
  description: "Did you not finish ruby"
}
var todosView = new TodoView({
  todos: [todo1, todo2],
  el: $('.todos')
})

todosView.render();