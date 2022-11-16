import { useParams } from 'react-router-dom';

export const PagePreparingShift = () => {
  const params = useParams();

  return <div>params id = {params.id}</div>;
};
