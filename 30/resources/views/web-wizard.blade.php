@extends('layouts.home')

@section('content')
<div class="showcase-template">
    <section class="intro">
        <h1>Web Wizard</h1>
        <p>Your AI-powered web development companion</p>
    </section>

    <section class="examples">
        <h2>Features</h2>
        <div class="links">
            <a href="#code-generation">Code Generation</a>
            <a href="#style-matching">Style Matching</a>
            <a href="#responsive-design">Responsive Design</a>
            <a href="#dark-mode">Dark Mode Support</a>
        </div>
    </section>

    <section class="gallery-grid">
        <div class="grid-card" style="background-image: url('{{ asset('images/web-wizard/code-generation.jpg') }}')">
            <div class="overlay">
                <div class="content">
                    <h3 class="title">Code Generation</h3>
                    <p class="description">Generate clean, efficient code with AI assistance</p>
                </div>
            </div>
        </div>

        <div class="grid-card" style="background-image: url('{{ asset('images/web-wizard/style-matching.jpg') }}')">
            <div class="overlay">
                <div class="content">
                    <h3 class="title">Style Matching</h3>
                    <p class="description">Match existing styles with precision</p>
                </div>
            </div>
        </div>

        <div class="grid-card" style="background-image: url('{{ asset('images/web-wizard/responsive.jpg') }}')">
            <div class="overlay">
                <div class="content">
                    <h3 class="title">Responsive Design</h3>
                    <p class="description">Create beautiful layouts for all devices</p>
                </div>
            </div>
        </div>

        <div class="grid-card" style="background-image: url('{{ asset('images/web-wizard/dark-mode.jpg') }}')">
            <div class="overlay">
                <div class="content">
                    <h3 class="title">Dark Mode</h3>
                    <p class="description">Seamless dark mode support</p>
                </div>
            </div>
        </div>
    </section>
</div>

<div class="grid-card-modal-wrapper">
    <div class="overlay"></div>
    <div class="grid-card-modal">
        <div class="image">
            <div class="close"><iconify-icon inline icon="ic:round-close"></iconify-icon></div>
            <img src="" alt="Modal Image">
        </div>
        <div class="content">
            <h3 class="title"></h3>
            <p class="description"></p>
        </div>
    </div>
</div>
@endsection 