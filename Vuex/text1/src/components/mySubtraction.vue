<template>
    <div>
        <p>当前最新的count值为:{{count}}</p>
        <h3>{{ showNum }}</h3>
        <button @click="btnHandler1">-1</button>
        <button @click="btnHandler2">-N</button>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapMutations(['sub', 'subN']), // ...展开运算符
    btnHandler1() {
      this.sub()
    },
    btnHandler2() {
      this.subN(3)
    }

  }
}
</script>
