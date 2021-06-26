import React from 'react'

const DisplayContact= ({addresses,searchText,deleteHandler}) =>{
  //console.log(addresses, searchText)
  console.log("crash");
  if(searchText.length > 0 && addresses.length > 0 ){
  const filteredAddresses= addresses.filter((address)=> address.name.toLowerCase().includes(searchText.toLowerCase()))
//  console.log("filteredAddresses ",searchText, "pArani".toLowerCase().includes("".toLowerCase()),filteredAddresses)
if(filteredAddresses.length > 0)
  return <>   {filteredAddresses.map((address) =><p key={address.name}>{address.name} {address.number} <button onClick={()=> deleteHandler(address.id)}>Delete </button></p>) }</>
  else {
      return <><p>Sorry no match found!</p></>
  }
}
else if (addresses.length > 0 && searchText.length === 0 ){
  return <>{addresses.map((address) =><p key={address.name}>{address.name} {address.number} <button onClick={()=> deleteHandler(address.id)}>Delete </button></p>) }</>
}
else if (addresses.length === 0 && searchText.length === 0 ){

  return <>Data Retrieving not complete or no contacts available</>
}
else return <></>
}

export default DisplayContact
