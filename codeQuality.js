// level {1/2/3}

//level 2
//Re-write the below code to better code quality standards.
// Hint: use modern ES6 syntax and reduce lines of code.

const getUsers = async () => {
    const doc = await Promise.all[getUser(), getProfile(), getPosts()];

    const user = doc[0];
    const Profile = doc[1];
    const p = doc[2];

    const userProfile = {
        user,
        profile,
        posts: p
    };

    return userProfile;
}



//level 3
const getUsers = async (users) => {
    const new_users = [];

    // for (let i = 0; i < users.length; i = i + 1) {
    //   const newUser = user[i];
    //   newUser.id = i;

    if (users.length) {
        users.map((item) => newUser = user[item], new_users.push(newUser));
    }
    return new_users;
}
