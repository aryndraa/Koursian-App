<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name',
    ];


    public function users()
    {
        return $this->belongsToMany(User::class, 'user_categories', 'category_id', 'user_id');
    }

    public function mentors()
    {
        return $this->belongsToMany(User::class, 'mentor_categories', 'category_id', 'mentor_id');
    }

    public function bootcamps()
    {
        return $this->belongsToMany(Bootcamp::class, 'bootcamp_categories', 'category_id', 'bootcamp_id');
    }

}
