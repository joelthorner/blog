const groupPostsByYear = (posts) => {
  const grouped = posts.reduce((acc, post) => {
    const year = post.date.getFullYear();

    if (!acc[year]) {
      acc[year] = [];
    }

    acc[year].push(post);

    return acc;
  }, {});

  // Convertim l'objecte agrupat en un array amb el format desitjat
  return Object.keys(grouped).map(year => ({
    year: year,
    posts: grouped[year]
  }));
};

export default groupPostsByYear;