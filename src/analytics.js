import * as $ from 'jquery';
function analytics() {
  let counter = 0;
  let isDestroyed = false;

  const listen = () => counter++;

  $(document).on('click', listen);

  return {
    destroyAnalytics() {
      $(document).off('click', listen);
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
