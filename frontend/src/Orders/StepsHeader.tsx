
function StepsHeader() {
    return(
        <header className="orders-steps-container">
            <div className="orders-steps-content">
                <h1 className="steps-title">
                    SIGA AS <br/> ETAPAS
                </h1>
                <ul className="steps-items">
                    <li>
                        <span className="steps-number">
                            Selecione os produtos e localização
                        </span>
                    </li>
                    <li>
                        <span className="steps-number">
                            Depois clique em <strong>"ENVIAR"</strong>
                        </span>
                    </li>
                </ul>
            </div>
        </header>
        
    )    
}
export default StepsHeader;