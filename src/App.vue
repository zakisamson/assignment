<template>
  <b-container fluid id="app">
    <component-b />
    <div class="btn-container">
      <button class="btn cancel">Cancel</button>
      <button class="btn draft">Save as Draft</button>
      <button class="btn submit">Submit</button>
    </div>
    
  </b-container>
</template>

<script>
import ComponentB from './components/ComponentB'


export default {
  name: 'App',
  components: {
    ComponentB,
  }
}
</script>

<style>
#app {
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
