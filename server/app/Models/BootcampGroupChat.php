<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BootcampGroupChat extends Model
{
    protected $fillable = [
        'message'
    ];

    public function user()
    {
        return $this->morphTo();
    }

    public function bootcamp()
    {
        return $this->belongsTo(bootcamp::class);
    }
}
