import History from './base'

function ensureSlash() {
  if(window.location.hash) {
    return
  }
  window.location.hash = '/'
}

class HashHistory extends History {
  constructor(router) {
    super(router)
    this.router = router
    ensureSlash()
  }
}

export default HashHistory