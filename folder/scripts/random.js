const newUrl = "https://avee1000.github.io/wdd230/chamber/data/members.json";

const spotlight = document.getElementById("spot-ad");

async function getRanMembersData(){
    try {
        const response = await fetch(newUrl);
        if (response.ok) {
            const data = await response.json();
            displayRanMembers(data.companies);

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getRanMembersData();

function displayRanMembers(companies) {

    const needed = [];

    const set = new Set();

    for (let i = 0; i < companies.length; i++) {
        if (companies[i].memberLevel === "Gold" || companies[i].memberLevel === "Silver") {
            needed.push(companies[i]); 
        }
    }

    while (set.size < 3) {
        const ranNum = Math.floor(Math.random() * needed.length);
        set.add(ranNum);
    }

    set.forEach((index) => {
        
        const x = needed[index];
        const article = document.createElement("article");

        const name = document.createElement("h3");
        name.innerHTML = `${x.name}`;

        const logo = document.createElement("img");
        logo.setAttribute('src', x.image);
        logo.setAttribute('alt', x.name);
        logo.setAttribute('loading', 'lazy');
        // logo.setAttribute('height', '50');
        // logo.setAttribute('width', '80');
        logo.classList.add('thumbnail'); // Apply a class for styling

        
        const address = document.createElement("p");
        address.innerHTML = `${x.address}`;

        const phone = document.createElement("p");
        phone.innerHTML = `${x.phone}`
        
        const url = document.createElement("a");
        url.innerHTML = `${x.url}`;
        url.setAttribute('href', x.url)
        url.setAttribute('target', '_blank')       

        article.append(name, logo, address, phone, url );
        spotlight.appendChild(article);
    });
        
 }

