(async () => {
    const response = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=Qo3nCev3vKhzejCjIcVZhB3ULyuCcBbL96mT4beg5cEbpTrLIM9I2Vz2-MRljh3dZB7UVyrrKwBWI-HvYVs3EWLTaVdQp0jPm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCtUk43f48yQC-4h6uPTT3F5OK0fJemEGBaC-lLKqKzy2Q9eHLyJ9qux9rcQPyY6WCG_-W_z8TVH3c_8bZg2_Bdf-wvr4dxwbdz9Jw9Md8uu&lib=MAmgsdUMg_-ZrqH71iCQ13b_P0nMP0Yb0');
    const data = await response.json();

    const menu = document.getElementById('menu');

    menu.innerHTML = data.map(({ brewery, enabled, beer, type1, type2, volume, price, cover  }) => {
        const coverImage = cover || './images/cover-default.jpg';
        return `
        <article class="item">
            <div class="item__cover-wrap">
                <div class="item__type-wrap">
                    <div class="item__type">${type1}</div>
                    ${type2 ? `<div class="item__type">${type2}</div>` : ''}
                </div>
                <img class="item__cover" class="" src="${coverImage}" alt="" loading="lazy">
                <div class="item__price">${price} ₽</div>
            </div>
                
            <h2 class="item__beer">${beer}</h2>
            <div class="item__volume">${volume}</div>
        </article>
    `;
    }).join('');
})();
