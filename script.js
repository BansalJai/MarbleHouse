document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("ham").addEventListener("click", function () {
    document.getElementById("h1").style.display="block";

  });
  document.getElementById("filterby").addEventListener("click", function () {
    document.getElementById("h2").style.display="block";

  });
  document.getElementById("cb").addEventListener("click",function()
  {
    document.getElementById("h1").style.display="none";
  })
  document.getElementById("cb2").addEventListener("click",function()
  {
    document.getElementById("h2").style.display="none";
  })

});

document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');

    title.addEventListener('click', function() {
      accordionItems.forEach(acc => {
        if (acc !== item) {
          acc.querySelector('.accordion-content').classList.remove('active');
        }
      });

      content.classList.toggle('active');
    });
  });
});
