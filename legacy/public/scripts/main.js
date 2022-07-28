/* eslint-disable no-undef */
$("#predmet-button").on("click", function (e) {
  e.preventDefault();

  var data = {
    predmet: $("#predmet").val(),
    balls: $("#balls").val(),
  };
  console.log(data);
  $.ajax({
    type: "POST",
    data: JSON.stringify(data),
    contentType: "application/json",
    url: "/api/main/predmet",
  }).done(function (data) {
    console.log(data);
    if (!data.ok) {
      $("#predmet-button").after('<p class = "error">' + data.error + "</p>");
    } else {
      alert("Оценки внесены");
      $("#predmet-button").after(
        "<table><tr><th>" +
          data.predmet +
          "</th><th>" +
          data.balls +
          "</th></tr></table>"
      );
      $("#change-predmet").after(
        "<table><tr><th>" +
          data.predmet +
          "</th><th>" +
          data.balls +
          "</th></tr></table>"
      );
    }
  });
});

$("#download-button").on("click", function (e) {
  e.preventDefault();

  var data = {
    name: $("#download-name").val(),
    token: $("#download-token").val(),
  };
  console.log(data);
  $.ajax({
    type: "POST",
    data: JSON.stringify(data),
    contentType: "application/json",
    url: "/api/main/download",
  }).done(function (datas) {
    console.log(datas);
    if (!datas.ok) {
      $("#download-button").after('<p class = "error">' + datas.error + "</p>");
    } else {
      $("#download-button").after(
        "<table><tr><th>" +
          datas.address +
          "</th><th>" +
          datas.token +
          "</th></tr></table>"
      );
    }
  });
});

$("#get-button").on("click", function (e) {
  e.preventDefault();

  $.ajax({
    type: "POST",
    url: "/api/main/accaunt",
  }).done(function (data) {
    console.log(data);
    if (!data.ok) {
      $("#download-button").after('<p class = "error">' + data.error + "</p>");
    } else {
      $("#get-button").after(
        "<table><tr><th>" +
          data.address +
          "</th><th>" +
          data.balance +
          "</th></tr></table>"
      );
    }
  });
});
