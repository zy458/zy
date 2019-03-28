<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
<!--<template>
  <div id="app">
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <br><br>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
  </div>
</template>
<style>
#app {
 
}
</style>-->

	<!--<template>
    <RadioGroup v-model="phone">
        <Radio label="apple">
            <Icon type="logo-apple"></Icon>
            <span>Apple</span>
        </Radio>
        <Radio label="android">
            <Icon type="logo-android"></Icon>
            <span>Android</span>
        </Radio>
        <Radio label="windows">
            <Icon type="logo-windows"></Icon>
            <span>Windows</span>
        </Radio>
    </RadioGroup>
    <RadioGroup v-model="animal">
        <Radio label="金斑蝶"></Radio>
        <Radio label="爪哇犀牛"></Radio>
        <Radio label="印度黑羚"></Radio>
    </RadioGroup>
</template>
<script>
    export default {
        data () {
            return {
                phone: 'apple',
                animal: '爪哇犀牛'
            }
        }
    }
</script>
-->
