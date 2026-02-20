<template>
  <div>
    <header class="nav">
      <div class="wrap">
        <div class="brand">Vue Dummy</div>
        <nav>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>

    <section class="hero">
      <div class="wrap hero-inner">
        <div>
          <h1>Build fast with Vite + Vue 3</h1>
          <p class="lead">A minimal landing page scaffolded into this repository. Start customizing components and styles.</p>
          <div class="actions">
            <a class="btn primary" href="#features">Explore features</a>
            <a class="btn" href="#about">Learn more</a>
          </div>
        </div>
        <div class="hero-card"> <strong>Ready</strong> in seconds — edit <code>src/components/Landing.vue</code></div>
      </div>
    </section>

    <section id="features" class="features">
      <div class="wrap grid">
        <article>
          <h3>Fast</h3>
          <p>Vite dev server and instant HMR keep feedback loops short.</p>
        </article>
        <article>
          <h3>Modern</h3>
          <p>Vue 3 + composition API ready for composable UI logic.</p>
        </article>
        <article>
          <h3>Simple</h3>
          <p>Small, readable components to get you started quickly.</p>
        </article>
      </div>
    </section>

    <section id="about" class="about">
      <div class="wrap">
        <h2>About this project</h2>
        <p>This repository was scaffolded by a helper and pushed to `main`. Use this landing page as the app's home and expand with routes, store, and CI as needed.</p>
      </div>
    </section>

    <footer id="contact" class="site-footer">
      <div class="wrap">© <span id="year">2026</span> Vue Dummy — <a href="https://github.com/sdtpatil-alt/vue-dummy-project" target="_blank" rel="noreferrer">repo</a></div>
    </footer>
  </div>
</template>

<script setup>
// simple landing page — enhance as needed
</script>

<style scoped>
:root{--accent:#3b82f6;--muted:#6b7280}
.wrap{max-width:980px;margin:0 auto;padding:0 1rem}
.nav{border-bottom:1px solid #e6edf3;background:#fff}
.nav .wrap{display:flex;align-items:center;justify-content:space-between;padding:1rem 0}
.brand{font-weight:700}
.nav nav a{margin-left:1rem;color:var(--muted);text-decoration:none}

.hero{padding:3.5rem 0;background:linear-gradient(180deg,#f8fbff,#ffffff)}
.hero-inner{display:grid;grid-template-columns:1fr 260px;gap:1.5rem;align-items:center}
.hero h1{margin:0 0 .5rem;font-size:2rem}
.lead{color:var(--muted);margin:0 0 1rem}
.actions .btn{display:inline-block;padding:.6rem 1rem;border-radius:6px;text-decoration:none;border:1px solid transparent}
.btn.primary{background:var(--accent);color:#fff}
.btn{background:#fff;color:var(--accent);border:1px solid #dbeafe}
.hero-card{background:#fff;border:1px solid #e6eef8;padding:1rem;border-radius:8px;text-align:center}

.features{padding:2rem 0}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}
.features article{background:#fff;padding:1rem;border-radius:8px;border:1px solid #eef6ff}
.features h3{margin:0 0 .5rem}

.about{padding:2rem 0;background:#fbfdff}
.about h2{margin-top:0}

.site-footer{padding:1rem 0;text-align:center;color:var(--muted);font-size:.9rem}

@media (max-width:720px){
  .hero-inner{grid-template-columns:1fr;}
  .grid{grid-template-columns:1fr}
  .nav nav{display:none}
}
</style>
