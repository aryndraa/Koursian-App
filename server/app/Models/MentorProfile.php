<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MentorProfile extends Model
{
    protected $fillable = [
        'headline',
        'about',
        'country',
        'total_bootcamps',
        'total_students',
        'total_reviews',
        'link_url',
        'instagram_url',
        'twitter_url',
        'facebook_url',
        'linkedin_url',
        'youtube_url',
    ];

    public function mentor()
    {
        return $this->belongsTo(Mentor::class);
    }
}
