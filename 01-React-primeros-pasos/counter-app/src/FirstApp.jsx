import PropTypes from 'prop-types';

const getResult = () => {
  return "Nestor Rivas";
} 

export const FirstApp = ({ title, subTitle }) => {

  return (
    <>
      <h1>{ title }</h1>
      <p>{ subTitle }</p>
    </>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
}
//por acá podemos definir los default properties
//nuestras defaultProps entran antes que nuestras propTypes
//No siempre se va a trabajar con las props que estamos destructurando
FirstApp.defaultProps = {
  title: 'No hay título.',//esto para cuando no se envíe título, muestra la resp por default
  subTitle: 'No hay subtitle',
  name: 'Nestor Rivas'
}
