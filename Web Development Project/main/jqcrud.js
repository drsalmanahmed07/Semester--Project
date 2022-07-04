$(function() {
  loadRecipies();
  $("#products").on("click", ".btn-danger", handleDelete);
  $("#products").on("click", ".btn-warning", handleUpdate);
  $("#addBtn").click(addRecipe);
  $("#updateSave").click(function() {
    var id = $("#updateId").val();
    var name = $("#updateTitle").val();
    var response = $("#updateBody").val();
    $.ajax({
      url: "http://localhost:3000/api/products/" + id,
      data: { name, response },
      method: "PUT",
      success: function(response) {
        console.log(response);
        loadRecipies();
        $("#updateModal").modal("hide");
      }
    });
  });
});
function handleUpdate() {
  var btn = $(this);
  var parentDiv = btn.closest(".recipe");
  let id = parentDiv.attr("data-id");
  $.get("http://localhost:3000/api/products/" + id, function(
    response
  ) {
    $("#updateId").val(response._id);
    $("#updateTitle").val(response.name);
    $("#updateBody").val(response.response);
    $("#updateModal").modal("show");
  });
}
function addRecipe() {

  
  var name = $("#title").val();
  var response = $("#body").val();
  $.ajax({
    url: "http://localhost:3000/api/products",
    method: "POST",
    data: { name, response },
    success: function(response) {
      console.log(response);
      $("#title").val("");
      $("#body").val("");
      loadRecipies();
      $("#addModal").modal("hide");
    },
    error: function()
    {
      console.log(error);
    }

  });
}
function handleDelete() {
  var btn = $(this);
  var parentDiv = btn.closest(".recipe");
  let id = parentDiv.attr("data-id");
  console.log(id);
  $.ajax({
    url: "http://localhost:3000/api/products/" + id,
    method: "DELETE",
    success: function() {
      loadRecipies();
    }
  });
}

//Jquery Function To load the Recipes
function loadRecipies() {
  $.ajax({
    url: "http://localhost:3000/api/products",
    method: "GET",
    error: function(response) {
      var recipes = $("#products");
      recipes.html("An Error has occured");
    },
    success: function(response) {
      console.log(response);
      var recipes = $("#products");
      recipes.empty();
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        recipes.append(
          `<div class="recipe" data-id="${rec._id}"><h3>${rec.name}</h3><p><button class="btn btn-danger btn-sm float-right">delete</button><button class="btn btn-warning btn-sm float-right">Edit</button> ${rec.response}</p></div>`
        );
        // recipes.append("<div><h3>" + rec.title + "</h3></div>");
      }
    }
  });
}
