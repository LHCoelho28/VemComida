// Exemplo de lista de restaurantes (simulação de dados do banco de dados)
// Exemplo de lista de restaurantes (simulação de dados do banco de dados)

const restaurants = [
    { 
        name: "Franchesco", 
        cuisine: "Comida Italiana",
        image: "https://img.freepik.com/fotos-premium/ilustracao-da-tradicional-lasanha-a-bolonhesa-na-mesa-do-restaurante-prato-de-cozinha-italiana-generative-ai_756498-162.jpg?w=826", // URL da imagem do Restaurante A
        preco: "R$ 40,00",
        apartir:"A partir de:"
    },
    { 
        name: "Panda", 
        cuisine: "Comida Japonesa",
        image: "https://img.freepik.com/fotos-gratis/sushi-conjunto-rolos-quentes-abacate-california-e-salmao-rola_141793-1279.jpg?w=996&t=st=1690161439~exp=1690162039~hmac=e8bc25d0399334a1d08f1be2477f35691a66de1f1a1656767579dbf7e8eb3099", // URL da imagem do Restaurante B
        preco: "R$ 60,00",
        apartir:"A partir de:"
    },
    { 
        name: "Bar do seu Zé", 
        cuisine: "Comida Brasileira",
        image: "https://img.freepik.com/fotos-premium/lanche-tipico-brasileiro-chamado-pastel-acompanha-vinagrete-e-pimenta_261158-1122.jpg?w=826", // URL da imagem do Restaurante C
        preco: "R$ 20,00",
        apartir:"A partir de:"
    },
    // Adicione mais restaurantes aqui
    { 
        name: "LOS HERMANOS", 
        cuisine: "Comida Mexicana",
        image: "https://img.freepik.com/fotos-premium/tres-tacos-em-uma-tabua-de-madeira-com-uma-tigela-de-salsa-e-uma-tigela-de-salsa_254939-862.jpg?w=826", // URL da imagem do Restaurante D
        preco:"R$ 30,00" ,
        apartir:"A partir de:"
    },
    { 
        name: "Alah's", 
        cuisine: "Comida Indiana",
        image: "https://img.freepik.com/fotos-gratis/arranjo-de-comida-indiana-plana_23-2148734736.jpg?w=826&t=st=1690143282~exp=1690143882~hmac=f957a183ee4fe58b34d3b174a8be1bceceefe9489550099dc93c30e7a216753c", // URL da imagem do Restaurante E
        preco: "R$ 50,00" ,
        apartir:"A partir de:"
    },
    { 
        name: "Bistrô Vida Verde", 
        cuisine: "Comida Vegana",
        image: "https://img.freepik.com/fotos-premium/uma-tigela-de-comida-com-fatias-de-abacate-pepino-e-tomate_900374-83.jpg?w=826" ,// URL da imagem do Restaurante F
        preco: "R$ 60,00" ,
        apartir:"A partir de:"
    },
];
 
function searchRestaurants() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const restaurantListDiv = document.getElementById("restaurant-list");

    if (searchInput === '') {
        restaurantListDiv.innerHTML = "<h5>Por favor, digite algo para buscar.</h5>";
        return; // Retorna para interromper a função se o campo de busca estiver vazio
    }

    // Função para remover acentos diacríticos de uma string
    function removeDiacritics(str) {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    // Limpar resultados anteriores
    restaurantListDiv.innerHTML = "";

    // Filtrar restaurantes que correspondem à pesquisa
    const filteredRestaurants = restaurants.filter(restaurant =>
        removeDiacritics(restaurant.name.toLowerCase()).includes(removeDiacritics(searchInput)) ||
        removeDiacritics(restaurant.cuisine.toLowerCase()).includes(removeDiacritics(searchInput))
    );

    if (filteredRestaurants.length === 0) {
        restaurantListDiv.innerHTML = "<h5>Nenhum restaurante encontrado.</h5>";
    } else {
        // Exibir resultados da pesquisa
        filteredRestaurants.forEach(restaurant => {
            const restaurantDiv = document.createElement("div");
            restaurantDiv.innerHTML = `
                <h2>${restaurant.name}</h2>
                <p>${restaurant.cuisine}</p>
                <img src="${restaurant.image}" alt="${restaurant.name}">
                <h3>${restaurant.preco}</h3>
                <h4>${restaurant.apartir}</h4>
            `;
            restaurantListDiv.appendChild(restaurantDiv);
        });
    }
}

  



