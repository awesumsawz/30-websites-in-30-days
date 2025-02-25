@include('components.head')
@include('components.header')

<div class="container">
    {{ $slot }}
</div>

@include('components.footer')
@include('components.foot')
