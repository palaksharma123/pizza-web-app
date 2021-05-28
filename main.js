menu_list_array=["Paneer Tikka pizza","cheese pizza","veg pizza"];

function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>";
    menu_list_array.sort();

for(i=0; i<menu_list_array; i++){
    htmldata=htmldata+'<li>'+menu_list_array[i]+'</li>';
}
htmldata=htmldata+"</ol>";
document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item(){
    var htmldata;
    item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section cards='cards'>";

    for(i=0; i<menu_list_array; i++){
        htmldata=htmldata+'div class="cards"'+'<img src="pizza.png">'+menu_list_array[i];
    }

htmldata=htmldata+"</section>";
document.getElementById("display_addedmenu").innerHTML=htmldata;
}