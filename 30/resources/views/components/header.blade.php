<header id="main-menu" class="navbar">
  {{-- Secondary navigation section - commented out
  <section class="menu secondary desktop-view">
    <ul>
      <li class="form-check desktop">
        <div class="toggle-icons">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path></svg>
        </div>
        <input type="checkbox" id="darkModeToggle" class="form-check-input">
        <label for="darkModeToggle" class="form-check-label"></label>
        <div class="toggle-icons">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path></svg>
        </div>
      </li>
      @include('components.nav.secondary')
    </ul>
  </section>
  --}}

  <!-- Add dark mode toggle to main menu since we removed secondary nav -->
  <section class="dark-mode-toggle desktop-view">
    <li class="form-check desktop">
      <div class="toggle-icons">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path></svg>
      </div>
      <input type="checkbox" id="darkModeToggle" class="form-check-input">
      <label for="darkModeToggle" class="form-check-label"></label>
      <div class="toggle-icons">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path></svg>
      </div>
    </li>
  </section>

  <section class="title">
    <a href="/">
      <div class="desktop-view">
        <img class="logo" src="{{ asset('images/logos/green-logowordmark-flat.png') }}" alt="combined logo" />
      </div>
      <div class="tablet-view">
        <img class="logo" src="{{ asset('images/logos/green-logowordmark-flat.png') }}" alt="graphic logo" />
      </div>
      <div class="mobile-view">
        <img class="logo" src="{{ asset('images/logos/green-logo.png') }}" alt="graphic logo" />
      </div>
    </a>
  </section>

  <section class="menu">
    <div class="desktop-view">
      @include('components.nav.primary')
    </div>
    <div class="mobile-view tablet-view">
      <div class="open" onclick="toggleMobileMenu(this)"><iconify-icon inline icon="ic:round-menu"></iconify-icon></div>
    </div>
  </section>
</header>

<div id="mobile-menu" class="sidebar navbar">
  <div class="menu-toggle">
    <div class="close" onclick="toggleMobileMenu(this)"><iconify-icon inline icon="ic:round-close"></iconify-icon></div>
  </div>
  
  <div class="form-check mobile">
    <div class="toggle-icons">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path></svg>
    </div>
    <input type="checkbox" id="darkModeToggleMobile" class="form-check-input">
    <label for="darkModeToggleMobile" class="form-check-label"></label>
    <div class="toggle-icons">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path></svg>
    </div>
  </div>
  
  <section class="top">
    <div class="primary-menu">
      <div class="menu-items">
        @include('components.nav.primary')
      </div>
    </div>
    {{-- Secondary menu - commented out
    <hr>
    <div class="secondary-menu">
      <div class="menu-items">
        @include('components.nav.secondary')
      </div>
    </div>
    --}}
  </section>
  <section class="bottom">
    <div class="logo">
      <a href="/">
        <img src="{{ asset('images/logos/green-logowordmark-stacked.png') }}" alt="combined logo" />
      </a>
    </div>
  </section>
</div>
