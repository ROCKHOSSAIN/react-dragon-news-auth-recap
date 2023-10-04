
import Navbar from '../Shared/Navbar/Navbar';
import Header from '../Shared/Header/Header';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import { useParams } from 'react-router-dom';

const News = () => {
    const {id} = useParams
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid grid-cols-4'>
                <div className='col-span-3'>
                <h2>Hi from left side</h2>
                </div>
                <div className='cols-span-1'>

                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;