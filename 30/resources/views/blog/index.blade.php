@extends('layouts.blog-post')

@section('title', 'Blog')

@section('content')
<div class="blog-page">
    <div class="posts">
        @foreach($posts as $post)
            <article class="blog-card">
                <div class="card-content">
                    <h2 class="card-title">
                        <a href="{{ route('blog.show', $post['slug']) }}">{{ $post['metadata']['title'] }}</a>
                    </h2>
                    
                    <div class="card-meta">
                        <span class="post-date">{{ date('F j, Y', strtotime($post['metadata']['date'])) }}</span>
                        
                        @if(isset($post['metadata']['tags']) && count($post['metadata']['tags']) > 0)
                            <span class="post-tags">
                                @foreach($post['metadata']['tags'] as $tag)
                                    <span class="tag">{{ $tag }}</span>
                                @endforeach
                            </span>
                        @endif
                    </div>
                    
                    <div class="card-excerpt">
                        {{ $post['excerpt'] }}
                    </div>
                    
                    <div class="card-link">
                        <a href="{{ route('blog.show', $post['slug']) }}" class="read-more">Read More</a>
                    </div>
                </div>
            </article>
        @endforeach
    </div>
</div>
@endsection 