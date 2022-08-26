function analytics() {
  let counter = 0;
  let isDestroyed = false;

  const listen = () => counter++;

  document.addEventListener('click', listen);

  return {
    destroyAnalytics() {
      document.removeEventListener('click', listen);
      isDestroyed = true;
    },

    getClickAnalytics() {
      if (flagDestroy) {
        return `Analytics has been destroyed. Total clicks = ${counter}`;
      }
      return counter;
    },
  };
}
window.analytics = analytics();
