import React, { Component } from 'react';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';

class Language extends Component {
  render () {
    return ( 
    
      <div>{i18next.t('language-barriers')}</div>
    
    );
  }
}

export default withTranslation()(Language);