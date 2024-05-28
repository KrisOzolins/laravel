<?php

namespace App\Services;

use App\Models\Article;

class Articles
{
    public function getArticles()
    {
        // return Article::all();
        // get all and sort desc by id
        return Article::latest()->get();
    }
}
