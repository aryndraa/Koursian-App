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
        Schema::create('personal_chats', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('receiver_id');
            $table->string('receiver_type');
            $table->unsignedBigInteger('sender_id');
            $table->string('sender_type');
            $table->text('message');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('personal_chats');
    }
};
