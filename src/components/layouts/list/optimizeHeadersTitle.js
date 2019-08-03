export default function optimizeHeadersTitle(title){
  var title = title.substring(title.lastIndexOf('=') + 2, title.lastIndexOf('"'));
  title = title.charAt(0).toUpperCase() + title.slice(1);
  return title;
}