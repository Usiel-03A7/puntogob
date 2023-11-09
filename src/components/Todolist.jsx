import { useState } from 'react';
import style from './Todolist.module.css';

const Todolist = () => {
    const [datos, setDatos] = useState([]);
    const [nuevoDato, setNuevoDato] = useState('');
    const [indiceSeleccionado, setIndiceSeleccionado] = useState(null);

    
    const agregarDato = () => {
        if (nuevoDato.trim() !== '') {
            setDatos([...datos, { id: Date.now(), texto: nuevoDato }]);
            setNuevoDato('');
        }
    };

    
    const actualizarDato = () => {
        if (indiceSeleccionado !== null) {
            const nuevosDatos = [...datos];
            nuevosDatos[indiceSeleccionado].texto = nuevoDato;
            setDatos(nuevosDatos);
            setNuevoDato('');
            setIndiceSeleccionado(null);
        }
    };

    
    const eliminarDato = (indice) => {
       // datos.pop(indice);
        const nuevosDatos = datos.filter((index) => index !== indice);
        setDatos(nuevosDatos);
    };

    return (
        <div className={style.container}>
            <h2>Lista de Datos</h2>
            <ul>
                {datos.map((dato, index) => (
                    <li key={dato.id}>
                        {dato.texto}
                        <button onClick={() => setIndiceSeleccionado(index)}>Editar</button>
                        <button onClick={() => eliminarDato(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>

            <div>
                <h2>{indiceSeleccionado !== null ? 'Editar' : 'Agregar'} Dato</h2>
                <input
                    type="text"
                    value={nuevoDato}
                    onChange={(e) => setNuevoDato(e.target.value)}
                />

                {indiceSeleccionado !== null ? (
                    <button onClick={actualizarDato}>Actualizar</button>
                ) : (
                    <button onClick={agregarDato}>Agregar</button>
                )}
            </div>
        </div>
    );
};

export default Todolist;
