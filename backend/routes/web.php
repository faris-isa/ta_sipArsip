<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OfferController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/products/count', array('middleware' => 'cors', 'uses' => [ProductController::class, 'getCount']));
// Route::get('/products/count', [ProductController::class, 'getCount']);
// Route::get('/offer/count', [OfferController::class, 'getOffer']);
// Route::get('/offer/acccount', [OfferController::class, 'getOfferAcc']);
// Route::get('/offer/deccount', [OfferController::class, 'getOfferDec']);

// Route::patch('api/products/status/{id}', [ProductController::class, 'status']);
// Route::patch('api/offers/status/{id}', [OfferController::class, 'status']);
