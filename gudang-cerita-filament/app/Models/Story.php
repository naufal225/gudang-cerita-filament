<?php

namespace App\Models;

use App\Observers\StoryObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

#[ObservedBy(StoryObserver::class)]
class Story extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'title',
        'story_content',
        'status',
        'author_id',
        'reviewer_id',
        'feedback'
    ];

    public function author() {
        return $this->belongsTo(User::class, 'author_id');
    }

    public function reviewer() {
        return $this->belongsTo(User::class, 'reviewer_id');
    }
}
