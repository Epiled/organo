import './CampoTexto.css';

export const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`;

    // let valor = "Felipe De ";

    // const [valor, setValor] = useState('');

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className='campo-texto'>
            <label>
                {props.label}:
            </label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={placeholderModificado} />
        </div>
    )
}