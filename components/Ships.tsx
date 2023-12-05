'use client';
import { useQuery } from 'urql';
import { queryAllShips } from '../queries/ships';

export const Ships = () => {
  const [result] = useQuery({
    query: queryAllShips
  });

  const { data, fetching } = result;

  if (fetching) {
    return 'Loading...';
  }

  return (
    <ul className="list-disc">
      {(data?.ships ?? []).map((ship) => (
        <li key={ship?.id}>{ship?.name}</li>
      ))}
    </ul>
  );
}