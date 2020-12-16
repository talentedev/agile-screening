export async function getAllPrinciples() {
    const response = await fetch('/api/principles');
    return await response.json();
  }
  
  export async function createPrinciple(data) {
    const response = await fetch(`/api/principle`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({principle: data})
    })
    return await response.json();
  }
  
  export async function deletePrinciple(id) {
    const response = await fetch(`/api/principle/` + id, {
      method: 'DELETE',
    })
    return await response.json();
  }
  
  export async function updatePrinciple(data) {
    const response = await fetch(`/api/principle/` + data.id, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({principle: data.info})
    })
    return await response.json();
  }