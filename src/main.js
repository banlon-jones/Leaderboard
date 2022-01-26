export const render = `<header>
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
                    <ul>
                        <li> name : 100</li><hr>
                        <li> name : 100</li><hr>
                        <li> name : 100</li><hr>
                        <li> name : 100</li><hr>
                        <li> name : 100</li><hr>
                        <li> name : 100</li>
                    </ul>
                </div>
            </div>
            <div class="col-6">
                <div class="card-title">
                    <h2 class="title"> Add your scores </h2>
                </div>
                <div class="card-body">
                    <form>
                        <input type="text" class="form-control" placeholder="Your name"/>
                        <input type="text" class="form-control" placeholder="Your score"/>
                        <button class="btn float"> Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>`;

export const refresher = () => {
  window.location.reload();
};
