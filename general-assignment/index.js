import Router  from './router'
import Links   from './src/handlers/links'
import Default from './src/handlers/default'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const r = new Router()
  /*
   * Call the handler for links endpoint, else fetch the default html page
   */
  r.get('/links', Links)
  r.get('.*', Default)

  const resp = await r.route(request)
  return resp
}
