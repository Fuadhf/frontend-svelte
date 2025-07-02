<script>
  import "../app.css";
</script>

<nav class="navbar navbar-expand-lg bg-dark">
  <div class="container">
    <a href="/" class="navbar-brand">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedConten" aria-controls="navbarSupportedConten" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedConten">
      <ul class="navbar-nav ms-automb-2 mb-lg-0">
        <li class="nav-item">
          <a href="https://github.com/Fuadhf">Fuadhf</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="container mt-5">
  <slot></slot>
</div>