import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import NavBar from '../common/NavBar';


const AddAbsence = () => {
    let navigate = useNavigate();
   
    const [showForm, setShowForm] = useState(false); // État pour afficher ou masquer le formulaire

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const [absence, setAbsences] = useState({
        employe: {
            idEmploye: 4, // Initialisation à une chaîne vide
        },
        dateAbsence: '',
        heureDebutAbsence: '',
        heureFinAbsence: '',
        justificationAbsence: '',
    });

    const {
        employe: { idEmploye }, // Initialisation à une chaîne vide
        dateAbsence,
        heureDebutAbsence,
        heureFinAbsence,
        justificationAbsence,
    } = absence;

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Si le champ appartient à l'objet employe
        if (name.startsWith('employe.')) {
            setAbsences((prevAbsence) => ({
                ...prevAbsence,
                employe: {
                    ...prevAbsence.employe,
                    [name.substring(8)]: value,
                },
            }));
        } else {
            setAbsences((prevAbsence) => ({
                ...prevAbsence,
                [name]: value,
            }));
        }
    };

    const saveAbsence = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:8082/absences/${idEmploye}`, absence);
        toast.success('Ajouté avec succès', { autoClose: 5000 });
        navigate('/AddConge');
    };

    return (
        <div className='add-conge-container' >
            <ToastContainer />
            <NavBar />
            <div className='row'>
                <div className='col-md-6'>
                    {    <div>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
      />
    </div>}
                </div>
                <div className='col-md-6'>
                <div className='py-2 px-5 offset-2 shadow' style={{ height: '85vh' }}>
                        {showForm ? (
                            <div>
                                <h2 className='mt-5'>Demander Absenee</h2>
                                <form onSubmit={(e) => saveAbsence(e)}>
                                    <div >


<div className='input-group mb-4'>

<input 
hidden
  className="form-control col-sm-6" 
  type="number" 
  name="employe.idEmploye" // Le nom du champ dans le formulaire
  id="employe.idEmploye" // L'ID du champ
  required 
  value={4} // La valeur du champ
  onChange={(e) => handleInputChange(e)} // La fonction de gestion du changement
/>    
</div>



  <div className='input-group mb-4'>
<label className='input-group-text' htmlFor='dateAbsence'>dateAbsence</label>
<input className="form-control col-sm-6" type="date" name="dateAbsence"
id="dateAbsence" required value={dateAbsence} onChange={(e)=>handleInputChange(e)} />    
</div>

<div className='input-group mb-4'>
    <label className='input-group-text' htmlFor='heureDebutAbsence'>Heure de début de l'absence</label>
    <input className="form-control col-sm-6" type="time" name="heureDebutAbsence" id="heureDebutAbsence" required value={heureDebutAbsence} onChange={(e)=>handleInputChange(e)} />    
</div>
<div className='input-group mb-4'>
    <label className='input-group-text' htmlFor='heureFinAbsence'>Heure de fin de l'absence</label>
    <input className="form-control col-sm-6" type="time" name="heureFinAbsence" id="heureFinAbsence" required value={heureFinAbsence} onChange={(e)=>handleInputChange(e)} />    
</div>

<div className='input-group mb-4'>
    <label className='input-group-text' htmlFor='justificationAbsence'>Justification de l'absence</label>
    <input className="form-control col-sm-6" type="text" name="justificationAbsence" id="justificationAbsence" required value={justificationAbsence} onChange={(e)=>handleInputChange(e)} />    
</div>


  <div className='row mb-5'>

<div className='col-sm-4'>
  <button type="submit" 
  className='btn btn-outline-success btn-lg'>
       Confirmer
  </button>
</div>


<div className='col-sm-4'>
  <button type="button" 
  className='btn btn-outline-warning btn-lg' onClick={toggleForm}>
       Annuler
  </button>
</div>
</div>
</div>
                                </form>
                            </div>
                        ) : (
                            <div className="d-flex justify-content-between">
                    <Link to="/AddConge" className="btn btn-light col-sm-4">Demander Congé</Link>
                    <Link to="/add-absence" className="btn btn-light col-sm-4" onClick={toggleForm}>Demander Absence</Link>
                </div>
                           
                          
                        )}  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAbsence;
