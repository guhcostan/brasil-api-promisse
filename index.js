const CEP_API = 'https://brasilapi.com.br/api/cep/v1/'

export const fetchCep = (cep) => {
   try {
      return fetch(CEP_API + cep).then(response => response.json())
   } catch(e){
      return e
   }
}
