import axios from 'axios'

const fetchInitialData = (base_URL) =>
{

  return axios.get(base_URL).then(response => response.data)
}

const addNewContact = (base_URL,addPersonObj) =>
{
  return axios.post(base_URL,addPersonObj).then(response => response.data)
}

const updateContact = (base_URL,personObj) =>
{
  console.log(personObj.id, base_URL);
  return axios.put(`${base_URL}/${personObj.id}`,personObj).then(response => response.data)
}

const deleteContact = (base_URL,id) =>
{
  return axios.delete(`${base_URL}/${id}`).then(response => response.data)
}

export default {fetchInitialData,addNewContact,deleteContact, updateContact}
