<template>
  <header>
    <h6 id="title"><img id="app-icon" src="/favicon.ico" alt="teal"> <a href="..">teal</a> joystick</h6>
    <p id="info_text"><a href="http://www.teall.info/2019/03/joystick-visualizer.html">More info and help</a></p>
    <div id="seria_name"></div>

    <nav>
      <button id="btn_joysticks">joysticks</button>
      <button id="btn_settings">settings</button>
      <button id="btn_clear">clear</button>
      <button id="btn_load">load</button>
      <button id="btn_save">save</button>
      <button id="btn_run">chromakey</button>
    </nav>
    <p id="loading_text">Loading libraries, please wait a bit...</p>
  </header>
</template>

<script>
export default {
  name: "ControlPanel"
}
</script>

<style scoped>
header {
  position: relative;
  color: white;
  padding: 15px 15px 0;
  z-index: 10;
}

nav {
  float: right;
  position: absolute;
  right: 5px;
  top: 10px;
}

nav button {
  font-family: Georgia, serif;
  font-size: 100%;
  padding: 3px 10px;
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.0);
  margin-left: 10px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  height: 28px;
  text-transform: capitalize;
  vertical-align: top;
}

#title {
  display: inline-block;
  font-size: 100%;
  font-weight: normal;
  margin: 0 2em 0 0;
}

#app-icon {
  vertical-align: middle;
}

#seria_name {
  color: lightgray;
  position: absolute;
  left: 12em;
  top: 15px;
}
</style>