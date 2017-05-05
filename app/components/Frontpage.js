import React from 'react'


function Frontpage(props){

  const text = `Palvelumme "Rakenna se" tarjoaa sinulle mahdollisuuden ja avun rakentaa unelmiesi kehon tai vähintään syyn nousta sohvalta lenkkipolulle. Palvelu
      tarjoaa kattavan ja monipuolisen treenikalenterin jonne saat itse lisättyä
      juuri sellaisia treenejä kun haluat. Voit halutessasi valita myös
      meidän tarkoin sunnittelemistamme treeniohjelmista sinulle sopivan. Palvelu
      tukee kehittymistäsi olit sitten kehonrakenta tai sohvaperuna joka tidostaa,
      että liikunta on hyvästä. &nbsp;Mahdollisuutesi päästä tavoitteisiisi paranevat
      100% varmuudella.`

  return (
    <div>
    <div className="section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-left">{'Toivota tervetulleeksi energisempi elämä!'}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <div className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <h2>{'Astu mukaan porukkaamme ja olet jo askeleen lähempänä unelmiesi kehoa'}</h2>
                                    <img src="../kuvat/meiditeit.jpg" className="img-responsive" />
                                        <p></p>
                                        <p>{text}</p>
                                        <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <br />
                    <br />
                    <h2>Viikon ruoka vinkki</h2>
                    <img src="../kuvat/Pastasalad.jpg" className="img-responsive" />
                    <p></p>
                    <p>Tämän viikon Vinkkina on kaikkien rakastama tonnikala salaatti. Salattiin
                        saat lisää porkua lisäämäällä hieman chilikastiketta. Ruokaisuutta saat
                        puolestaan lisäämällä pastaa joukkoon. Monipuolisuudesta johtuen ruokaa
                        sopii hyvin talouksiin missä ruokavaliot poikkeavat toisistaan.</p>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
    <div className="section">
        <div className="container">
            <div className="row text-center">
                <div className="col-xs-3 text-center">
                    <a><i className="fa fa-5x fa-fw fa-instagram text-primary"></i></a>
                </div>
                <div className="col-xs-3">
                    <a><i className="fa fa-5x fa-fw fa-twitter"></i></a>
                </div>
                <div className="col-xs-3">
                    <a><i className="fa fa-5x fa-fw fa-facebook"></i></a>
                </div>
                <div className="col-xs-3 text-center">
                    <a><i className="fa fa-5x fa-fw fa-github"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div className="section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">{'Kehittäjät'}</h1>
                    <p className="text-center">{'Olemme enemmän tai vähemmä urheilusta kiinnostuneita tietotekniikan opiskelijoita.'}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <img src="http://pingendo.github.io/pingendo-bootstrap/assets/user_placeholder.png" className="img-circle img-responsive" />
                </div>
                <div className="col-md-4">
                    <h3 className="text-left">{'John Doe'}</h3>
                    <p className="text-left">{'Lorem ipsum dolor sit amet, adipiscing elit Aenean commodo ligula eget.'}</p>
                </div>
                <div className="col-md-2">
                    <img src="http://pingendo.github.io/pingendo-bootstrap/assets/user_placeholder.png" className="img-circle img-responsive" />
                </div>
                <div className="col-md-4">
                    <h3 className="text-left">{'John Doe'}</h3>
                    <p className="text-left">{'Lorem ipsum dolor sit amet, adipiscing elit Aenean commodo ligula eget.'}</p>
                </div>
            </div>
            <div className="row">
            <div className="col-md-2">
                <img src="http://pingendo.github.io/pingendo-bootstrap/assets/user_placeholder.png" className="img-circle img-responsive" />
            </div>
            <div className="col-md-4">
                <h3 className="text-left">{'John Doe'}</h3>
                <p className="text-left">{'Lorem ipsum dolor sit amet, adipiscing elit Aenean commodo ligula eget.'}</p>
            </div>
            <div className="col-md-2">
                <img src="http://pingendo.github.io/pingendo-bootstrap/assets/user_placeholder.png" className="img-circle img-responsive" />
            </div>
            <div className="col-md-4">
                <h3 className="text-left">{'John Doe'}</h3>
                <p className="text-left">{'Lorem ipsum dolor sit amet, adipiscing elit Aenean commodo ligula eget.'}</p>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Frontpage
