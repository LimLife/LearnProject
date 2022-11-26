import React from "react";

export const AdvertisingBanners: React.FC = () =>
{
  // Принимает массив из редюсера придет 4 случайных значения
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 d-flex text-center">
      <div className="col-3">Test</div>
      <div className="col-3">Test</div>
      <div className="col-3">Test</div>
      <div className="col-3">Test</div>
    </div>)
}