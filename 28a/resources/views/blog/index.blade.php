@extends('layouts.blog-post')

@section('title', 'Blog')

@section('content')
<div class="blog-list">
    <h1 class="page-title">Blog Posts</h1>
    
    <div class="posts">
        @foreach($posts as $post)
            <article class="post-card">
                @if(isset($post['metadata']['featured_image']))
                    <div class="post-image">
                        <a href="{{ route('blog.show', $post['slug']) }}">
                            <img src="{{ $post['metadata']['featured_image'] }}" alt="{{ $post['metadata']['title'] }}">
                        </a>
                    </div>
                @endif
                
                <div class="post-content">
                    <h2 class="post-title">
                        <a href="{{ route('blog.show', $post['slug']) }}">{{ $post['metadata']['title'] }}</a>
                    </h2>
                    
                    <div class="post-meta">
                        <span class="post-date">{{ date('F j, Y', strtotime($post['metadata']['date'])) }}</span>
                        
                        @if(isset($post['metadata']['tags']) && count($post['metadata']['tags']) > 0)
                            <span class="post-tags">
                                @foreach($post['metadata']['tags'] as $tag)
                                    <span class="tag">{{ $tag }}</span>
                                @endforeach
                            </span>
                        @endif
                    </div>
                    
                    <div class="post-excerpt">
                        {{ $post['excerpt'] }}
                    </div>
                    
                    <div class="post-link">
                        <a href="{{ route('blog.show', $post['slug']) }}" class="read-more">Read More</a>
                    </div>
                </div>
            </article>
        @endforeach
    </div>
</div>
@endsection 