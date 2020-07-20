
function createElement(div_id, internals, type) {
    document.getElementById(div_id).appendChild(document.createElement(type).innerHtml=internals);
}
function destroy(div_id) {
    document.destroy(div_id);
}