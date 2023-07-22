import Graph from '@/Components/Admin/Graph';
import Jumbotron from '@/Components/Admin/Jumbotron';
import Navbar from '@/Components/Admin/Navbar';
import SocketSensor from '@/Components/Admin/SocketSensor';
import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';

import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import Footer from './Footer';

window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    // key: '43b990a5bc74c642315a',
    key: '45d39f4664c31a6e0645',
    cluster: 'ap1',
    forceTLS: true
});


export default function Home(props) {
    const [iniSocket, setSocket] = useState('')

    window.Echo.channel('Sensor-Event').listen("SensorEvent", (event) => {
        setSocket(event.message);
    });


    return (
        <>
            <div className='bg-body'>
                <Head title={props.title} />
                <Navbar active={props.active} />
                <Jumbotron />
                <button className="btn btn-sm mt-3 lg:ml-10 lg:mr-10 ml-2 mr-2 w-1/3 lg:w-32">{!iniSocket ? "Disconnnect" : "Connected"}</button>
                <div className="lg:p-6 mr-auto">
                    <SocketSensor sensor={iniSocket} latest={props.sensor} />
                    <Graph sensor={props.allSensor} weekly={props.weekly} monthly={props.monthly} />
                </div>
                <Footer />
            </div>
        </>
    );
}
