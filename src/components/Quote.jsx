/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import '../assets/styles/components/Quote.scss';
import { geolocated } from 'react-geolocated';
import carIcon from '../assets/images/car.png';

class Quote extends Component {
  render() {
    return (
      <div className='main__container__column'>
        <div className='main__container__column--title' />
        {!this.props.isGeolocationAvailable && (
        <div>Your browser does not support Geolocation</div>
        )}
        {!this.props.isGeolocationEnabled && (
        <div>Geolocation is not enabled</div>
        )}

        <div className='main__container__column--route'>
          <input type='input' className='main__container__column--route--from' placeholder={this.props.coords ? (this.props.coords.latitude)   : ('Donde quieres iniciar ...')} />
          <input type='input' className='main__container__column--route--to' placeholder='A donde quieres ir ...' />
        </div>
        <div className='main__container__column--price'>
          <img src={carIcon} alt='car' />
          <label className='main__container__column--price--title'> Tarifa Estimada </label>
          <label> Precio $55.60</label>
          <label> Tiempo 22 mins. </label>
        </div>
        <div className='main__container__column--order'>
          <input className='main__container__column--order--confirm' type='submit' value='Cotizar ' />
        </div>
      </div>
    );
  }
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Quote);
