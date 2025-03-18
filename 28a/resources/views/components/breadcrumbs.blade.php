<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        
        @if(Request::is('blog/*') && !Request::is('blog'))
            {{-- For individual blog posts: Home > Blog > Post Title --}}
            <li class="breadcrumb-item"><a href="{{ route('blog.index') }}">Blog</a></li>
            <li class="breadcrumb-item active" aria-current="page" title="{{ $title ?? '' }}">{{ $title ?? '' }}</li>
        @else
            {{-- For blog index: Home > Blog --}}
            <li class="breadcrumb-item active" aria-current="page">Blog</li>
        @endif
    </ol>
</nav> 