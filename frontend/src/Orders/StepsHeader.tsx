
function StepsHeader() {
    return(
        <header className="orders-steps-container">
            <div className="orders-steps-content">
                <h1 className="steps-title">
                    SIGA AS <br/> ETAPAS
                </h1>
                <ol className="steps-items">
                    <li>
                        <span className="steps-number">
                           1 - Selecione os produtos e localização
                        </span>
                    </li>
                    <li>
                        <span className="steps-number">
                           2 - Depois clique em <strong>"ENVIAR"</strong>
                        </span>
                    </li>
                </ol>
            </div>
        </header>
        
    )    
}
export default StepsHeader;