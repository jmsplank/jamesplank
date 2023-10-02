document.addEventListener("DOMContentLoaded", () => {
  let searchResults = [];
  const searchWrapper = document.querySelector(".search-box");
  const searchInput = searchWrapper.querySelector(".search-query");
  const searchResultElement = searchWrapper.querySelector(".search-results");

  fetch("/search")
    .then((response) => response.json())
    .then((result) => {
      const searchContent = result;
      const searchIndex = lunr((builder) => {
        builder.ref("id");
        builder.field("content");
        builder.field("tag");
        builder.field("title");
        builder.field("url");
        builder.field("type");

        Array.from(result).forEach((doc) => {
          builder.add(doc);
        }, builder);
      });
      searchInput.addEventListener("keyup", (event) => {
        let searchString = event.target.value;
        if (searchString && searchString.length > 2) {
          try {
            searchResults = searchIndex.search(searchString);
          } catch (err) {
            if (err instanceof lunr.QueryParseError) {
              return;
            }
          }
        } else {
          searchResults = [];
        }

        if (searchResults.length > 0) {
          searchResultElement.innerHTML = searchResults
            .map((match) => {
              let item = searchContent.find((el) => {
                return el.id == parseInt(match.ref);
              });
              return (
                '<li class="list-group-item">' +
                "<a href=" +
                item.url +
                ">" +
                item.title +
                "</a>" +
                "</li>"
              );
            })
            .join("");
        } else {
          searchResultElement.innerHTML =
            '<li class="list-group-item">No results found</li>';
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
