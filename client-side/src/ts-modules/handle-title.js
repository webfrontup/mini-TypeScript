function setTitle(title) {
    document && (document.title = title)
}
function getTitle() {
    return document ? document.title: ''
}
let documentTitle = getTitle()