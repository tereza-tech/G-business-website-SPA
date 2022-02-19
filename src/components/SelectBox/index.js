import React from "react";

const selectOptions = [
  { value: "option1", label: "Option1" },
  { value: "option2", label: "Option2" },
  { value: "option3", label: "Option3" },
];

export const SelectBox = React.forwardRef(
  (
    {
      children,
      placeholder = "Select",
      className,
      options = selectOptions,
      isSearchable = true,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <select className={className} {...restProps}>
          {selectOptions?.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        {children}
      </>
    );
  }
);
