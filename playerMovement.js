AFRAME.registerComponent("player-movement", {
    init: function () {
      this.walk();
    },
    walk: function () {
      window.addEventListener("keydown", (e) => {
        if (
          e.key === "ArrowUp" ||
          e.key === "ArrowRight" ||
          e.key === "ArrowLeft" ||
          e.key === "ArrowDown" ||
          e.key === "w" ||
          e.key === "a" ||
          e.key === "s" ||
          e.key === "d"
        ) {
          var entity = document.querySelector("#sound2");
          entity.components.sound.playSound();
        }
      });
    },
  });
  