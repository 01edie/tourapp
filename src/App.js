import React from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const tourUrl = 'https://course-api.com/react-tours-project';
  const [tours, setTours] = React.useState([]);

  const deleteTour = (id) => {
    let newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);

  }

  const fetchTour = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(tourUrl);
      const result = await response.json();
      setTours(result);
      setIsLoading(false);
      console.log('fetched');
    } catch (error) {
      console.log('something went wrong');
    }
  }

  React.useEffect(() => {

    fetchTour();

  }, [])
  if (isLoading) {
    return (
      <Loading></Loading>
    )
  }
  return (
    <>
      <h2 className='title-heading'>Available Tours Here:</h2>
      <Tours tours={tours} deleteTour={deleteTour} refresh={fetchTour}></Tours>
    </>
  )
}

export default App