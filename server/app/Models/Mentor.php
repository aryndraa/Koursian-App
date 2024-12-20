<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mentor extends Model
{
    use  HasFactory;

    protected $fillable = [
      'email',
      'username',
      'name',
      'password'
    ];

    public function mentorProfile()
    {
        return $this->hasOne(MentorProfile::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'mentor_categories', 'mentor_id', 'category_id');
    }

    public function bootcamps()
    {
        return $this->hasMany(Bootcamp::class);
    }

    public function groupChat()
    {
        return $this->morphOne(bootcampGroupChat::class, 'user');
    }

    public function userChats()
    {
        return $this->hasmany(User::class);
    }
}
