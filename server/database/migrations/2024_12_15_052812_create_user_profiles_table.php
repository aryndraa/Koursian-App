<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->string('bio')->default(null);
            $table->string('link_url')->default(null);
            $table->string('instagram_url')->default(null);
            $table->string('twitter_url')->default(null);
            $table->string('facebook_url')->default(null);
            $table->string('linkedin_url')->default(null);
            $table->string('youtube_url')->default(null);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_profiles');
    }
};
