import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiUrl from '../components/AllCountries';
import { Link } from 'react-router-dom';

const CountryInfo = () => {

    const [country, setCountry] = useState([])
    const [isLoading, setIsLoading] = [true]
    const [error, setError] = useState('')

    const { countryName } = useParams()

    const getCountryByName = async () => {
        try {
            const res = await fetch(`'${apiUrl}/name/${countryName}`)

            if (!res.ok) throw new Error('Could Not Find!')

            const data = await res.json()

            setCountry(data)
            setIsLoading(false)

        } catch (error) {

            setIsLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        getCountryByName()
    }, [countryName])

    return <div className='country_info_wrapper'>
        <button><Link to='/'>Back</Link></button>

        {
            country?.map((country, index) => (
                <div className='country-info-container'>
                    <div className='country_info-img'>
                        <img src={country.flags.png} alt='' />
                    </div>

                    <div className='country_info'>
                        <div className='country_info_left'>
                            <h5>Native Name: {country.name.nativeName}</h5>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
}

export default CountryInfo;