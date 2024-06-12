import React, { useState } from 'react'
import classes from './Api.module.css'
import axios from 'axios'

const Api = () => {
    const [data,setData] = useState([]);
    const [dataLoading,setdataLoading]= useState(false);

    const fetch = async() => {
        setdataLoading(true);
        try {
            const result = await axios.get('https://randomuser.me/api')
            
            console.log(result.data.results[0])
            setData(result?.data?.results[0])
            
        } catch (error) {
            
        }
        finally{
            setdataLoading(false)
        }
    }

    
  return (
    <div className={classes.topDiv}>
        <div>
            
            {/* <img src={} /> */}
            <div>

                {
                    dataLoading?
                    'Please wait we are generating your story':
                    <>
                     <img src={data?.picture?.medium} width={100} height={100} className={classes.img} />
                     <h1>Bio of {data?.name?.first} {data?.name?.last}</h1>
                    <h4 className={classes.firstText}>{data?.name?.title} {data?.name?.first} {data?.name?.last} is a {data?.gender} and lives at no {data?.location?.street?.number} {data?.location?.street?.name} {data?.location?.city},{data?.location?.country},postcode {data?.location?.postcode} 
                     with the timzone offset - {data?.location?.timezone?.offset},{data?.location?.timezone?.description}, born on {data?.dob?.date} which means he is {data?.dob?.age} years old. 
                    His contact info is as follows - email address: {data?.email} and phone-number: {data?.cell}.
                </h4>
                </>}
            </div>
            <button className={classes.btn} onClick={fetch} >Generate Story</button>
        </div>
    </div>
  )
}

export default Api