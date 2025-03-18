@include('components.head')
@include('components.header')

<main class="blog-post-page">
    <div class="breadcrumbs">
        <div class="container">
            @include('components.breadcrumbs', ['title' => $__env->yieldContent('title')])
        </div>
    </div>
    
    <article class="blog-post">
        <div class="container">
            <header class="post-header">
                <h1>@yield('title')</h1>
                <div class="post-meta">
                    <span class="post-date">@yield('date')</span>
                </div>
            </header>
            
            @php
                $image = $__env->yieldContent('image');
            @endphp
            
            @if(!empty($image))
            <div class="post-image">
                <img src="{{ $image }}" alt="@yield('title')">
            </div>
            @endif
            
            <div class="post-content">
                @yield('content')
            </div>
            
            <div class="post-navigation">
                <div class="container">
                    <div class="navigation-links">
                        @yield('navigation')
                    </div>
                </div>
            </div>
        </div>
    </article>
</main>

@include('components.footer')
@include('components.foot') 