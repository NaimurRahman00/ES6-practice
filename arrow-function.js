const arrFunc = (par1, par2, par3) => par1 + par2 + par3;
console.log(arrFunc(1, 2, 3));


// default parameter

const defaultParameter = (par1 = 0, par2 = 5) => par1 + par2;
console.log(defaultParameter(5));

// push into new array from arrow function
const myfriends = ['Zubaer', 'Tasfiq', 'Ayesha', 'Mahfuz', 'Tahlil', 'Tamim', 'Adnan', 'Zukta', 'Rokan', 'Sumaiya', 'Nirob', 'Shirin', 'Mahedi', 'Hafsa', 'Joy'];

const evenFriends = [];
const oddFriends = [];

const oddEvenFriend = (arr) => {
    for (let friend of arr) {
        if (friend.length % 2 === 0) {
            evenFriends.push(friend);
        } else {
            oddFriends.push(friend);
        }
    }
}

oddEvenFriend(myfriends);
console.log(evenFriends);
console.log(oddFriends);