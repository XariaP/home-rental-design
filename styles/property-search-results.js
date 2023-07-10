pg_num = 1;
count = 0;
per_page = 6;

rental_info = [
  {
    title: "Cozy House",
    pic: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8&w=1000&q=80",
    rating: "4.5",
    info: ["$200/night", "3 Bed", "2 Bath", "4 Guests Max"],
    desc: "Enjoy living at its finest with an unforgettable stay at this modern home!",
  },
  {
    title: "Luxury House",
    pic: "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg",
    rating: "4.2",
    info: ["$350/night", "2 Bed", "2.5 Bath", "4 Guests Max"],
    desc: "Enjoy living at its finest with an unforgettable stay at this modern home!",
  },
  {
    title: "Modern House",
    pic: "https://cdn.carrot.com/uploads/sites/12149/2012/01/houston-house-2-hero.jpg",
    rating: "4.0",
    info: ["$350/night", "5 Bed", "3 Bath", "5 Guests Max"],
    desc: "Enjoy living at its finest with an unforgettable stay at this modern home!",
  },
  {
    title: "Luxury House",
    pic: "https://www.bhg.com/thmb/0Fg0imFSA6HVZMS2DFWPvjbYDoQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
    rating: "3.5",
    info: ["$500/night", "4 Bed", "3 Bath", "4 Guests Max"],
    desc: "Enjoy living at its finest with an unforgettable stay at this modern home!",
  },
  {
    title: "Luxury House",
    pic: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8&w=1000&q=80",
    rating: "2.5",
    info: ["$500/night", "5 Bed", "2.5 Bath", "6 Guests Max"],
    desc: "Enjoy living at its finest with an unforgettable stay at this modern home!",
  },
]

max_pages = rental_info.length / per_page;

const page_group = document.getElementById("search-tabContent");
page_group.innerHTML = "";

while (count < rental_info.length){
  // console.log(count, rental_info.length);
  var page = document.createElement("div");
  page.classList.add("tab-pane");
  page.classList.add("fade");
  if (pg_num == 1) {
    page.classList.add("show");
    page.classList.add("active");
  }
  page.id = "search-page" + pg_num.toString() + "-pane";
  page.role = "tabpanel";
  // aria-labelledby="results-page1-tab" 
  page.tabIndex = "0";

  page_group.appendChild(page);

  var row = document.createElement("div");
  var row_class = ["row", "row-cols-1", "row-cols-sm-2", "row-cols-md-3", "g-3"];
  for (let c in row_class){
    row.classList.add(row_class[c]);
  }
  page.appendChild(row);
  
  for (let i = 0; i < per_page; i++) {
    if (count == rental_info.length){
      break;
    }
    r = count;
    var col = document.createElement("div");
    col.className = "col";
    row.appendChild(col);

    var card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("shadow-sm");
    col.appendChild(card);
              
    var imglink = document.createElement("a");
    imglink.href = "property.html";
    card.appendChild(imglink);

    var image = document.createElement("img");
    image.classList.add("bd-placeholder-img");
    image.classList.add("card-img-top");
    image.width = "100%";
    image.height = 225;
    image.src = rental_info[r].pic;
    imglink.appendChild(image);

    card.innerHTML += "<span class='position-absolute card-rating-badge translate-middle badge rounded-pill'> <img src='../icons/star.svg'>" + rental_info[r].rating +"</span>";

    var card_body = document.createElement("div");
    card_body.className = "card-body";
    card.appendChild(card_body);

    var card_body_text = document.createElement("p");
    card_body_text.classList.add("card-text");
    card_body_text.classList.add("badge-group"); // ?
    card_body.appendChild(card_body_text);

    var badge;
    var info = rental_info[r].info;
    for (const b in info) {
      badge = document.createElement("span");
      badge.classList.add("badge");
      badge.classList.add("rounded-pill");
      badge.classList.add("text-bg-darkblue");
      badge.innerHTML = info[b];
      card_body_text.appendChild(badge);
    }

    card_title = document.createElement("p");
    card_title.className = "text-bold";
    card_title.innerHTML = rental_info[r].title;
    card_body.appendChild(card_title);

    card_body_text = document.createElement("p");
    card_body_text.classList.add("card-text");
    card_body_text.innerHTML = rental_info[r].desc;
    card_body.appendChild(card_body_text);

    var card_footer = document.createElement("div");
    card_footer.classList.add("d-flex");
    card_footer.classList.add("justify-content-between");
    card_footer.classList.add("align-items-center");
    card_body.appendChild(card_footer);
                      
    var btn_group = document.createElement("div");
    btn_group.classList.add("btn-group");
    card_footer.appendChild(btn_group);

    var btn;
    btn = document.createElement("a");
    btn.type = "button";
    btn.classList.add("btn");
    btn.classList.add("btn-sm");
    btn.classList.add("btn-outline-secondary");
    btn.innerHTML = "<img src='../icons/heart.svg'>";
    btn_group.appendChild(btn);

    btn = document.createElement("a");
    btn.type = "button";
    btn.classList.add("btn");
    btn.classList.add("btn-sm");
    btn.classList.add("btn-outline-secondary");
    btn.href = "property.html";
    btn.innerHTML = "View";
    btn_group.appendChild(btn);

    card_footer.innerHTML += "<small class='text-muted text-center'>Toronto, Canada</small>";
    
    count++;
    // console.log(count);
  }
  pg_num++;
}
