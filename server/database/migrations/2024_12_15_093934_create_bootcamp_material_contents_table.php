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
        Schema::create('bootcamp_material_contents', function (Blueprint $table) {
            $table->id();
            $table->foreignId('material_id')->constrained('bootcamp_materials')->onDelete('cascade');
            $table->string('title');
            $table->text('description');
            $table->string('content_type');
            $table->string('content_link');
            $table->integer('duration')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bootcamp_material_contents');
    }
};
