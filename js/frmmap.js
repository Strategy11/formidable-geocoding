function frmMapInitialize(){frmGooglemap={initzoom:document.getElementById("frm-gm-init-zoom").value,geozoom:document.getElementById("frm-gm-geo-zoom").value,maptype:document.getElementById("frm-gm-maptype").value,lat:document.getElementById("frm-gm-lat").value,lng:document.getElementById("frm-gm-lng").value};var ppCanvas=document.getElementById("frm-map-canvas").previousSibling.previousSibling;if('style' in ppCanvas){ppCanvas.style.display="none";}else{ppCanvas.style={display:"none"};}if(document.getElementById("frm-gmi-lat")!=undefined){var e=document.getElementById("frm-gmi-lat").value;if(e==frmGooglemap.lat){var t=parseFloat(frmGooglemap.initzoom)}else{var t=parseFloat(frmGooglemap.geozoom)}}else{var e=frmGooglemap.lat;var t=parseFloat(frmGooglemap.initzoom)}if(document.getElementById("frm-gmi-lng")!=undefined){var n=document.getElementById("frm-gmi-lng").value;if(n==frmGooglemap.lng){var t=parseFloat(frmGooglemap.initzoom)}else{var t=parseFloat(frmGooglemap.geozoom)}}else{var n=frmGooglemap.lng;var t=parseFloat(frmGooglemap.initzoom)}var r=new google.maps.LatLng(parseFloat(e),parseFloat(n));var i={zoom:t,center:r,mapTypeId:google.maps.MapTypeId[frmGooglemap.maptype]};frmMap=new google.maps.Map(document.getElementById("frm-map-canvas"),i);frmMarker=new google.maps.Marker({position:r,map:frmMap,draggable:true});google.maps.event.addListener(frmMarker,"dragend",function(){var e=frmMarker.getPosition();if(document.getElementById("frm-gmi-lat")!=undefined){document.getElementById("frm-gmi-lat").value=e.lat().toFixed(6)}if(document.getElementById("frm-gmi-lng")!=undefined){document.getElementById("frm-gmi-lng").value=e.lng().toFixed(6)}})}function reset_map_location(e){if(e.value=="Please enter address or zip/postal code"){e.value=""}}function ch_pp_address_onkeyup(e){var t=e.keyCode?e.keyCode:e.charCode;if(t==32||t==188){ch_pp_addressinput()}}function ch_pp_addressinput(){var e=document.getElementById("frm-gmi-loc").value;var t=new google.maps.Geocoder;t.geocode({address:e},function(e,t){if(t==google.maps.GeocoderStatus.OK){var n=e[0].geometry.location.lat();var r=e[0].geometry.location.lng();n=n.toFixed(6);r=r.toFixed(6);var i=new google.maps.LatLng(n,r);frmMap.setCenter(i);frmMarker.setPosition(i);frmMap.setZoom(parseFloat(frmGooglemap.geozoom));if(document.getElementById("frm-gmi-lat")!=undefined){document.getElementById("frm-gmi-lat").value=n}if(document.getElementById("frm-gmi-lng")!=undefined){document.getElementById("frm-gmi-lng").value=r}}})}var frmMap;var frmMarker;var frmGooglemap;google.maps.event.addDomListener(window,"load",frmMapInitialize)