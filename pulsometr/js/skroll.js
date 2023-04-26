<script>

  var category1 = document.getElementById("catalog");

  document.querySelector('a[href="#catalog"]').addEventListener('click', function(e) {

    e.preventDefault();

    category1.scrollIntoView({ behavior: 'smooth' });

  });
  
</script>