class CreateTodo {
  todo = {};

  constructor(name) {
    this.todo = {
      name,
      completed: false,
      id: (Math.random() * 100 + 1).toFixed()
    };
  }

  get getTodo() {
    return this.todo;
  }
}

export default CreateTodo;
