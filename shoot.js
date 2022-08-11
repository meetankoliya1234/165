AFRAME.registerComponent("bullets", {
    init: function(){
        this.shootBullet();
    },
    shootBullet: function(){
        window.addEventListener("keydown", (e) => {
            if (e.key === "z") {
                var bullet = document.createElement("a-entity");
      
                bullet.setAttribute("geometry", {
                    primitive: "sphere",
                    radius: 0.1,
                });
      
                bullet.setAttribute("material", "color", "black");
      
                var cam = document.querySelector("#camera-rig");
                pos = cam.getAttribute("position");
      
                bullet.setAttribute("position", {
                    x: pos.x,
                    y: pos.y,
                    z: pos.z
                });
      
                var camera = document.querySelector("#camera").object3D;
      
                var direction = new THREE.Vector3();
                camera.getWorldDirection(direction);
      
                bullet.setAttribute("velocity", direction.multiplyScalar(-30));
      
                var scene = document.querySelector("#scene");
      
                bullet.setAttribute("dynamic-body", {
                    shape: "sphere",
                    mass: "0",
                });

                scene.appendChild(bullet);

                var element = document.querySelector("#countOrge");
                var orgeLife = parseInt(element.getAttribute("text").value);

                var target = document.querySelectorAll(".enemy")

                bullet.addEventListener("collide", function(e) {
                  if(e.detail.body.el.id === target){
                    if(orgeLife > 0){
                      orgeLife -= 1;

                      element.setAttribute("text", {
                        value: orgeLife
                      });
                    }

                    if(orgeLife <=  0){
                      var txt = document.querySelector("#completed");

                      txt.setAttribute("visible", true);

                      var orgeEl = document.querySelectorAll(".enemy")

                      for(var i = 0; i < orgeEl.length; i++){
                        scene.removeChild(orgeEl[i]);
                      }
                    }
                  }
                });

                this.shootSound();
            }
        });
    },
      shootSound: function () {
        var entity = document.querySelector("#sound1");
        entity.components.sound.playSound();
      },
});