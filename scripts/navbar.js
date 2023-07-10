button_list = [
    {
        id: "nav-search",
        link_to: "../guest/index-guest.html",
        is_selected: true,
        icon_name: "search",
        label: "Find Rental",
    },
    {
        id: "nav-rentals",
        link_to: "../host/index-host.html",
        is_selected: false,
        icon_name: "houses",
        label: "My Properties",
    },
    {
        id: "nav-reservations",
        link_to: "../guest/reservations.html",
        is_selected: false,
        icon_name: "calendar",
        label: "Reservation",
    },
    {
        id: "nav-requests",
        link_to: "../guest/index-guest.html",
        is_selected: false,
        icon_name: "journal-bookmark",
        label: "Requests",
    },
]

popup_list = [
    {
        id: "nav-noti",
        link_to: "#",
        is_selected: false,
        icon_name: "mail",
        label: "Notification",
        noti_count: 2,
    },
]

dropdown_list = [
    {
        id: "drop-profile",
        link_to: "myprofile.html",
        label: "Visit Profile",
    },
    {
        id: "drop-edit",
        link_to: "edit-profile.html",
        label: "Settings",
    },
    {
        id: "drop-leave",
        link_to: "../index.html",
        label: "Log Out",
    },
]


/* <li>
    <a href="index-guest.html" class="nav-link selected">
    <img class="bi d-block mx-auto mb-1" src="../icons/search-selected.svg">
    Find Rental
    </a>
</li> */
function createButton(parent, link_to, is_selected, icon_name, label){
    var link = document.createElement("a");
    link.href = link_to;
    link.classList.add("nav-link");
    if (is_selected)
        link.classList.add("selected");

    var img = document.createElement("img");
    img.classList.add("bi");
    img.classList.add("d-block");
    img.classList.add("mx-auto");
    img.classList.add("b-1");
    img.src = "../icons/" + icon_name + ".svg";

    link.appendChild(img);
    link.innerHTML += label;

    var par = document.getElementById(parent);
    par.appendChild(link);
    
}

/* <li>
    <a href="#" class="nav-link btn position-relative" type="button" data-bs-toggle="modal" data-bs-target="#notiModal">
    <img class="bi d-block mx-auto mb-1" src="../icons/mail.svg">
    Notifications
    <span class="position-absolute corner-badge translate-middle badge rounded-pill bg-danger">
        2
    </span>
    </a>
</li> */
function createNoti(parent, link_to, is_selected, icon_name, label, noti_count){
    var link = document.createElement("a");
    link.href = link_to;
    link.classList.add("nav-link");
    link.classList.add("btn");
    link.classList.add("position-relative");
    link.setAttribute("type", "button");
    link.setAttribute("data-bs-toggle", "modal");
    link.setAttribute("data-bs-target", "#notiModal");

    var img = document.createElement("img");
    img.classList.add("bi");
    img.classList.add("d-block");
    img.classList.add("mx-auto");
    img.classList.add("b-1");
    img.src = "../icons/" + icon_name + ".svg";

    link.appendChild(img);
    link.innerHTML += label;

    // # Unread messages
    var unread = document.createElement("span");
    unread.classList.add("position-absolute");
    unread.classList.add("corner-badge");
    unread.classList.add("translate-middle");
    unread.classList.add("badge");
    unread.classList.add("rounded-pill");
    unread.classList.add("bg-danger");

    unread.innerHTML = noti_count;
    link.appendChild(unread);

    var par = document.getElementById(parent);
    par.appendChild(link);
}

/* <li class="nav-item dropdown">
    <a type="button" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img class="bi d-block mx-auto mb-1" src="../icons/person.svg">
        Renter Profile
    </a>
    <ul class="dropdown-menu dropdown-menu-dark">
        <li><a class="dropdown-item" href="myprofile.html">Visit Profile</a></li>
        <li><a class="dropdown-item" href="../host/index-host.html">Switch to Host</a></li>
        <li><a class="dropdown-item" href="edit-profile.html">Settings</a></li>
        <li><a class="dropdown-item" href="../index.html">Log Out</a></li>
    </ul>
</li> */
function createDropDown(parent, link_to, is_selected, icon_name, label){
    var link = document.createElement("a");
    link.type = "button";
    link.classList.add("nav-link");
    link.classList.add("dropdown-toggle");
    link.setAttribute("data-bs-toggle", "dropdown");
    link.setAttribute("aria-expanded", "false");
  
    var img = document.createElement("img");
    img.classList.add("bi");
    img.classList.add("d-block");
    img.classList.add("mx-auto");
    img.classList.add("b-1");
    img.src = "../icons/" + icon_name + ".svg";

    link.appendChild(img);
    link.innerHTML += label;

    var par = document.getElementById(parent);
    par.appendChild(link);

}

// <li><a class="dropdown-item" href="../index.html">Log Out</a></li>
function createDropDownItem(parent, link_to, label){
    var link = document.createElement("a");
    link.href = link_to;
    link.classList.add("dropdown-item");
    link.innerText = label;

    var par = document.getElementById(parent);
    par.appendChild(link);
}



// Create normal buttons
for (b of button_list){
    var item = document.createElement("li");
    item.id = b.id;
    document.getElementById("nav-button-list").appendChild(item);
    createButton(b.id, b.link_to, b.is_selected, b.icon_name, b.label);   
}

// Create Noti Popup
for (n of popup_list){
    var item = document.createElement("li");
    item.id = n.id;
    document.getElementById("nav-button-list").appendChild(item);
    createNoti(n.id, n.link_to, n.is_selected, n.icon_name, n.label, n.noti_count);
}

// Create dropdown menu
var item = document.createElement("li");
item.id = "nav_account";
item.classList.add("nav-item");
item.classList.add("dropdown");
document.getElementById("nav-button-list").appendChild(item);

createDropDown(item.id, "", false, "person", "Profile");

var list = document.createElement("ul");
list.classList.add("dropdown-menu");
list.classList.add("dropdown-menu-dark");
item.appendChild(list);

for (d of dropdown_list){
    var list_item = document.createElement("li");
    list_item.id = d.id;
    list.appendChild(list_item);

    createDropDownItem(d.id, d.link_to, d.label);   
}