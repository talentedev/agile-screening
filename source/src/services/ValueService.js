export async function getAllValues() {
  const response = await fetch('/api/values');
  return await response.json();
}

export async function createValue(data) {
  const response = await fetch(`/api/value`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({value: data})
  })
  return await response.json();
}

export async function deleteValue(id) {
  const response = await fetch(`/api/value/` + id, {
    method: 'DELETE',
  })
  return await response.json();
}

export async function updateValue(data) {
  const response = await fetch(`/api/value/` + data.id, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({value: data.info})
  })
  return await response.json();
}