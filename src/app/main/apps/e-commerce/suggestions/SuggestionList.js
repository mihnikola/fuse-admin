import React from "react";
import BasicCartItem from "../../UI/BasicCartItem";

function SuggestionList() {
  return (
    <div className="flex flex-col gap-20 justify-center">
      <BasicCartItem allowed="true" solved="delayed" />
      <BasicCartItem allowed="true" solved="delayed" />
      <BasicCartItem allowed="false" solved="pending" />
      <BasicCartItem allowed="false" solved="pending" />
      <BasicCartItem allowed="false" solved="pending" />
      <BasicCartItem allowed="false" solved="pending" />
    </div>
  );
}

export default SuggestionList;
