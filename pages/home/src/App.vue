<template>
  <div>
    <input type="text" v-model="msg">
    <WSelect></WSelect>
  </div>
</template>
<script type="text/babel">
  import WSelect from 'components/Select'
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    },
    watch: {
      msg: {
        handler (val) {
          console.log('111', val)
        }
      }
    },
    components: {
      WSelect
    },

    beforeUpdate () {
      console.log('---beforeUpdate')
    },

    updated () {
      console.log('---updated')
    },

    mounted () {
      this.$watch('msg', function (val) {
        console.log('222', val)
      }, {
        sync: true
      })
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
</style>