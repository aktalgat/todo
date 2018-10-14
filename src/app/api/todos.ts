const getTodoArr = () => {
  const todoJson = localStorage.getItem('todo') || '[]';
  return JSON.parse(todoJson);
};

export const get = () => {
  try {
    const titleJson = localStorage.getItem('title') || '';
    const todo = getTodoArr();
    return { response: { list: todo, title: titleJson } };
  } catch (e) {
    return { error: e.message };
  }
};

export const set = (todo: any) => {
  try {
    let todoArr = getTodoArr();
    todo.id = todoArr.length;
    todoArr.push(todo);
    localStorage.setItem('todo', JSON.stringify(todoArr));
    return { response: { todo, list: todoArr } };
  } catch (e) {
    return { error: e.message };
  }
};

export const check = (todo: any) => {
  try {
    let todoArr = getTodoArr();
    let newArr = todoArr.map((item: any) => {
      if (item.id == todo.id) {
        return { ...todo };
      }
      return item;
    });
    localStorage.setItem('todo', JSON.stringify(newArr));
    return { response: { todo, list: newArr } };
  } catch (e) {
    return { error: e.message };
  }
};

export const remove = (todo: any) => {
  try {
    let todoArr = getTodoArr();
    let newArr = todoArr
      .filter((item: any) => item.id != todo.id)
      .map((item: any, index: number) => {
        item.id = index;
        return item;
      });
    localStorage.setItem('todo', JSON.stringify(newArr));
    return { response: { todo, list: newArr } };
  } catch (e) {
    return { error: e.message };
  }
};

export const editTodo = (todo: any) => {
  try {
    let todoArr = getTodoArr();
    let newArr = todoArr.map((item: any) => {
      if (item.id == todo.id) {
        return { ...todo };
      }
      return item;
    });
    localStorage.setItem('todo', JSON.stringify(newArr));
    return { response: { todo, list: newArr } };
  } catch (e) {
    return { error: e.message };
  }
};

export const editTitle = (data: any) => {
  try {
    localStorage.setItem('title', data.title);
    return { response: { title: data.title } };
  } catch (e) {
    return { error: e.message };
  }
};
