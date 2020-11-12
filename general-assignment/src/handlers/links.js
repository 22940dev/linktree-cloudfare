/*
 * This is the handler for the links endpoint. We have defined a static array 
 * of 5 links and serve the array back, as the JSON response to the request
 * made to the /links endpoint
 */

export const linkObj = [{"name": "LinkedIn", "url": "https://linkedin.com/in/nithintsk"},
  {"name": "Website", "url": "https://nithintsk.me"},
  {"name": "Github", "url": "https://github.com/nithintsk"},
  {"name": "Resume", "url": "https://nithintsk.me/docs/nithin-senthil-kumar-resume.pdf"},
  {"name": "Blog", "url": "https://nithintsk.me/blog/"}]


export default request => {
  const init = {
    headers: { 'content-type': 'application/json' },
  }
  const body = JSON.stringify(linkObj)
  return new Response(body, init)
}
