const form = document.getElementById('form');
const first = document.getElementById('first');
const last = document.getElementById('last');
const btn = document.getElementById('submit');
const container = document.getElementById('container');
const mainJoke = document.getElementById('joke-main');



async function getJokes(firstName, lastName) {
    const response = await axios.get(`http://api.icndb.com/jokes/random`, { params: { firstName, lastName } });
    const joke = response.data.value.joke;
    mainJoke.innerText = joke;
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    firstName = first.value;
    lastName = last.value;
    getJokes(firstName,lastName);
    first.value = ''
    last.value = ''
    mainJoke.innerText = '';
});
