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
        Schema::create('bootcamps', function (Blueprint $table) {
            $table->id();
            $table->foreignId('mentor_id')->constrained('mentors');
            $table->string('name');
            $table->text('greeting');
            $table->string('level');
            $table->text('description');
            $table->json('topics');
            $table->json('benefits');
            $table->json('requirements');
            $table->json('languages');
            $table->integer('price')->default(0);
            $table->integer('ratings')->default(0);
            $table->integer('total_materials')->default(0);
            $table->integer('total_contents')->default(0);
            $table->integer('total_durations')->default(0);
            $table->integer('total_students')->default(0);
            $table->dateTime('start_date');
            $table->dateTime('end_date')->default(null);
            $table->string('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bootcamps');
    }
};
