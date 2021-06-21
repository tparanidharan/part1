import React from 'react'

const DisplayContact= ({addresses,searchText,deleteHandler}) =>{
  //console.log(addresses, searchText)
  if(searchText.length > 0 && addresses.length > 0 ){
  const filteredAddresses= addresses.filter((address)=> address.name.toLowerCase().includes(searchText.toLowerCase()))
//  console.log("filteredAddresses ",searchText, "pArani".toLowerCase().includes("".toLowerCase()),filteredAddresses)
  return <>   {filteredAddresses.map((address) =><p key={address.name}>{address.name} {address.number}</p>) }</>
}
else if (addresses.length > 0 && searchText.length === 0 ){
  return <>{addresses.map((address) =><p key={address.name}>{address.name} {address.number} <button onClick={()=> deleteHandler(address.id)}>Delete </button></p>) }</>
}
else {
  return <></>
}
}

export default DisplayContact
