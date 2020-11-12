/*
 * Add links as content to the div#links element
 */
export default class LinksTransformer {
  /* Initialize this.links to contain the links array */
  constructor(links) {
    this.links = links 
  }
  
  /* For each link, Create an 'a' tag and add the href. Indent accordingly. */
  element(element) {
    let link, content = ''
    element.setInnerContent('')
    for (link of this.links) {
      content += `\n\t\t<a href=${link['url']}>${link['name']}</a>`
    }
    content += '\n\t  '
    element.setInnerContent(content, {html: true})
  }
}
