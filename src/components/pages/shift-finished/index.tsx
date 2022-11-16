import { useParams } from 'react-router-dom';

export const PageFinishedShift = () => {
  const { id } = useParams();

  return <div>finished shift id = {id}</div>;
};
