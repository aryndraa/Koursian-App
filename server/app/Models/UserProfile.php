<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model
{
    protected $fillable = [
        'bio',
        'link_url',
        'instagram_url',
        'twitter_url',
        'facebook_url',
        'linkedin_url',
        'youtube_url',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
