<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BootcampMaterialContent extends Model
{
    protected $fillable = [
        'title',
        'description',
        'content_type',
        'content_link',
        'duration'
    ];

    public function bootcampMaterial()
    {
        return $this->belongsTo(BootcampMaterial::class);
    }
}
