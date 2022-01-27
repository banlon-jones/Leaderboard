import './style.css';
import { getScores, newScore, refresher } from './main';

const showScore = (score) => `<li> ${score.user} : ${score.score}</li><hr>`;

const render = () => `<header>
        <div class="app-name">
            <h1> Leaderboard </h1>
        </div>
    </header>
    <section>
        <div class="row">
            <div class="col-6">
                <div class="card-title">
                    <div class="title row">
                        <h2>Recent scores</h2>
                        <button class="btn btn-default" id="refresh"> Refresh </button>
                    </div>
                </div>
                <div class="shadow">
                    <ul class="board">
                    </ul>
                </div>
            </div>
            <div class="col-6">
                <div class="card-title">
                    <h2 class="title"> Add your scores </h2>
                </div>
                <div class="card-body">
                    <form name="new-score" id="score-form">
                        <input type="text" name="user" class="form-control" placeholder="Your name"/>
                        <input type="number" name="score" class="form-control" placeholder="Your score"/>
                        <input type="submit" class="btn float" id="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    </section>`;

const main = document.querySelector('main');
main.innerHTML = render();

const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', () => {
  refresher();
});

const board = document.querySelector('.board');
const displayBoard = async () => {
  board.innerHTML = '';
  const list = await getScores();
  list.forEach((item) => {
    board.innerHTML += showScore(item);
  });
};

displayBoard();

const newScor = document.getElementById('score-form');
const { user, score } = newScor.elements;
newScor.addEventListener('submit', async (e) => {
  e.preventDefault();
  const response = await newScore(user.value, score.value);
  if (response === 'Leaderboard score created correctly.') {
    newScor.reset();
    displayBoard();
  }
});
