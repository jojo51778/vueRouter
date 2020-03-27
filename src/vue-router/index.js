import install from './install'
import createMatcher from './create-matcher'
import HashHistory from './history/hash'

class VueRouter {
  constructor(options) {
    // matcher 匹配器，处理树形结构，将他扁平化

    // 返回两个方法，addRoute match 匹配对应结果
    this.matcher = createMatcher(options.routes || [])
    // console.log(options) // 需要进行数据格式化

    this.history = new HashHistory(this)

    //
  }
  init(app) { //app最顶层的vue实例
    console.log(app)
  }
}
VueRouter.install = install

export default VueRouter
