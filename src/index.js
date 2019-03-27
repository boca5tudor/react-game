// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

import Paddle from '../src/paddle';
import InputHandler from '../src/input';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d'); // context

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

//ctx.fillRect(20, 20, 100, 100);
//ctx.fillStyle = '#f00';

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
new InputHandler(paddle);
//paddle.draw(ctx);

let lastTime = 0;
function gameLoop(timestamp){
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
    ctx.clearRect = (0,0, 800, 600);
    paddle.update(deltaTime);
    paddle.draw(ctx);

    requestAnimationFrame(gameLoop);
}

gameLoop();
