import React from 'react'
import BasicCartItem from '../../UI/BasicCartItem'

function SuggestionListSolved() {
  return (
    <div className="flex flex-col gap-20 justify-center">
      <BasicCartItem allowed="false" solved="approved" />
      <BasicCartItem allowed="false" solved="notApproved" />
      <BasicCartItem allowed="false" solved="halfApproved" />
      <BasicCartItem allowed="false" solved="pending" />
      <BasicCartItem allowed="false" solved="approved" />
    </div>
  )
}

export default SuggestionListSolved