<header id="main-menu" class="topbar navbar">
  <div class="form-check form-switch desktop">
    <input class="form-check-input dark-mode-toggle" type="checkbox" id="dark-mode-toggle-desktop">
    <label class="form-check-label" for="dark-mode-toggle-desktop">
      <iconify-icon icon="material-symbols-light:dark-mode-outline" width="24" height="24"></iconify-icon>
    </label>
  </div>
  <section class="title">
    <a href="/">
      <div class="desktop-view">
        <img class="logo" src="{{ asset( 'images/logos/green-logowordmark-flat.png' ) }}" alt="combined logo" />
      </div>
      <div class="tablet-view">
        <img class="logo" src="{{ asset( 'images/logos/green-logowordmark-flat.png' ) }}" alt="graphic logo" />
      </div>
      <div class="mobile-view">
        <img class="logo" src="{{ asset( 'images/logos/green-logo.png' ) }}" alt="graphic logo" />
      </div>
    </a>
  </section>
  {{-- <section class="menu secondary desktop-view">
    <div class="menu-wrapper">
      @include('components.nav.secondary')
    </div>
  </section> --}}
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
  <div class="form-check form-switch mobile">
    <input class="form-check-input dark-mode-toggle" type="checkbox" id="dark-mode-toggle-mobile">
    <label class="form-check-label" for="dark-mode-toggle-mobile">
      <iconify-icon icon="material-symbols-light:dark-mode-outline" width="24" height="24"></iconify-icon>
    </label>
  </div>
  <div class="menu-toggle">
    <div class="close" onclick="toggleMobileMenu(this)"><iconify-icon inline icon="ic:round-close"></iconify-icon></div>
  </div>
  <section class="top">
    <div class="primary-menu">
      <div class="menu-items">
        @include('components.nav.primary')
      </div>
    </div>
    <hr>
    {{-- <div class="secondary-menu">
      <div class="menu-items">
        @include('components.nav.secondary')
      </div>
    </div> --}}
  </section>
  <section class="bottom">
    <div class="logo">
      <a href="/">
        <img src="{{ asset( 'images/logos/green-logowordmark-stacked.png' ) }}" alt="combined logo" />
      </a>
    </div>
  </section>
</div>
