@extends('layouts.blog-post')

@section('title', $post['metadata']['title'])

@section('content')
<article class="blog-post">
    <div class="back-link">
        <a href="{{ route('blog.index') }}" class="back-to-posts">
            <span class="back-arrow">&larr;</span> Back to all posts
        </a>
    </div>

    <header class="post-header">
        <h1 class="post-title">{{ $post['metadata']['title'] }}</h1>
        
        @if(isset($post['metadata']['tags']) && is_array($post['metadata']['tags']) && count($post['metadata']['tags']) > 0)
            <div class="post-tags">
                <div class="tags-wrapper">
                    @foreach($post['metadata']['tags'] as $tag)
                        <a href="{{ route('blog.index', ['tag' => $tag]) }}" class="tag-badge">
                            {{ $tag }}
                        </a>
                    @endforeach
                </div>
            </div>
        @endif
        
        <div class="post-meta">
            <span class="post-date">{{ $post['metadata']['formatted_date'] ?? date('F j, Y', strtotime($post['metadata']['date'])) }}</span> 
            <span class="reading-time">• {{ $post['metadata']['reading_time'] }} min read</span>
        </div>
    </header>
    
    @if(isset($post['metadata']['featured_image']))
        <div class="post-featured-image">
            <img src="{{ $post['metadata']['featured_image'] }}" alt="{{ $post['metadata']['title'] }}">
        </div>
    @endif
    
    <div class="post-content">
        {!! $post['content'] !!}
    </div>
    
    <div class="post-footer">
        <div class="post-navigation">
            @if(isset($previousPost))
                <a href="{{ route('blog.show', $previousPost['slug']) }}" class="previous-post">&larr; {{ $previousPost['metadata']['title'] }}</a>
            @endif
            
            @if(isset($nextPost))
                <a href="{{ route('blog.show', $nextPost['slug']) }}" class="next-post">{{ $nextPost['metadata']['title'] }} &rarr;</a>
            @endif
        </div>
        
        <div class="post-share">
            <h3>Share this post</h3>
            <div class="share-buttons">
                <a href="https://twitter.com/intent/tweet?url={{ urlencode(request()->url()) }}&text={{ urlencode($post['metadata']['title']) }}" target="_blank" class="share-twitter">Twitter</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u={{ urlencode(request()->url()) }}" target="_blank" class="share-facebook">Facebook</a>
                <a href="https://www.linkedin.com/shareArticle?mini=true&url={{ urlencode(request()->url()) }}&title={{ urlencode($post['metadata']['title']) }}" target="_blank" class="share-linkedin">LinkedIn</a>
            </div>
        </div>
    </div>
</article>
@endsection 