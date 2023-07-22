import Jumbotron from '@/Components/Admin/Jumbotron';
import Navbar from '@/Components/Admin/Navbar';
import SocketSensor from '@/Components/Admin/SocketSensor';
import TableItem from '@/Components/Admin/TableItem';
import { Link, Head } from '@inertiajs/react';
import Footer from './Footer';
export default function AllTable(props) {
    // console.log('sensor', props.sensor)
    return (
        <>
            <div className='bg-body'>
                <Head title={props.title} />
                <Navbar active={props.active} />
                <Jumbotron />
                <div className="lg:p-6 mr-auto">
                    <div className="flex justify-between items-center pl-6 pr-6 items-center">
                        <div className="text-section flex items-center">
                            <small className='mr-3 '>Total Data</small>
                            <h1 className='text-2xl  font-bold'>
                                {props.jumlahData}
                            </h1>
                        </div>
                    </div>
                    <TableItem sensor={props.sensor} />
                </div>
                <Footer />
            </div>
        </>
    );
}
