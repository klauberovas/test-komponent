interface DateProps {
  day: number;
  month: number;
}

const Date = ({ day, month }: DateProps) => {
  return (
    <p>
      Dnes je {day}.{month}
    </p>
  );
};
export default Date;
