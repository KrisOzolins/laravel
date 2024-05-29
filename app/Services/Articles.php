<?php

namespace App\Services;

use App\Models\Article;
use Illuminate\Support\Facades\Cache;

class Articles
{
    public function getArticles()
    {
        $cacheKey = 'articles.all';
        $cacheDuration = 60;

        $articles = Cache::remember($cacheKey, $cacheDuration, function () {
            return Article::latest()->get();
        });

        return $articles;
    }
}
