@include('components.head')
@include('components.header')

<main class="blog-post-page">
    <div class="breadcrumbs">
        <div class="container">
            @include('components.breadcrumbs', ['title' => $__env->yieldContent('title')])
        </div>
    </div>
    
    <div class="container">
        @yield('content')
    </div>
</main>

@include('components.footer')
@include('components.foot') 