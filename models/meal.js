class Meal {
  constructor(
    id,
    fashionIds,
    title,
    affordability,
    complexity,
    imageUrl,
    giá,
    information,
  
   
  ) {
    this.id = id;
    this.fashionIds = fashionIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.information = information;

    this.giá = giá;
    this.complexity = complexity;
    this.affordability = affordability;



    
  }
}

export default Meal;
