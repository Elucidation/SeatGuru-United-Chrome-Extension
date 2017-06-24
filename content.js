// Look for a DOM element with the plane name (class name spanEquipment)
var plane_name_search = document.getElementsByClassName("spanEquipment");

// If it's found, we'll modify it to link to a seatguru page
if (plane_name_search.length == 1) {
  var name_element =  plane_name_search[0];
  plane_name = name_element.textContent;
  console.log("Plane:", plane_name);

  // Generate new HTML that wraps the plane title in the seatmap
  // with a version that links to a google i'm feeling lucky search result
  // with United + that plane title
  var link = "https://www.google.com/search?q="+
    encodeURI("United "+plane_name)+
    "&btnI&as_sitesearch=seatguru.com"; // btnI = auto-pick first google result
  
  linked_html = "<a href=\""+link+"\">"+name_element.outerHTML+"</a>";

  // Finally, update element with the new html
  name_element.outerHTML = linked_html;

} else {
  // console.log("No plane element found");
}