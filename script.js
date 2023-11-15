let prevScrollpos = window.scrollY;

window.onscroll = function() {
  const currentScrollPos = window.scrollY;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nave").style.top = "0";
  } else {
    document.getElementById("nave").style.top = "-50px"; // Altura da barra de navegação, você pode ajustar conforme necessário
  }

  prevScrollpos = currentScrollPos;
};
$('.portfolio-button').mousedown(function(){
    timeout = setInterval(function(){
        window.scrollBy(0,-1); // May need to be -1 to go down
    }, 0); // Play around with this number. May go too fast

    return false;
});
function instagram() {
  
    window.open((' https://www.instagram.com/alex.tavares_/ '), '_blank');
};
function Gmail() {
    
    window.open(('https://mail.google.com/mail/u/0/?pli=1#inbox?compose=jrjtXRGPQbTCShdrZxqtxSgDbWKTcTPFmfmLZJXtWNgWdgqgQPLvbxFsqJcwqVxqGGnjcFlf'), '_blank');
};
function Github() {

    window.open(('https://github.com/Matadorfatal'), '_blank');
};
function Mapa() {

    window.open(('https://maps.app.goo.gl/rE82pYjPJGSQHA76A'), '_blank');
};
function Linkedin() {

    window.open(('https://www.linkedin.com/in/alex-tavares-comerao/'), '_blank');
};
function Whats() {

    window.open(('https://wa.me/5514996702133'), '_blank');
};


  function irParaConteudo2() {
  
    document.getElementById('contatos-loc').scrollIntoView({ behavior: 'smooth' })};

   