<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    public function userProfile()
    {
        return $this->hasOne(UserProfile::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'user_categories', 'user_id', 'category_id');
    }

    public function bootcamps()
    {
        return $this->belongsToMany(Bootcamp::class, 'bootcamp_users', 'user_id', 'bootcamp_id');
    }

    public function bootcampReviews()
    {
        return $this->hasMany(BootcampReview::class);
    }

    public function groupChat()
    {
        return $this->morphOne(bootcampGroupChat::class, 'user');
    }

    public function bootcampWishlist()
    {
        return $this->belongsToMany(Bootcamp::class, 'bootcamp_wishlist', 'user_id', 'bootcamp_id');
    }

    public function bootcampPurchases()
    {
        return $this->hasMany(BootcampPurchase::class);
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
