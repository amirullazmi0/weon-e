<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Sensor;
use App\Events\SensorEvent;
use Illuminate\Http\Request;
use function Termwind\render;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Hash;

use Illuminate\Auth\Events\Validated;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

class AdminController extends Controller
{
    //
    public function index()
    {
        $jumlahData = Sensor::all()->count();
        $days = 31;
        // WEEKLY VALUE 1
        $aveWeeklyValue1 = [
            Sensor::whereDay('created_at', '<=', '7')->sum('value1')  / $jumlahData,
            Sensor::whereDay('created_at', '>', '7')->whereDay('created_at', '<=', '14')->sum('value1')  / $jumlahData,
            Sensor::whereDay('created_at', '>', '14')->whereDay('created_at', '<=', '21')->sum('value1') / $jumlahData,
            Sensor::whereDay('created_at', '>', '21')->sum('value1') / $jumlahData,
        ];

        // WEEKLY VALUE 2
        $aveWeeklyValue2 = [
            Sensor::whereDay('created_at', '<=', '7')->sum('value2') / $jumlahData,
            Sensor::whereDay('created_at', '>', '7')->whereDay('created_at', '<=', '14')->sum('value2') / $jumlahData,
            Sensor::whereDay('created_at', '>', '14')->whereDay('created_at', '<=', '21')->sum('value2') / $jumlahData,
            Sensor::whereDay('created_at', '>', '21')->sum('value2') / $jumlahData,
        ];

        // WEEKLY VALUE 3
        $aveWeeklyValue3  = [
            Sensor::whereDay('created_at', '<=', '7')->sum('value3') / $jumlahData,
            Sensor::whereDay('created_at', '>', '7')->whereDay('created_at', '<=', '14')->sum('value3') / $jumlahData,
            Sensor::whereDay('created_at', '>', '14')->whereDay('created_at', '<=', '21')->sum('value3') / $jumlahData,
            Sensor::whereDay('created_at', '>', '21')->sum('value3') / $jumlahData,
        ];


        // WEEKLY VALUE 4
        $aveWeeklyValue4 = [
            Sensor::whereDay('created_at', '<=', '7')->sum('value4') / $jumlahData,
            Sensor::whereDay('created_at', '>', '7')->whereDay('created_at', '<=', '14')->sum('value4') / $jumlahData,
            Sensor::whereDay('created_at', '>', '14')->whereDay('created_at', '<=', '21')->sum('value4') / $jumlahData,
            Sensor::whereDay('created_at', '>', '21')->sum('value4') / $jumlahData,
        ];

        // WEEKLY VALUE 5
        $aveWeeklyValue5 = [
            Sensor::whereDay('created_at', '<=', '7')->sum('value5') / $jumlahData,
            Sensor::whereDay('created_at', '>', '7')->whereDay('created_at', '<=', '14')->sum('value5') / $jumlahData,
            Sensor::whereDay('created_at', '>', '14')->whereDay('created_at', '<=', '21')->sum('value5') / $jumlahData,
            Sensor::whereDay('created_at', '>', '21')->sum('value5') / $jumlahData,
        ];

        //=========================================================== 
        // Monthly
        for ($month = 1; $month <= 12; $month++) {
            $aveMonthlyValue1[$month - 1] = Sensor::whereMonth('created_at', '=', $month)->sum('value1')  / $jumlahData;
            $aveMonthlyValue2[$month - 1] = Sensor::whereMonth('created_at', '=', $month)->sum('value2')  / $jumlahData;
            $aveMonthlyValue3[$month - 1] = Sensor::whereMonth('created_at', '=', $month)->sum('value3')  / $jumlahData;
            $aveMonthlyValue4[$month - 1] = Sensor::whereMonth('created_at', '=', $month)->sum('value4')  / $jumlahData;
            $aveMonthlyValue5[$month - 1] = Sensor::whereMonth('created_at', '=', $month)->sum('value5')  / $jumlahData;
        }
        $data = [
            "title" => "Dashboard",
            "active" => "dashboard",
            "sensor" => Sensor::latest('id')->first(),
            "allSensor" => Sensor::all(),
            "allValue1" => Sensor::orderBy('id', 'desc')->pluck('value1'),
            "allValue2" => Sensor::orderBy('id', 'desc')->pluck('value2'),
            "allValue3" => Sensor::orderBy('id', 'desc')->pluck('value3'),
            "allValue4" => Sensor::orderBy('id', 'desc')->pluck('value4'),
            "allValue5" => Sensor::orderBy('id', 'desc')->pluck('value5'),
            "jumlahData" => $jumlahData,
            "weekly" => [
                "value1" => $aveWeeklyValue1,
                "value2" => $aveWeeklyValue2,
                "value3" => $aveWeeklyValue3,
                "value4" => $aveWeeklyValue4,
                "value5" => $aveWeeklyValue5,
            ],
            "monthly" => [
                "value1" => $aveMonthlyValue1,
                "value2" => $aveMonthlyValue2,
                "value3" => $aveMonthlyValue3,
                "value4" => $aveMonthlyValue4,
                "value5" => $aveMonthlyValue5,
            ],
        ];
        // dd($data['sensor']->created_at->format('d M Y'));
        return Inertia::render('Admin/Home', $data);
    }

    public function allTable()
    {
        $date = Carbon::now();


        $jumlahData = Sensor::all()->count();
        $data = [
            "title" => "Data Tabel",
            "active" => "allTable",
            "sensor" => Sensor::orderBy('id', 'desc')->get(),
            "jumlahData" => $jumlahData,
        ];
        // dd($data['sensor'][0]->created_at->format('d M Y'));
        return Inertia::render('Admin/AllTable', $data);
    }
    public function calibrate()
    {
        $data = [
            "title" => "Kalibrasi",
            "active" => "calibrate",
            "sensor" => Sensor::orderBy('id', 'desc')->get(),
        ];
        return Inertia::render('Admin/Calibrate', $data);
    }
    public function prediction()
    {
        $data = [
            "title" => "Prediction",
            "active" => "prediction",
            "sensor" => Sensor::orderBy('id', 'desc')->get(),
        ];
        return Inertia::render('Admin/Prediction', $data);
    }

    public function profil()
    {
        $data = [
            "title" => "Profil",
            "active" => "profil",
            "sensor" => Sensor::orderBy('id', 'desc')->get(),
            "auth" => auth()->user(),
        ];
        return Inertia::render('Admin/Profil', $data);
    }
    public function profil_update(User $user, Request $request)
    {
        $rules = ([
            'name' => 'required',
        ]);

        if ($request->email != auth()->user()->email) {
            # code...
            $rules['email'] = 'required|email:dns|unique:users';
        };
        $validateData = $request->validate($rules);

        User::where('id', auth()->user()->id)
            ->update($validateData);

        return back()->with('message', 'update data profil berhasil');
    }

    public function password_update(User $user, Request $request)
    {
        $validateData = $request->validate([
            'password' => 'required',
            'password2' => 'required'
        ]);


        $hash = Hash::make($validateData['password']);
        User::whereId(auth()->user()->id)->update([
            'password' => $hash
        ]);

        return back()->with('success', 'update Password Berhasil');
    }
}
