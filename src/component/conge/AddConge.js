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
import './AddConge.css'; // Importez votre fichier CSS pour AddConge
import NavBar from '../common/NavBar';


const AddConge = () => {



    let navigate = useNavigate();
    const [showForm, setShowForm] = useState(false); // État pour afficher ou masquer le formulaire

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const [conge, setConges] = useState({
        employe: {
            idEmploye: 4, // Initialisation à une chaîne vide
        },
        dateDebutConge: '',
        dateFinConge: '',
        typeConge: '',
    });

    const {
        employe: { idEmploye }, // Initialisation à une chaîne vide
        dateDebutConge,
        dateFinConge,
        typeConge,
    } = conge;

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Si le champ appartient à l'objet employe
        if (name.startsWith('employe.')) {
            setConges((prevConge) => ({
                ...prevConge,
                employe: {
                    ...prevConge.employe,
                    [name.substring(8)]: value,
                },
            }));
        } else {
            setConges((prevConge) => ({
                ...prevConge,
                [name]: value,
            }));
        }
    };

    const saveConge = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:8082/conges/${idEmploye}`, conge);
        toast.success('Ajouté avec succès', { autoClose: 5000 });
        navigate('/add-absence');
    };

    return (
        <div className='add-conge-container'>
            <ToastContainer />
            <NavBar />
            <div className='row'>
                <div className='col-md-6'>
                    <div>
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
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='py-2 px-5 offset-2 shadow' style={{ height: '85vh' }}>
                        {showForm ? (
                            <div>
                                <h2 className='mt-5'>Demander Congé</h2>
                                <form onSubmit={(e) => saveConge(e)}>
                                    <div>
                                        <div className='input-group mb-5'>
                                            
                                       

                                        </div>
                                        <div className='input-group mb-5'>
                                            <label className='input-group-text' htmlFor='dateDebutConge'>Date de début de congé</label>
                                            <input className="form-control col-sm-6" type="date" name="dateDebutConge"
                                                id="dateDebutConge" required value={dateDebutConge} onChange={(e) => handleInputChange(e)} />
                                        </div>
                                        <div className='input-group mb-5'>
                                            <label className='input-group-text' htmlFor='dateFinConge'>Date de fin de congé</label>
                                            <input className="form-control col-sm-6" type="date" name="dateFinConge"
                                                id="dateFinConge" required value={dateFinConge} onChange={(e) => handleInputChange(e)} />
                                        </div>
                                        <div className='input-group mb-5'>
                                            <label className='input-group-text' htmlFor='typeConge'>Type de congé</label>
                                            <select className="form-select col-sm-6" name="typeConge" id="typeConge" required value={typeConge} onChange={(e) => handleInputChange(e)}>
                                                <option value="">Choisissez un type de congé</option>
                                                <option value="Maladie">Maladie</option>
                                                <option value="Accident_de_travail">Accident de travail</option>
                                                <option value="Maternite">Maternité</option>
                                                <option value="Raison_Familiale">Raison familiale</option>
                                                <option value="Vacances">Vacances</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='row mb-5'>
                                        <div className='col-sm-4'>
                                            <button type="submit" className='btn btn-outline-success btn-lg'>Confirmer</button>
                                        </div>
                                        <div className='col-sm-4'>
                                            <button type="button" className='btn btn-outline-warning btn-lg' onClick={toggleForm}>Annuler</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-light col-sm-4" onClick={toggleForm}>Demander Congé</button>
                                <Link to="/add-absence" className="btn btn-light col-sm-4">Demander Absence</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddConge;
