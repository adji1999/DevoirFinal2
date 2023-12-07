$(document).ready(function () {
  $("#interactionBtn").on("click", function () {
    var identifiant = prompt(
      "Veuillez vous connecter, Entrez votre identifiant:"
    );
    var password = prompt("Entrez votre mot de passe:");

    var utilisateurHtml = "<strong >" + identifiant + " " + "</strong>";

    $("#userSection").html(utilisateurHtml);
    $("#pasBesoin").remove();
    $("#paragrapheCache").toggle();
    $(this).hide();
  });

  $("#loginBtn").on("click", function () {
    var identifiant = prompt("Entrez votre identifiant:");
    var password = prompt("Entrez votre mot de passe:");

    var utilisateurHtml = "<strong>" + identifiant + " " + "</strong>";
    $("#userSection").html(utilisateurHtml);
    $("#pasBesoin").remove();
    $("#paragrapheCache").toggle();
    $("#interactionBtn").remove();
  });

  $("#profileLink").on("click", function () {
    var nom = prompt("Entrez votre nom:");
    var prenom = prompt("Entrez votre prénom:");
    var identifiant = prompt("Entrez votre identifiant:");
    var password = prompt("Entrez votre mot de passe:");

    var utilisateurHtml = "<strong>" + identifiant + " " + "</strong>";
    $("#userSection").html(utilisateurHtml);
    $("#pasBesoin").remove();
    $("#paragrapheCache").toggle();
    $("#interactionBtn").remove();
  });
});
