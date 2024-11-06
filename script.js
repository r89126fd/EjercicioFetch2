async function fetchCategories() {
          try {
              const response = await fetch('https://api.escuelajs.co/api/v1/categories');
              const categories = await response.json();
      
              const categoryList = document.getElementById('category-list');
              categoryList.innerHTML = '';
      
              categories.forEach(category => {
                  const categoryCard = `
                      <div class="col-md-4 mb-4">
                          <div class="card h-100">
                              <img src="${category.image}" class="card-img-top" alt="${category.name}">
                              <div class="card-body">
                                  <h5 class="card-title">${category.name}</h5>
                              </div>
                          </div>
                      </div>
                  `;
                  categoryList.innerHTML += categoryCard;
              });
          } catch (error) {
              console.error('Error al obtener las categorías:', error);
          }
      }
      

      fetchCategories();
      