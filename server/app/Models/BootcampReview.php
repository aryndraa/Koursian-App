<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BootcampReview extends Model
{
    protected $fillable = [
        'rating',
        'comment'
    ];

    public function bootcamp()
    {
        return $this->belongsTo(Bootcamp::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
