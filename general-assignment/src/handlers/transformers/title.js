/* Set the content of the title to be my name */
export default class TitleTransformer {
  constructor() {
    this.name = 'Nithin Senthil Kumar'
  }
  element(element) {
    element.setInnerContent(this.name)
  }
}
