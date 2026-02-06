<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

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
}
