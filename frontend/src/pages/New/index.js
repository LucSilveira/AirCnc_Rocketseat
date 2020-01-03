import React, {useState, useMemo} from 'react';
import camera from '../../assets/camera.svg';
import './styles.css';
import { url } from 'inspector';

export default function New(){
    const [thumbnail, setThumbnail] = useState(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null
    }, [thumbnail])

    function handleSubmit(){

    }

    return (
        <form onSubmit={handleSubmit}>
            <label id="thumbnail" style={{backgroundImage: `url(${preview})`}}>
                <input type="file" onChange={event => setThumbnail(event.target.files[0])}/>
                <img src={camera} alt="Selecione a imagem"/>
            </label>
            <label htmlFor="company">Empresa *</label>
            <input 
                type="text"
                id="company"
                placeholder="Sua empresa"
                value={company}
                onChange={event => setCompany(event.target.value)}
            />
            <label htmlFor="techs">Tecnologias * <span>(em branco para gratuito)</span></label>
            <input 
                type="text"
                id="techs"
                placeholder="Informe as tecnologias utilizadas"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />
            <label htmlFor="price">Valor da diaria * <span>(separadas por vírgulas)</span></label>
            <input 
                type="text"
                id="price"
                placeholder="Informe o valor da diario"
                value={price}
                onChange={event => setPrice(event.target.value)}
            />

            <button type="submit" className="btn">Cadastrar</button>
        </form>
    )
}