import { birthdays } from './birthdays';

export const getBirthday = (name: string): string => {
  const person = birthdays.find((item) => item.name === name);
  if (person) {
    return person.birthday;
  } else {
    return 'nenalezeno';
  }
};
