@extends('layouts.blog')

@section('content')
    @foreach($posts as $post)
        @include('components.blog-card', ['post' => $post])
    @endforeach
    
    <div class="pagination">
        {{ $posts->links() }}
    </div>
@endsection 