import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <ul className='social'>
                <li>
                    <a href='facebook.com' target='_blank'>
                        <img src="/images/fb.png" alt="Facebook" />
                    </a>
                </li>
                <li>
                <a href='twitter.com' target='_blank'>
                    <img src="/images/tw.png" alt="Twitter" />
                    </a>
                </li>
                <li>
                <a href='instagram.com' target='_blank'>
                    <img src="/images/ig.png" alt="Instagram" />
                    </a>
                </li>
            </ul>

            <img className='logo' src="./images/logo.png" alt="Logo" />

            <p>Desenvolvido por Alura.</p>
        </footer>
    )
}

export default Rodape;