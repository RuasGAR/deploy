<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function getTest() {
        $message = 'Muito obrigado por tudo, Palmeira';
        return response()->json($message);
    }
}
