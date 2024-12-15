<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bootcamp extends Model
{
    protected $fillable = [
        'name',
        'greeting',
        'level',
        'description',
        'topics',
        'benefits',
        'requirements',
        'languages',
        'price',
        'ratings',
        'total_materials',
        'total_contents',
        'total_durations',
        'total_students',
        'start_at',
        'end_at',

    ];

    public function mentor()
    {
        return $this->belongsTo(Mentor::class);
    }

    public function materials()
    {
        return $this->hasMany(BootcampMaterial::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'bootcamp_categories', 'bootcamp_id', 'category_id');
    }

    public function users ()
    {
        return $this->belongsToMany(User::class, 'bootcamp_users', 'bootcamp_id', 'user_id');
    }

    public function reviews()
    {
        return $this->hasMany(BootcampReview::class);
    }

    public function groupChat()
    {
        return $this->hasMany(BootCampGroupChat::class);
    }

    public function wishlist()
    {
        return $this->belongsToMany(User::class, 'bootcamp_wishlist', 'bootcamp_id', 'user_id');
    }

    public function purchases()
    {
        return $this->hasMany(BootcampPurchase::class);
    }
}
