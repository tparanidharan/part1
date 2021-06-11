import React from 'react'

const DisplayContact= ({addresses,searchText}) =>{
  const filteredAddresses= addresses.filter((address)=> address.name.toLowerCase().includes(searchText.toLowerCase()))
//  console.log("filteredAddresses ",searchText, "pArani".toLowerCase().includes("".toLowerCase()),filteredAddresses)
  return <>   {filteredAddresses.map((address) =><p key={address.name}>{address.name} {address.number}</p>) }</>
}

export default DisplayContact
