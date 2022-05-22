<template>
  <div class="menu" v-drag>
    <div class="menu-item" v-tap="onTap">
      <div class="menu-item-wrapper">
        <img
          class="menu-item-icon"
          src="~@/assets/logo.png"
          draggable="false"
        />
        <div class="menu-item-text">1</div>
      </div>
    </div>

    <div class="menu-item" v-tap="onTap">
      <div class="menu-item-wrapper">
        <img
          class="menu-item-icon"
          src="~@/assets/logo.png"
          draggable="false"
        />
        <div class="menu-item-text">2</div>
      </div>
    </div>

    <div class="menu-item" v-tap="onTap">
      <div class="menu-item-wrapper">
        <img
          class="menu-item-icon"
          src="~@/assets/logo.png"
          draggable="false"
        />
        <div class="menu-item-text">3</div>
      </div>
    </div>

    <div class="menu-item" v-tap="onTap">
      <div class="menu-item-wrapper">
        <img
          class="menu-item-icon"
          src="~@/assets/logo.png"
          draggable="false"
        />
        <div class="menu-item-text">4</div>
      </div>
    </div>

    <div class="menu-item" v-tap="onTap">
      <div class="menu-item-wrapper">
        <img
          class="menu-item-icon"
          src="~@/assets/logo.png"
          draggable="false"
        />
        <div class="menu-item-text">5</div>
      </div>
    </div>

    <div class="menu-item" v-tap="onTap">
      <div class="menu-item-wrapper">
        <img
          class="menu-item-icon"
          src="~@/assets/logo.png"
          draggable="false"
        />
        <div class="menu-item-text">6</div>
      </div>
    </div>
    <div class="menu-item menu-item--primary" v-tap="onTap">
      <div class="menu-item-wrapper">
        <img
          class="menu-item-icon"
          src="~@/assets/logo.png"
          draggable="false"
        />
        <div class="menu-item-text"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
function onTap() {
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    item.classList.toggle("menu-item--extend");
  });
  const menu = document.querySelector(".menu");
  menu.classList.toggle("menu--extend");
}
</script>

<style scoped>
.menu {
  position: absolute;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  touch-action: none;
  background-color: rgba(219, 223, 227, 0.5);
  transition: all 0.5s ease;
}

.menu-item {
  position: absolute;
  width: 100px;
  height: 100px;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center center;
  transition: all 0.5s ease;
}

.menu-item--primary {
  width: 120px;
  height: 120px;
  background-color: rgb(153, 150, 148);
  --rotateZ: 360deg;
  --translateX: 0px;
}

.menu-item-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.menu-item-icon {
  width: 32px;
  height: 32px;
}

.menu-item-text {
  color: white;
  text-align: center;
}

.menu-item:nth-child(1) {
  background-color: rgb(0, 169, 169);
  --rotateZ: 60deg;
  --translateX: 140px;
}

.menu-item:nth-child(1) .menu-item-wrapper {
  transform: rotateZ(-60deg);
}

.menu-item:nth-child(2) {
  background-color: rgb(154, 20, 158);
  --rotateZ: 120deg;
  --translateX: 140px;
}

.menu-item:nth-child(2) .menu-item-wrapper {
  transform: rotateZ(-120deg);
}

.menu-item:nth-child(3) {
  background-color: rgb(140, 255, 0);
  --rotateZ: 180deg;
  --translateX: 140px;
}

.menu-item:nth-child(3) .menu-item-wrapper {
  transform: rotateZ(-180deg);
}

.menu-item:nth-child(4) {
  background-color: rgb(0, 85, 255);
  --rotateZ: 240deg;
  --translateX: 140px;
}

.menu-item:nth-child(4) .menu-item-wrapper {
  transform: rotateZ(-240deg);
}

.menu-item:nth-child(5) {
  background-color: rgb(255, 230, 0);
  --rotateZ: 300deg;
  --translateX: 140px;
}

.menu-item:nth-child(5) .menu-item-wrapper {
  transform: rotateZ(-300deg);
}

.menu-item:nth-child(6) {
  background-color: rgb(193, 169, 150);
  --rotateZ: 360deg;
  --translateX: 140px;
}

.menu-item:nth-child(6) .menu-item-wrapper {
  transform: rotateZ(-360deg);
}

.menu--extend {
  width: 400px;
  height: 400px;
}

.menu-item--extend {
  transform: rotateZ(var(--rotateZ)) translateX(var(--translateX));
}
</style>
