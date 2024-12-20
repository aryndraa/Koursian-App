<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MentorChat extends Model
{
    protected $fillable = [
        'message',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function mentor()
    {
        return $this->belongsTo(Mentor::class);
    }
}
