import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Welcome = () => {
    const { user } = useContext(AuthContext)
    return (


        <div className='h-screen text-gray-700 flex flex-col justify-center items-center pb-16'>
            <Player
                autoplay
                loop
                src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
                style={{ height: '300px', width: '300px' }}
            >
                <Controls buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
            <div className='flex justify-center items-center'>
                <p className='text-6xl font-bold'>Welc</p>
                <div className='w-9 h-9 border-8 border-dashed rounded-full animate-spin mt-3 border-green-400'></div>
                <p className='text-6xl font-bold mr-2'>me</p>
                <p className='text-6xl font-bold'>To</p>
            </div>
            <div className='flex justify-center text-gray-500 items-center mt-4'>
                <p className='text-3xl font-medium'>User Dashboard</p>
            </div>
        </div>

    );
};

export default Welcome;