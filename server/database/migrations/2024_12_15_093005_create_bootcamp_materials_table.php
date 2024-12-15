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
        Schema::create('bootcamp_materials', function (Blueprint $table) {
            $table->id();
            $table->foreignId('bootcamp_id')->constrained('bootcamps');
            $table->string('title');
            $table->text('description');
            $table->integer('total_durations')->default(0);
            $table->integer('total_contents')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bootcamp_materials');
    }
};
