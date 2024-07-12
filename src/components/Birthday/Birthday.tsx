import { useState, useEffect } from 'react';
import { getBirthday } from '../../utils/birthdayUtils';

interface BirthdayProps {
  name: string;
}

const Birthday = ({ name }: BirthdayProps): JSX.Element => {
  const [birthday, setBirthday] = useState('');

  useEffect(() => {
    setBirthday(getBirthday(name));
  }, [name]);

  return (
    <>
      {birthday === 'nenalezeno' ? (
        <p>Nevíme, kdy {name} má narozeniny</p>
      ) : (
        <p>
          {name} má narozeniny {birthday}
        </p>
      )}
    </>
  );
};

export default Birthday;
