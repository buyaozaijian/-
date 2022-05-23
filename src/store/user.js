const key = 'user'
const user = {
    state(){
        user
    },
    getters: {
        getUser: function (state) {
            if (!state.user) {
                state.user = JSON.parse(localStorage.getItem(key))
            }
            return state.user
        }
    },
    mutations: {
        /* 存数据，将 JSON 格式的数据转化为字符串形式存储到以 localStorage 中以 `user` 为键的值中 */
        $_setStorage (state, value) {
            state.user = value
            localStorage.setItem(key, JSON.stringify(value))
        },
        /* 清空数据，将状态恢复初始值，并从 localStorage 中移除对象 */
        $_removeStorage (state) {
            state.user = null
            localStorage.removeItem(key)
        }
    },
    /* 定义调用 mutations 的方法，向上提供调用接口 */
    actions: {
        /* 调用 _setStorage 方法存储数据 */
        saveUserInfo({ commit }, data) {
            commit('$_setStorage', data)
        },
        /* 调用 _removeStorage 方法清空数据 */
        clearUserInfo({ commit }) {
            commit('$_removeStorage');
        }
    }
};
export default user;