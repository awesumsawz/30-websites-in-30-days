@php
  if (!function_exists('isThePageActive')) {
    function isThePageActive($path)
    {
        return request()->is(trim($path, '/')) || (request()->is('/') && $path === '/') ? 'active' : '';
    }
  }
@endphp
<ul id="menu-primary-menu" class="nav flex items-center gap-2 roboto-bold text-customGreen">
	<x-nav-link href="/" :active="isThePageActive('/')">Home</x-nav-link>
	<x-nav-link href="/about" :active="isThePageActive('/about')">About</x-nav-link>
	<x-nav-link href="/contact" :active="isThePageActive('/contact')">Contact</x-nav-link>
</ul>
