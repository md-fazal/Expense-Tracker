export const fetchExpenses = (userId) => {
	let FETCH_EXPENSES = `*[_type == 'user' && _id == '${userId}'].expenses`

	return FETCH_EXPENSES;
};

export const fetchUserId = () =>{
    return JSON.parse(localStorage.getItem('user')).googleId
}
