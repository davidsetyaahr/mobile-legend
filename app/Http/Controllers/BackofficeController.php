<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Team;

class BackofficeController extends Controller
{
    public function registrasi()
    {
        $props = [
            'title' => 'Registrasi Peserta',
            'team' => Team::orderBy('id','asc')->get(),
        ];
        return inertia('Backoffice/Registrasi',$props);
    }

    public function acc($id)
    {
        Team::where('id',$id)->update(['status' => '1']);
        return redirect('/registrasi')->with('success', 'Peserta Berhasil Di ACC');        
    }

    public function delete($id)
    {
        Team::where('id',$id)->delete();
        return redirect('/registrasi')->with('success', 'Peserta Berhasil Dihapus');        
    }
    
}
