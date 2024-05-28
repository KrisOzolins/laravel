<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Factories\ArticleFactory;
use App\Models\Article;

class ArticleSeeder extends Seeder
{
    protected $data =  [
        [
            'slug' => 'how-to-use-laravel',
            'title' => 'How to use Laravel',
            'body' => 'Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel attempts to take the pain out of development by easing common tasks used in most web projects.',
        ],
        [
            'slug' => 'how-to-use-vue-js',
            'title' => 'How to use Vue.js',
            'body' => 'Vue.js is a progressive JavaScript framework used to build interactive web interfaces. It is one of the famous frameworks used to simplify web development. Vue.js is very easy to understand and use.',
        ],
        [
            'slug' => 'how-to-use-react-js',
            'title' => 'How to use React.js',
            'body' => 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
        ],
        [
            'slug' => 'how-to-use-angular-js',
            'title' => 'How to use Angular.js',
            'body' => 'AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML\'s syntax to express your application\'s components clearly and succinctly.',
        ],
        [
            'slug' => 'how-to-use-node-js',
            'title' => 'How to use Node.js',
            'body' => 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
        ],
        [
            'slug' => 'how-to-use-express-js',
            'title' => 'How to use Express.js',
            'body' => 'Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.',
        ],
        [
            'slug' => 'how-to-use-django',
            'title' => 'How to use Django',
            'body' => 'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, Django takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel.',
        ],
        [
            'slug' => 'how-to-use-flask',
            'title' => 'How to use Flask',
            'body' => 'Flask is a lightweight WSGI web application framework. It is designed to make getting started quick and easy, with the ability to scale up to complex applications. It began as a simple wrapper around Werkzeug and Jinja and has become one of the most popular Python web application frameworks.',
        ],
        [
            'slug' => 'how-to-use-ruby-on-rails',
            'title' => 'How to use Ruby on Rails',
            'body' => 'Ruby on Rails, or Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages.',
        ],
        [
            'slug' => 'how-to-use-spring-boot',
            'title' => 'How to use Spring Boot',
            'body' => 'Spring Boot is an open-source Java-based framework used to create micro-services. It is developed by Pivotal Team and is used to build stand-alone and production-ready spring applications. Spring Boot contains a comprehensive infrastructure support for developing a micro-service and enables you to develop enterprise-ready applications that you can "just run".',
        ],
    ];

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // ArticleFactory::new()->count(10)->create();
        // $this->call(ArticleFactory::class);

        foreach ($this->data as $article) {
            Article::create($article);
        }

        $this->command->info('Articles seeded!');
    }
}
