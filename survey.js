const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let out = {};
rl.question(`What's your name? Nicknames are also acceptable :)`, (answer) => {
  out.name = answer;
  rl.question(`What's an activity you like doing?`, (answer) => {
    out.activity = answer;
    rl.question(`What do you listen to while doing that?`, (answer) => {
      out.music = answer;
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (answer) => {
        out.meal = answer;
        rl.question(`What's your favourite thing to eat for that meal?`, (answer) => {
          out.food = answer;
          rl.question(`Which sport is your absolute favourite?`, (answer) => {
            out.sport = answer;
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer) => {
              out.superpower = answer;
              console.log(out);
              rl.close();
            });
          });
        });
      });
    });
  });
});

