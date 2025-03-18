@extends('layouts.blog-post')

@section('title', $post['metadata']['title'])

@section('content')
<article class="blog-post">
    <header class="post-header">
        <h1 class="post-title">{{ $post['metadata']['title'] }}</h1>
        
        <div class="post-meta">
            <span class="post-date">
                {{ date('F j, Y', strtotime($post['metadata']['date'])) }}
            </span>
            
            @if(isset($post['metadata']['tags']) && count($post['metadata']['tags']) > 0)
                <span class="post-tags">
                    @foreach($post['metadata']['tags'] as $tag)
                        <span class="tag">{{ $tag }}</span>
                    @endforeach
                </span>
            @endif
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
            {{-- Add previous/next post navigation here if needed --}}
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