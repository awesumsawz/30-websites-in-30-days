@extends('layouts.blog')

@section('title', 'Blog')

@section('content')
    @foreach($posts as $post)
        <article class="blog-card">
            <a href="{{ route('blog.show', $post['slug']) }}" class="card-link-wrapper">
                <div class="card-content">
                    <div class="card-meta">
                        <span class="post-date">{{ date('F j, Y', strtotime($post['metadata']['date'])) }}</span>
                    </div>
                    
                    <h2 class="card-title">
                        {{ $post['metadata']['title'] }}
                    </h2>
                    
                    <div class="card-excerpt">
                        {{ $post['excerpt'] }}
                    </div>
                    
                    @if(isset($post['metadata']['tags']) && is_array($post['metadata']['tags']) && count($post['metadata']['tags']) > 0)
                    <div class="post-tags">
                        @foreach($post['metadata']['tags'] as $tag)
                        <a href="{{ route('blog.index', array_merge(request()->except(['tag', 'page']), ['tag' => $tag])) }}" class="tag-badge" onclick="event.stopPropagation()">
                            {{ $tag }}
                        </a>
                        @endforeach
                    </div>
                    @endif
                    
                    <div class="card-link">
                        <span class="read-more">Read more</span>
                    </div>
                </div>
            </a>
        </article>
    @endforeach
@endsection

@section('pagination')
    <div class="blog-pagination">
        {{ $posts->appends(request()->except('page'))->links() }}
    </div>
@endsection 