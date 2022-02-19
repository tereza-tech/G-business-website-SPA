import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Datepicker = ({
  children,
  placeholder = "Select date",
  className,
  dateTimeFormat = "dd-MM-yyyy",
  selectedDate = new Date(),
  ...restProps
}) => {
  const [startDate, setStartDate] = React.useState(selectedDate);
  return (
    <>
      <DatePicker
        placeholderText={placeholder}
        selected={startDate}
        className={className}
        dateFormat={dateTimeFormat}
        onChange={(date) => setStartDate(date)}
        {...restProps}
      />
      {children}
    </>
  );
};
