@include('components.head')
@include('components.header')

<main class="blog-page">
    <section class="blog-header">
        <div class="container">
            <h1>Blog</h1>
            <p>Latest insights, tutorials, and updates</p>
        </div>
    </section>
    
    <section class="blog-content">
        <div class="container">
            <div class="blog-grid">
                @yield('content')
            </div>
        </div>
    </section>
</main>

@include('components.footer')
@include('components.foot') 