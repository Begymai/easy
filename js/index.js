const catalogContent = document.querySelector(".catalog__content")
const response = async () => {
    const result = await fetch("https://632f07abb7314fc02f4e8035.mockapi.io/goods");
    const data = await result.json();

    console.log(data);

    data.forEach(item => {
        catalogContent.innerHTML += `
        <div class="cardItem">
                        <div class="card__top">
                            <div class="card__liked">
                                <img src="./assets/img/unliked.svg" alt="unliked-icon">
                                <img class="card__liked" src="./assets/img/liked.svg" alt="liked-icon">
                            </div>
                            <img class="card__img" src="${item.imgURL}" alt="sneacer-img">
                        </div>
                        <h2>${item.name}</h2>
                        <div class="card__bottom">
                            <div class="price">
                                Цена:
                                <p>${item.price}</p>
                            </div>
                            <img src="./assets/img/add.svg" alt="add-icon">
                        </div>
                    </div>
        ` 
    });
    return data;
}

response();

