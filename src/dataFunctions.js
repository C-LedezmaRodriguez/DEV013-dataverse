// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.


export const filterByAnnualVisitors = (data, filterBy, value) => {
  
  const [min, max] = value.split('-').map(Number);

  const workFilter = data.filter(visitors => visitors.facts[filterBy] >= min && visitors.facts[filterBy] <= max);
  return workFilter;

  // if (value === "firstRange") {
  //   return data.filter(visitors => visitors.facts[filterBy] >= 0 && visitors.facts[filterBy] <= 2000000);
  // } else if (value === "secondRange") {
  //   return data.filter(visitors => visitors.facts[filterBy] > 2000000 && visitors.facts[filterBy] <= 4000000);
  // } else if (value === "thirdRange") {
  //   return data.filter(visitors => visitors.facts[filterBy] > 4000000 && visitors.facts[filterBy] <= 6000000);
  // } else if (value === "fourthRange") {
  //   return data.filter(visitors => visitors.facts[filterBy] > 6000000 && visitors.facts[filterBy] <= 8000000);
  // } else if (value === "fifthRange") {
  //   return data.filter(visitors => visitors.facts[filterBy] > 8000000 && visitors.facts[filterBy] <= 10000000);
  // }

};

export const sortByName = (data, sortBy, sortOrder) => {

      const sortWork = data.slice();
    
      sortWork.sort((a, b) => {
        const nameA = a[sortBy].toLowerCase();
        const nameB = b[sortBy].toLowerCase();
    
        if (sortOrder === 'asc') {
          return nameA.localeCompare(nameB);
        } else {
          return nameB.localeCompare(nameA);
        }
      });
    
      return sortWork;
       
      // const workOrder = data.toSorted((a,b) => {
      //   if(sortOrder === 'asc'){    
      //     if(a[sortBy] === b[sortBy]){
      //       return 0;
      //     }
      //     if(a[sortBy]< b[sortBy]){
      //       return -1;
      //     }
      //     return 1;
      //   }
      //   else {
      //     if(a[sortBy] === b[sortBy]){
      //       return 0;
      //     }
      //     if (a[sortBy] > b[sortBy]){
      //       return -1;
      //     }
      //     return 1;
      //   } 
      // });
      // return workOrder;

};

