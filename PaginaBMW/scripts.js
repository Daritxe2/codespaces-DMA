const models = [
  {
    name: "BMW 2002",
    years: "1970s",
    image: "https://mediapool.bmwgroup.com/cache/P9/201602/P90210240/P90210240-the-bmw-2002-turbo-07-2016-2253px.jpg",
    description: "Compacto deportivo precursor del Serie 3."
  },
  {
    name: "BMW E21",
    years: "1975–1983",
    image: "https://tse1.mm.bing.net/th/id/OIP.C5bIRrQ7KrJ21Jr1_Kzt8wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Primera generación del Serie 3."
  },
  {
    name: "BMW E30",
    years: "1982–1994",
    image: "https://th.bing.com/th/id/R.0bc064f0b363f7c5a0f733b16ed35645?rik=PlTYQZI4zIcimA&pid=ImgRaw&r=0",
    description: "Incluye el legendario M3."
 },
  {
    name: "BMW E28",
    years: "1981–1988",
    image: "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2022/11/1988_bmw_m5_001_dsc_3556-scaled-1-67772-jpg.webp",
    description: "Serie 5 con diseño clásico."
  },
  {
    name: "BMW Z3",
    years: "1995–2002",
    image: "https://th.bing.com/th/id/R.09c71721f46cfcdaf0b2d9cffac61ab3?rik=%2frzhz1dIr4Kwrw&pid=ImgRaw&r=0",
    description: "Roadster deportivo famoso por James Bond."
  }
];

const gallery = document.getElementById("gallery");

models.forEach(model => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${model.image}" alt="${model.name}" />
    <h2>${model.name}</h2>
    <p>${model.years} – ${model.description}</p>
  `;
  gallery.appendChild(card);
});
