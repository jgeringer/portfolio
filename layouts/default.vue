<template>
  <div>

    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0">
      <symbol viewBox="0 0 1092.82 42.47" id="desktop" width="100%" height="100%">
        <defs><style>.clsd-1{fill:#e2e2e2;}.clsd-2{fill:#e50000;}.clsd-3{fill:#e2bc00;}.clsd-4{fill:#35d800;}</style></defs><title>Asset 3</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="clsd-1" d="M0,42.47V15.73A15.78,15.78,0,0,1,15.73,0H1077.09a15.78,15.78,0,0,1,15.73,15.73V42.47"/><circle class="clsd-2" cx="23.59" cy="22.81" r="4.72"/><circle class="clsd-3" cx="45.61" cy="22.81" r="4.72"/><circle class="clsd-4" cx="67.63" cy="22.81" r="4.72"/></g></g>
      </symbol>

      <symbol viewBox="0 0 475.55 622.54" id="tablet" width="100%" height="100%">
        <defs><style>.clst-1{fill:#d7dbdd;}.clst-2{fill:#c3c7c9;}.clst-3{fill:#3f3f3f;}.clst-4{opacity:0.1;fill:url(#linear-gradient);}</style><linearGradient id="linear-gradient" x1="1140.74" y1="-700.93" x2="227.18" y2="315.77" gradientUnits="userSpaceOnUse"><stop offset="0.46" stop-color="#fff"/><stop offset="1"/></linearGradient></defs><title>Asset 6</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="clst-1" d="M461.51,0H14A14.08,14.08,0,0,0,0,14V608.5a14.08,14.08,0,0,0,14,14H461.51a14.08,14.08,0,0,0,14-14V14A14.08,14.08,0,0,0,461.51,0ZM442.57,563.25H34.42V43.11H442.57Z"/><circle class="clst-2" cx="237.77" cy="592.44" r="18.73"/><circle class="clst-3" cx="238.49" cy="24.5" r="4.07"/></g></g>
      </symbol>

      <symbol viewBox="0 0 261.6 530.1" id="mobile" width="100%" height="100%">
        <defs><style>.cls-1{fill:#c3c7c9;}.cls-2{fill:#3f3f3f;}.cls-3{fill:#d7dbdd;}.cls-4{opacity:0;fill:url(#linear-gradient);}</style><linearGradient id="linear-gradient" x1="776.54" y1="-463.56" x2="123.41" y2="263.31" gradientUnits="userSpaceOnUse"><stop offset="0.46" stop-color="#fff"/><stop offset="1"/></linearGradient></defs><title>Asset 7</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle class="cls-1" cx="131.5" cy="494.23" r="20.04"/><circle class="cls-2" cx="66.85" cy="27.69" r="6.72"/><rect class="cls-2" x="91.17" y="23.33" width="80.66" height="8.72" rx="0.22" ry="0.22"/><path class="cls-3" d="M234.87,0H26.72A26.8,26.8,0,0,0,0,26.72V503.38A26.8,26.8,0,0,0,26.72,530.1H234.87a26.8,26.8,0,0,0,26.72-26.72V26.72A26.8,26.8,0,0,0,234.87,0ZM251,463.41H12V44.16H251Z"/><circle class="cls-2" cx="131.16" cy="12.24" r="4.06"/><rect class="cls-4" x="11.96" y="44.68" width="239.07" height="419.25"/><circle class="cls-2" cx="66.34" cy="29.15" r="6.72"/><rect class="cls-2" x="90.66" y="24.79" width="80.66" height="8.72" rx="0.22" ry="0.22"/><circle class="cls-1" cx="131.5" cy="496.4" r="20.04"/></g></g>
      </symbol>
    </svg>

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <nuxt-link to="/">Joe Geringer</nuxt-link>
          </h1>
          <h2 class="subtitle">
            Frontend Web Developer
          </h2>
        </div>
      </div>
    </section>

    <nuxt/>

    <footer class="footer">
      <div class="content has-text-centered">
        <ul class="list--plain is-marginless">
          <li>
            <a href="/">Work</a>
          </li>
          <li>
            <nuxt-link to="/resume">Resume</nuxt-link>
          </li>
        </ul>
        <p><a href="mailto:joegeringer@gmail.com">joegeringer@gmail.com</a></p>
      </div>
    </footer>
    
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
}
</style>