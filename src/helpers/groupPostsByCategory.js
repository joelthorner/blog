const groupPostsByCategory = (posts) => {
  // Utilitzem un objecte per agrupar els posts per categories
  const grouped = posts.reduce((acc, post) => {
    post.categories.forEach(category => {
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(post);
    });
    return acc;
  }, {});

  // Convertim l'objecte agrupat en un array amb el format desitjat
  return Object.keys(grouped).map(category => ({
    category: category,
    posts: grouped[category]
  }));
};

export default groupPostsByCategory;