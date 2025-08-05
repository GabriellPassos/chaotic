import React, { useState } from "react";
export const StatusBar = ({
  maxValue,
  currentValue,
  props,
  className,
  classNameWrapper,
}) => {
  const percentage = (currentValue / maxValue) * 100;

  return (
    <div className={`${classNameWrapper} rounded-md`}>
      <div
        className={`${className} flex items-center justify-center rounded-md w-100`}
        style={{ width: `${percentage}%` }}
      >
        <p>
          {currentValue} / {maxValue}
        </p>
      </div>
    </div>
  );
};
