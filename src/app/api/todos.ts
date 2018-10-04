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

export const set = () => {
  console.log("Called set from todos api");
};
