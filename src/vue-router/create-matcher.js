import createRouteMap from './create-route-map'
export default function createMatcher(routes) {
  //数组扁平化处理
  // pathList 表示所有路径的集合[/ /about /about/a /about/b]
  // pathMap {/: home, /about: about,/about/a: aboutA}
  let {pathList, pathMap} = createRouteMap(routes)
  console.log(pathList, pathMap)
  function addRoute(routes) {
    createRouteMap(routes, pathList, pathMap)
  }
  function match(location) { //匹配对应记录
    console.log(location)
  }
  return {
    addRoute,
    match
  }
}