const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

/* Needs to be empty string for deployement */
var path = "";

fetch("/data.json")
  .then((response) => response.json())
  .then((json) => (data = json))
  .then(() => {
    for (var key in data) {
      shuffleArray(data[key]);
      for (var i = 0; i < data[key].length; i++) {
        var title = data[key][i].Title;
        var desc = data[key][i].Description;
        var url = data[key][i].url;
        var img = data[key][i].Screenshot;
        var badge = document.createElement("div");
        badge.className = "badge website-card";
        badge.innerHTML =
          '<header class="card__header">' +
          '<img src="' +
          path +
          img +
          '" alt="" class="screenshot" />' +
          '<div class="overlay">' +
          '<a href="' +
          url +
          '" class="header__icon" title="Website"><i class="fa fa-link"></i></a>' +
          "</div>" +
          "</header>" +
          '<div class="card__body">' +
          '<h2 class="card__title">' +
          title +
          "</h2>" +
          '<p class="card__description">' +
          desc +
          "</p>" +
          '<a href="' +
          url +
          '" class="link-arrow">Visit Website</a>' +
          "</div>" +
          "</div>";
        document.getElementById(key).appendChild(badge);
      }
    }
  });

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
