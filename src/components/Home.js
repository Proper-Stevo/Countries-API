import '../app.css';
import { Routes, Route } from 'react-router-dom';
import AllCountries from './AllCountries';
import CountryInfo from './CountryInfo';

const Home = () => (
    <>
        <div className='header'>
            <div className='container'>
                <h5>What Country Would You Like To See?</h5>
            </div>
        </div>
        <div className='container' />
        <Routes>
            <Route path='/' element={<AllCountries />} />
            <Route path='/country/:countryName' element={<CountryInfo />} />
        </Routes>
    </>
)

export default Home;