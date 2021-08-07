import * as requestFromServer from './categoriesCrud';
import { categoriesSlice, callTypes } from './categoriesSlice';
// import { actions as auth } from '../../../Auth';
import { toast } from 'react-toastify'

const { actions } = categoriesSlice;

export const fetchCategories = (queryParams) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findCategories(queryParams)
    .then(response => {
      const { data: { total_items, items } } = response.data;
      dispatch(actions.categoriesFetched({ total_items, items }));
    }).catch(error => {
      if (error.response.status === 401) {
        toast.error(error.response.data.message);
        // dispatch(auth.logout())
      }
      error.clientMessage = 'Can\'t find products';
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

// export const fetchCategory = (id) => dispatch => {
//   if (!id) {
//     return dispatch(actions.categoryFetched({ categoriesForEdit: undefined }));
//   }

//   dispatch(actions.startCall({ callType: callTypes.action }));
//   return requestFromServer
//     .getCategoriesById(id)
//     .then(response => {
//       // alias data to categories;
//       const { data: categories } = response.data;
//       dispatch(actions.categoriesFetched({ categoriesForEdit: categories }));
//     }).catch(error => {
//       error.clientMessage = 'Can\'t find categories';
//       dispatch(actions.catchError({ error, callType: callTypes.action }));
//       // console.log("Can't find categories");
//     });
// };

// export const createCategories = (categoriesForCreation) => dispatch => {
//   dispatch(actions.startCall({ callType: callTypes.action }));
//   return requestFromServer
//     .createCategories(categoriesForCreation)
//     .then(response => {
//       dispatch(actions.categoriesReload);
//     })
//     .catch(error => {
//       if (error.response.status === 401) {
//         toast.error(error.response.data.message, toastOption);
//         dispatch(auth.logout())
//       }
//       error.clientMessage = 'Can\'t create categories';
//       dispatch(actions.catchError({ error, callType: callTypes.action }));
//       // console.log("Can't create categories");
//     });
// };

// export const updateCategories = (categories) => dispatch => {
//   dispatch(actions.startCall({ callType: callTypes.action }));
//   return requestFromServer
//     .updateCategories(categories)
//     .then(response => {
//       dispatch(actions.categoriesReload);
//       return response.data;
//     })
//     .catch(error => {
//       if (error.response.status === 401) {
//         toast.error(error.response.data.message, toastOption);
//         dispatch(auth.logout())
//       }
//       error.clientMessage = 'Can\'t create categories';
//       dispatch(actions.catchError({ error, callType: callTypes.action }));
//     });
// };
