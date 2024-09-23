// plugins/piniaPersist.js
export function piniaPersistPlugin({ store }) {
  //  восстановить состояние из Local Storage
  const storedState = localStorage.getItem(store.$id);

  if (storedState) {
    store.$patch(JSON.parse(storedState));
  }

  // Слушать изменения в хранилище и сохранять их в Local Storage
  store.$subscribe((mutation, state) => {
    localStorage.setItem(store.$id, JSON.stringify(state));
  });
}
