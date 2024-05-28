<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Services\Articles;
use App\Models\Article;
use App\Http\Requests\StoreArticleRequest;

Route::get('/', function () {
    $articles = (new Articles())->getArticles();

    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'articles' => $articles,
    ]);
});

Route::get('/articles/{slug}', function ($slug) {
    $articles = (new Articles())->getArticles();
    $article = collect($articles)->firstWhere('slug', $slug);

    return Inertia::render('Articles/ShowArticle', [
        'article' => $article,
    ]);
})->name('articles.show');

// Articles admin routes
Route::middleware(['auth', 'verified'])->prefix("admin")->name('admin.')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('dashboard');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Articles CRUD
    Route::get('/articles', function () {
        $articles = (new Articles())->getArticles();

        return Inertia::render('Admin/Articles/Index', [
            'articles' => $articles,
        ]);
    })->name('articles.index');

    Route::get('/articles/create', function () {
        return Inertia::render('Admin/Articles/Create');
    })->name('articles.create');

    Route::post('/articles', function (StoreArticleRequest $request) {
        $article = new Article();
        $article->title = $request->title;
        $article->slug = \Illuminate\Support\Str::slug($request->title);
        $article->body = $request->body;
        $article->save();

        return redirect()->route('admin.articles.index');
    })->name('articles.store');

    Route::get('/articles/{article}/edit', function (Article $article) {
        return Inertia::render('Admin/Articles/Edit', [
            'article' => $article,
        ]);
    })->name('articles.edit');

    Route::patch('/articles/{article}', function (Article $article, StoreArticleRequest $request) {
        $article->title = $request->title;
        $article->slug = \Illuminate\Support\Str::slug($request->title);
        $article->body = $request->body;
        $article->save();

        return redirect()->route('admin.articles.index');
    })->name('articles.update');

    Route::delete('/articles/{article}', function (Article $article) {
        $article->delete();

        return redirect()->route('admin.articles.index');
    })->name('articles.destroy');
});

Route::middleware('auth')->group(function () {

});

require __DIR__.'/auth.php';
