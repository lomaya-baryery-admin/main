import { useParams } from 'react-router-dom';

export const PageStartedShift = () => {
  const { id } = useParams();

  return <div>started shift id = {id}</div>;
};
