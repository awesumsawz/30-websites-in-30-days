@extends('layouts.blog-post')

@section('title')
    {{ $post->title }}
@endsection

@section('date')
    {{ $post->published_at->format('F j, Y') }}
@endsection

@section('image')
    {{ asset($post->image) }}
@endsection

@section('content')
    {!! $post->content !!}
@endsection

@section('navigation')
    <div class="post-nav-links">
        @if($previousPost)
            <a href="{{ url('/blog/' . $previousPost->slug) }}" class="prev-post">
                <span class="nav-arrow">←</span>
                <span class="nav-title">{{ $previousPost->title }}</span>
            </a>
        @endif
        
        @if($nextPost)
            <a href="{{ url('/blog/' . $nextPost->slug) }}" class="next-post">
                <span class="nav-title">{{ $nextPost->title }}</span>
                <span class="nav-arrow">→</span>
            </a>
        @endif
    </div>
@endsection 