<template>
  <div id="rpmTest">
    <input
      type="button"
      id="startButton"
      value="Avatar"
      @click="makeAvatar()"
      v-if="!iframeCreated"
    />
    <input
      class="closeRPMEditModal"
      type="button"
      id="closeModal"
      value="X"
      @click="closeModal()"
      v-if="iframeCreated"
    />
    <div class="main-rpm-container" v-show="iframeCreated">
      <div class="rpm-header"></div>
      <div id="avatarContainer"></div>
      <div class="rpm-footer"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

//@Component
export default class RPMAvatar extends Vue {
  iframeCreated = false;
//   receiveMessage(event: MessageEvent): void {
//     if (event.origin == "https://fullbody.readyplayer.me") {
//       document.getElementById("iframe")?.remove();
//       setTimeout(() => {
//         this.$unity?.sendAvatarUrlTest(event.data);
//         this.iframeCreated = false;
//       }, 1000);
//     }
//   }

  closeModal(): void {
    document.getElementById("iframe")?.remove();
    this.iframeCreated = false;
  }

  makeAvatar(): void {
    const iframeAttributes = {
      id: "iframe",
      src: "https://fullbody.readyplayer.me/",
      className: "iframeContent",
      allow: "camera *; microphone *",
      style: "width: 100vw; height: 80vh; border: none;"
    };
    let iframe = document.createElement("iframe");
    document
      .getElementById("avatarContainer")
      ?.appendChild(
        Object.assign(iframe, Object.assign(iframe, iframeAttributes))
      );
    this.iframeCreated = true;
  }

//   mounted(): void {
//     window.addEventListener("message", this.receiveMessage, false);
//   }
}
</script>

<style lang="scss" scoped>
#rpmTest {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
#startButton {
  position: absolute;
  z-index: 999;
  top: 0;
  left: 50px;
  width: 150px;
  height: 30px;
  background: rgb(241, 162, 15);
  color: black;
  font-weight: bold;
  cursor: pointer;
}
#closeModal {
  position: absolute;
  z-index: 100;
  top: 10px;
  right: 33px;
  width: 20px;
  height: 20px;
  background: salmon;
  color: black;
  font-weight: bold;
  cursor: pointer;
}

#avatarContainer {
  height: 80vh;
  background: white;
}

.main-rpm-container {
  width: 100%;
}

.rpm-header,
.rpm-footer {
  height: 10vh;
  width: 100%;
  background: salmon;
}

.rpm-footer {
  background: salmon;
}
</style>
