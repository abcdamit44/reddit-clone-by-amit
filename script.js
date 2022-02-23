function upVotes() {
    let votes = document.getElementById('vote');
    let count = parseInt(votes.innerHTML);
    count++;
    votes.innerHTML = count;
}

function downVotes() {
    let votes = document.getElementById('vote');
    let count = parseInt(votes.innerHTML);
    count--;
    votes.innerHTML = count;
}