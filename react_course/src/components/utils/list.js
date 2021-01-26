// import _ from "lodash";

// export const getCategoriesWithNumber = (items = [], categories = [],item) =>{
//     const listConvertCategories = [...categories];
//     for(let i = 0; i < categories.length; i++){
//         for(let j = 0; j < items.length; j++){
//             if((_.get(items[j], "category._id")) === (_.get(categories[i],"_id"))){
//                 listConvertCategories[i].numbers = (listConvertCategories[i].numbers ?? 0) + 1;
//             }
//         }
//     }    
//     return listConvertCategories;
// };
