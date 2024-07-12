import { useState, useEffect } from 'react';
import './App.css';
import Birthday from './components/Birthday/Birthday';
import Date from './components/Date/Date';

interface Nameday {
  at: string;
  bg: string;
  cz: string;
  de: string;
  dk: string;
  ee: string;
  es: string;
  fi: string;
  fr: string;
  gr: string;
  hr: string;
  hu: string;
  it: string;
  lt: string;
  lv: string;
  pl: string;
  ru: string;
  se: string;
  sk: string;
  us: string;
}

interface Data {
  day: number;
  month: number;
  nameday: Nameday;
}

function App() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchName = async () => {
      const response = await fetch('https://nameday.abalin.net/api/V1/today');
      const data = await response.json();
      setData(data);
    };

    fetchName();
  }, []);

  return (
    <>
      {data && (
        <>
          <Date day={data.day} month={data.month} />
          <Birthday name={data.nameday.cz} />
        </>
      )}
    </>
  );
}

export default App;
