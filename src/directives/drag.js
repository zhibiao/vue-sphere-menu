export default {
  install: (app, options) => {
    app.directive("drag", {
      mounted(el, binding) {
        let x0 = 0,
          y0 = 0,
          dx = 0,
          dy = 0;

        const down = (event) => {
          x0 = event.clientX;
          y0 = event.clientY;
          el.style.setProperty("transition", "all 0s");
        };

        const move = (event) => {
          const x = dx + (event.clientX - x0);
          const y = dy + (event.clientY - y0);
          el.style.transform = `translate(${x}px, ${y}px)`;
        };

        const up = (event) => {
          dx += event.clientX - x0;
          dy += event.clientY - y0;
          el.style.removeProperty("transition");
        };

        const listeners = new Map();
        binding.listeners = listeners;

        listeners.set("touchstart", () => {
          const listeners = new Map();

          listeners.set("touchstart", (event) => {
            down({
              clientX: event.changedTouches[0].clientX,
              clientY: event.changedTouches[0].clientY,
            });
          });

          listeners.set("touchmove", (event) => {
            move({
              clientX: event.changedTouches[0].clientX,
              clientY: event.changedTouches[0].clientY,
            });
          });

          listeners.set("touchend", (event) => {
            up({
              clientX: event.changedTouches[0].clientX,
              clientY: event.changedTouches[0].clientY,
            });

            listeners.forEach((listener, event) => {
              document.removeEventListener(event, listener);
            });
          });

          listeners.forEach((listener, event) => {
            document.addEventListener(event, listener);
          });
        });

        listeners.set("mousedown", () => {
          const listeners = new Map();

          listeners.set("mousedown", (event) => {
            down({ clientX: event.clientX, clientY: event.clientY });
          });

          listeners.set("mousemove", (event) => {
            move({ clientX: event.clientX, clientY: event.clientY });
          });

          listeners.set("mouseup", (event) => {
            up({ clientX: event.clientX, clientY: event.clientY });

            listeners.forEach((listener, event) => {
              document.removeEventListener(event, listener);
            });
          });

          listeners.forEach((listener, event) => {
            document.addEventListener(event, listener);
          });
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
