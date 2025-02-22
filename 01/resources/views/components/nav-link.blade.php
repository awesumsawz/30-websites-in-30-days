<li class="{{ $active ? 'active underline ' : '' }}hover:text-customGreenDark" aria-current="{{ $active ? 'page' : 'false' }}">
	<a href="{{ $href }}">
		{{ $slot }}
	</a>
</li>