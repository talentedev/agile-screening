// Get all principles
export async function getAllPrinciples() {
  const response = await fetch('/api/principles');
  return await response.json();
}
// Create new principle
export async function createPrinciple(data) {
  const response = await fetch(`/api/principle`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({principle: data})
  })
  return await response.json();
}
// Delete a principle
export async function deletePrinciple(id) {
  const response = await fetch(`/api/principle/` + id, {
    method: 'DELETE',
  })
  return await response.json();
}
// Update a principle
export async function updatePrinciple(data) {
  const response = await fetch(`/api/principle/` + data.id, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({principle: data.info})
  })
  return await response.json();
}