export default {
  install: (app, options) => {
    app.directive("tap", {
      mounted(el, binding) {
        if (typeof binding.value != "function") {
          throw new Error("callback must be a function!");
        }

        let x0 = 0,
          y0 = 0;

        const listeners = new Map();
        binding.listeners = listeners;

        listeners.set("mousedown", (event) => {
          x0 = event.clientX;
          y0 = event.clientY;
        });

        listeners.set("mouseup", (event) => {
          const dx = event.clientX - x0,
            dy = event.clientY - y0;
          const offset = Math.sqrt(dx * dx + dy * dy);
          if (offset > 10) {
            return;
          }
          binding.value(event);
        });

        listeners.forEach((listener, event) => {
          el.addEventListener(event, listener);
        });
      },

      unmounted(el, binding) {
        const { listeners } = binding;

        listeners.forEach((listener, event) => {
          el.removeEventListener(event, listener);
        });
      },
    });
  },
};
