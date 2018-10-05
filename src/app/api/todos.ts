export const get = () => {
  try {
    const todoJson = localStorage.getItem('todo') || '[]';
    const titleJson = localStorage.getItem('title') || '';
    console.log('todos: {}', todoJson);
    console.log('title: {}', titleJson);
    const todo = JSON.parse(todoJson);
    return { response: { list: todo, title: titleJson } };
  } catch (e) {
    return { error: e.message };
  }
};

export const set = (todo: any) => {
  try {
    const todoJson = localStorage.getItem('todo') || '[]';
    let todoArr = JSON.parse(todoJson);
    todo.id = todoArr.length;
    todoArr.push(todo);
    localStorage.setItem('todo', JSON.stringify(todoArr));
    return {response: {todo, list: todoArr}};
  } catch (e) {
    return {error: e.message};
  }
};
