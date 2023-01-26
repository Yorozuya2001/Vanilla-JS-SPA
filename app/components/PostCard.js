export function PostCard(props) {
  let { date, id, slug, title, featured_media_src_url } = props;
  let dateFormat = new Date(date).toLocaleString(),
    urlPoster = featured_media_src_url
      ? featured_media_src_url
      : "app/assets/favicon.png";

  document.addEventListener("click", (e) => {
    if (!e.target.matches(".post-card a")) return false;

    localStorage.setItem("wpPostId", e.target.dataset.id);
  });

  return `
  <article class="post-card">
  <img src="${urlPoster}" alt="${title.rendered}" />
  <h2>${title.rendered}</h2>
  <p>
  <time datetime="${date}">${dateFormat}</time>
  <a href="#/${slug}" data-id="${id}">Ver Publicación</a>
  </p>
  </article>
  `;
}
