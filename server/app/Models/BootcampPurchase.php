<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BootcampPurchase extends Model
{
    protected $fillable = [
        'purchase_method',
        'price',
        'discount',
        'paid',
        'total_payment',
        'status'
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
