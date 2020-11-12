/* Set the content of the header to my name */
export default class HeaderTransformer {
  constructor() {
    this.name = 'Nithin Senthil Kumar'
  }
  element(element) {
    element.setInnerContent(this.name)
  }
}
