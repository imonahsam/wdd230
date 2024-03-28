const linksURL = "https://avee1000.github.io/wdd230/data/links.json";

const unorderedList = document.getElementById('links');

// const links = unorderedList.querySelectorAll('.card ul li');
    
async function getLinks() {
    const response = await fetch(linksURL);
    if (response.ok) {
        const data = await response.json();
        displayLinks(data.lessons);
    }
}

function displayLinks(lessons) {

    for (let i = 0; i < lessons.length; i++) {

        const length = lessons[i].links.length;
        const links = document.createElement('li');
        links.innerHTML = `Week ${lessons[i].week}: `;

        unorderedList.appendChild(links);
        
        for (let j = 0; j < lessons[i].links.length; j++) {

            const week1 = document.createElement('a');
            week1.setAttribute('href', `${lessons[i].links[j].url}`);
            week1.setAttribute('target', "_blank");
            week1.innerHTML = `${lessons[i].links[j].title}`;
            links.appendChild(week1);          

            if (j < length - 1) {
                let span = document.createElement("span");
                span.innerHTML = ` | `;
                links.appendChild(span);
            }
        }
    }
    
}

getLinks();