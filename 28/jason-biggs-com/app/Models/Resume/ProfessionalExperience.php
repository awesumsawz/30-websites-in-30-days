<?php

namespace App\Models\Resume;

use Illuminate\Database\Eloquent\Model;

class ProfessionalExperience extends Model
{
    protected $table = 'professional_experience';
    protected $fillable = ['position', 'company', 'location', 'start_date', 'end_date', 'description'];
} 