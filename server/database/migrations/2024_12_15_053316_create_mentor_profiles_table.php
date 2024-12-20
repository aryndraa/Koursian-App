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
        Schema::create('mentor_profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('mentor_id')->constrained('mentors');
            $table->string('headline');
            $table->text('about');
            $table->string('country');
            $table->string('total_bootcamps')->default(0);
            $table->string('total_students')->default(0);
            $table->string('total_reviews')->default(0);
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
        Schema::dropIfExists('mentor_profiles');
    }
};
