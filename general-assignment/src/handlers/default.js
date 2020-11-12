import LinksTransformer   from './transformers/linkdiv' 
import RmDisplayNone      from './transformers/rmdisplaynone' 
import SocialTransformer  from './transformers/socialdiv' 
import ImgTransformer     from './transformers/imgavatar' 
import HeaderTransformer  from './transformers/header' 
import TitleTransformer   from './transformers/title' 
import BgTransformer      from './transformers/background' 

const linkObj = require('./links')

export default async request => {
  const init = {
    headers: { 'content-type': 'text/html' },
  }

  /* Fetch the response from the given URL to serve as the base bage */
  const response = await fetch('https://static-links-page.signalnerve.workers.dev')
    .catch(function (err) {
      console.warn('Failed to fetch page.', err);
    })

  /* 
   * Rewrite the html content of the page using appropriate transformers 
   * for each of the elements identified by their tag and id.
   * We don't necessarily need to have a different class for each element 
   * However, it will be an advantage for extensibility in the future.
   */
  const rewriter = new HTMLRewriter()
    .on('div#links', new LinksTransformer(linkObj['linkObj']))
    .on('div#profile', new RmDisplayNone())
    .on('div#social', new RmDisplayNone())
    .on('img#avatar', new ImgTransformer())
    .on('h1#name', new HeaderTransformer())
    .on('div#social', new SocialTransformer())
    .on('title', new TitleTransformer())
    .on('body', new BgTransformer())

  /* 
   * We can return rewriter.transform directly. We instead explicitly set the 
   * header type to html since the assignment description asks that we ensure this
   */
  const htmlcontent = rewriter.transform(response)
  return new Response(htmlcontent.body, init)
}

