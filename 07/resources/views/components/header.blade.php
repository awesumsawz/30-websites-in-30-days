@php
if (!function_exists('isThePageActive')) {
  function isThePageActive($path)
  {
    return request()->is(trim($path, '/')) || (request()->is('/') && $path === '/') ? 'active' : '';
  }
}
@endphp

<header id="main-navigation" class="bg-white flex justify-between items-center py-5 px-10 shadow-md">
  <section class="title">
    <a href="/">
      <img src="{{ asset('images/logo.png') }}" alt="logo" class="w-10 h-13">
    </a>
  </section>
  <section class="menu">
    <ul id="menu-primary-menu" class="nav flex items-center gap-2 roboto-bold text-customGreen">
      <li class="{{ isThePageActive('/') ? 'active' : '' }} menu-item menu-item-type-post_type menu-item-object-page" aria-current="{{ isThePageActive('/') ? 'page' : 'false' }}">
        <a href="/">Home</a>
      </li>
      <li class="{{ isThePageActive('/depress') ? 'active' : '' }} menu-item menu-item-type-post_type menu-item-object-page" aria-current="{{ isThePageActive('/depress') ? 'page' : 'false' }}">
        <a href="/depress">Depress</a>
      </li>
    </ul>
  </section>
</header>