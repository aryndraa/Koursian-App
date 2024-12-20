<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BootcampMaterial extends Model
{
    protected $fillable = [
        'title',
        'description',
        'total_durations',
        'total_contents'
    ];

    public function bootcamp()
    {
        return $this->belongsTo(Bootcamp::class);
    }

    public function contents()
    {
        return $this->hasMany(BootcampMaterialContent::class);
    }
}
