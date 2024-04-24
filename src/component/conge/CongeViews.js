import React,{useEffect, useState}from 'react';
import axios from 'axios';
import {FaEye,FaEdit, FaTrashAlt} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import NavBar from '../common/NavBar';
const CongeViews = () => {
    const[conges,setConges]=useState([]);

    useEffect(() =>{
        loadConges();
    },[])

    const loadConges=async()=>{
        const result=await axios.get("http://localhost:8082/conges",{
            validateStatus:()=>{
                return true;
            }});
            if(result.status===302){
                 setConges(result.data);
            }
       
    }

  return (
    <section>
        <NavBar />
      <table className='table table-bordered table-hover shadow'>
        <thead>
            <tr className='text-center'>
                <th>Id</th>
                <th>Type</th>
                <th>DateDemande</th>
                <th>Duree</th>
                <th>DateDebut</th>
                <th>DateFin</th>
                <th>Status</th>
                <th>IdEmpl</th>
                <th colSpan="3">Actions</th>
            </tr>
        </thead>
        <tbody className='text-center'>
            {conges.map((conge,index)=>(
            
            <tr key={conge.idConge}>
                <th scope="row" key={index}>
                    {index + 1}
                </th>
    
                <td>{conge.typeConge}</td>
                <td>{conge.dateDemandeConge}</td>
                <td>{conge.duree}</td>
                <td>{conge.dateDebutConge}</td>
                <td>{conge.dateFinConge}</td>
                <td>{conge.statutConge}</td>
                <td>{conge.employe.idEmploye}</td>
                <td className='mx-2'>
                <Link to={`/view-conge/${conge.idConge}`}  className='btn btn-info'
                  > <FaEye /> </Link>  
               </td>
                <td className='mx-2'>
                  <Link to={`/edit-conge/${conge.idConge}`}  className='btn btn-warning'
                  > <FaEdit /> </Link>  
               </td>
                <td className='mx-2'>
                <button className='btn btn-danger'>
                   <FaTrashAlt /> 

            </button></td>
                
        
            </tr>



            ))}
            
        </tbody>
      </table>
    </section>
  )
}

export default CongeViews
