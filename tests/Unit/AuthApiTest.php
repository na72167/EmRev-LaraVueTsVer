<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithoutMiddleware;

class AuthApiTest extends TestCase
{
  use RefreshDatabase;
  use WithoutMiddleware;
  // なぜテストでWithoutMiddlewareするとRoute Model Bindingが無効化されるのか確認してみた
  // https://qiita.com/NakanishiTetsuhiro/items/a4507cb147355b3d8895



  /**
   * @test
   * @return void
   */
  public function test_新しいユーザーを作成して返却する()
  {
    $data = [
      'email' => 'dummy@gmail.com',
      'password' => 'test12345',
    ];
    $response = $this->json('POST', route('register'), $data);
    $response->assertStatus(201);
  }

  /**
   * @return void
   */
  public function test_ログイン()
  {
    $data = [
      'email' => 'dummy@gmail.com',
      'password' => 'test12345',
    ];
    $response = $this->json('POST', route('login'), $data);
    $response->assertStatus(201);
  }

  /**
   * @return void
   */
  public function test_パスワード変更認証キー発行()
  {
    $data = [
      'email' => 'dummy@gmail.com'
    ];
    $response = $this->json('POST', route('passwordReminder'), [
      'email' => 'dummy@gmail.com',
    ]);
    $response->assertStatus(201);
  }

  /**
   * @return void
   */
  public function test_パスワード変更()
  {
    $data = [
      'email' => 'dummy@gmail.com',
      'auth_key' => '#'
    ];

    $response = $this->json('POST', route('passwordReceive'), [
      'email' => 'dummy@gmail.com',
      // TODO:認証キーのテストデータの発行ができる関数を探す。
      'auth_key' => '#'
    ]);
    $response->assertStatus(201);
  }
}
