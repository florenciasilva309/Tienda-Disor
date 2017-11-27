
      function sendMail() {
        var link = "florenciasilva309@gmail.com"
          + "?cc=Consulta"
          + "&subject=" + escape("Info Web")
          + "&body=" + escape("Mi nombre es: " + document.getElementById('name').value);

        var n = document.forms[0].name.value;
        var m = document.forms[0].mail.value;
        var t = document.getElementById("test");
        var filter = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,8})+$/;
        if (n.length >= 2 && filter.test(m)) { window.location.href = "mailto:" + link; return true; }
        else { t.innerHTML = "Revisa los datos . . ."; setTimeout(function () { t.innerHTML = ". . ." }, 2000); return false; }
      }