// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterByAnnualVisitors = (data, filterBy, value) => {
  
  };


export const sortByName = (data, sortBy, sortOrder) => {
  const sortWork = data.slice();

  sortWork.sort((a, b) => {
    const nameA = a[sortBy].toLowerCase();
    const nameB = b[sortBy].toLowerCase();

    if (sortOrder === "asc") {
      return nameA.localeCompare(nameB);
    } else {
      return nameB.localeCompare(nameA);
    }
  });

  return sortWork;
};
