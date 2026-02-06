<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('stories', function (Blueprint $table) {
            $table->id();
            $table->string('title', 100);
            $table->text('story_content');
            $table->enum('status', ['waiting for review', 'approved', 'canceled', 'in review', 'rework'])->default('waiting for review');
            $table->foreignId('author_id')->constrained('users')
                ->cascadeOnDelete();
            $table->foreignId('reviewer_id')->nullable()->constrained('users')
                ->nullOnDelete();
            $table->text('feedback')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stories');
    }
};
