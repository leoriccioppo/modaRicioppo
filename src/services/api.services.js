import axios from "axios";
// Configurar a baseURL global para todas as solicitações
axios.defaults.baseURL = "https://fakestoreapi.com";

// Função para fazer uma solicitação GET a um endpoint específico
const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(endpoint);
    return response.data; // Retorna os dados da resposta
  } catch (error) {
    console.error("Erro ao obter dados da API:", error);
    throw error; // Rejeita o erro para que possa ser tratado no componente chamador
  }
};

export { fetchData };

