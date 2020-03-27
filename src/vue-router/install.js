const install = (Vue) => {
  Vue.mixin({
    beforeCreate() {
      if(this.$options.router) {
        this._routerRoot = this
        this._router = this.$options.router

        //路由初始化
        this._router.init(this)
      } else {
        // 子组件都有一个——routerRoot属性可以访问到最顶层的根实例
        this._routerRoot = this.$parent && this.$parent._routerRoot
        // this._routerRoot._router
      }
    }
  })
}

export default install