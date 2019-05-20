import vue from "vue";
import vuex from "vuex";
vue.use(vuex)

var state={
organ_id:""
}

var mutations={
  showId(state,n){
      state.organ_id=n
  }
}

export default new vuex.Store({
    state,
    mutations
})