export const fetchUsers = async (count = 1) => {
  return fetch(`https://randomuser.me/api/?results=${count}`)
  .then(response => response.json())
  .then(data => data)
}