import axios from 'axios';
// items => filtered/sorted result
export function findCategories(params) {
  return axios.post('http://localhost:5000/category/find', params)
}

export function getCategoriesById(categoryId) {
  return axios.get(`http://localhost:5000/category/${categoryId}`)
}

export function updateCategory(categoryId, category) {
  console.log(categoryId, category);
  return axios.put(`http://localhost:5000/category/${categoryId}`, category);
}

// //Get By ID
// export function getBranchById(branchId) {
//     return axios.get(`${BRANCHS_URL}/${branchId}`);
// }

// //Get By ID
// export function getBranchAll() {
//     return axios.get(`${BRANCHS_URL}`);
// }

// // POST => POST: Create the branch on the server
// export function createBranch(branch) {
//     return axios.post(BRANCHS_URL, branch);
// }

// // UPDATE => PUT: update the branch on the server
// export function updateBranch(branch) {
//     return axios.put(`${BRANCHS_URL}/${branch.uuid}`, branch);
// }


// const axiosGet = React.useCallback(async () => {
//   axios.get('http://localhost:5000/category')
//       .then(response => {
//           const { message, data } = response.data;
//           if (message === 'Get Category Successfully') {
//               console.table(data.rows);
//               setCategories(response.data.data.rows);
//           } else {
//               notifyError(`API okay, Check Response`);
//               console.warn(response);
//           }
//       })
//       .catch(error => {
//           notifyError(`Check Your Network`);
//           console.error(error);
//       })
// }, []);