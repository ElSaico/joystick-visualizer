<script setup>
import ControlPanel from './components/ControlPanel.vue'
import Widgets from './components/Widgets.vue'
</script>

<template>
  <main>
    <ControlPanel />
    <div id="infohelp">
      Double-click to add a widget to the screen<br/>
      Press ESC to exit chromakey
    </div>
    <span id="ruler" class="ui-widget ui-widget-content"></span>
    <Widgets />
  </main>
</template>

<style scoped>
#infohelp {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 190px;
  color: white;
  font-size: 150%;
  display: none;
}
</style>
