import React from 'react';
import ReactDom from 'react-dom';
import moment from 'moment';

import Header from './components/Header'
import CalendarContainer from './containers/CalendarContainer'

import fi from './intl/fi'
import en from './intl/en'


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip()
    $('body').css('padding-top', parseInt($('#nav_bar').css("height"))+10)
})

$(window).resize(function () {
    $('body').css('padding-top', parseInt($('#nav_bar').css("height"))+10)
})



class App extends React.Component{

  constructor() {
    super()
    this.state = {lang: 'us'}

    this.onLangChange = newLang => {
      this.setState({lang: newLang})
    }
  }



  render() {
    var dict = (this.state.lang == 'us') ? en : fi

    return(
      <div>
        <Header
          mode = {'calendar'}
          lang = {this.state.lang}
          dict = {dict}
          onLangChange = {this.onLangChange}
        />
        <CalendarContainer
          username = {'alex'}
          userId= {13}
          lang = {this.state.lang}
        />
      </div>
    )

  }
}

ReactDom.render(
  <App/>,
  document.getElementById('root')
);
