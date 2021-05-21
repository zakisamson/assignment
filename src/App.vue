<template>
  <div id="app">
    <ComponentB />
    <div class="btn-container">
      <button class="btn cancel">Cancel</button>
      <button class="btn draft">Save as Draft</button>
      <button class="btn submit">Submit</button>
    </div>
  </div>
</template>

<script>
import ComponentB from './components/ComponentB'

export default {
  name: 'App',
  components: {
    ComponentB
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn-container{
  float: right;
}

.btn{
  padding: 15px;
  margin-inline: 10px;
  border-radius: 5px;
  border: 0.5px solid lightgray;
}

.btn.cancel{
  border: none;
  background-color: transparent;
}

.btn.draft{
  background-color: whitesmoke;
}

.btn.submit{
 background-color: #19BDBE;
 color: white;
 padding-inline: 75px;
}

</style>
