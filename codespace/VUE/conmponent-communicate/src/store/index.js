import {createStore}  from 'vuex'

const store = createStore({
    state(){    //data 数据源  公共的
        return{
            lists:['html','css','js']
        }
    },
    mutations:{  //methods  方法
        addLists(state,msg){   //mutations  中定义了方法，天生具有一个形参，代表state数据源
            state.lists.push(msg)
        }
    }
})

export default store