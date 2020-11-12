/* Remove display:none from style attribute*/
export default class RmDisplayNone {
  element(element) {
    var style = element.getAttribute('style').replace('display: none', '')
    element.setAttribute('style', style)
  }
}
