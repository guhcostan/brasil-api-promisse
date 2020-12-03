const CEP_API = 'https://brasilapi.com.br/api/cep/v1/'

export const fetchCep = (cep) => {
   return fetch(CEP_API + cep).then(response => response.json())
}
 