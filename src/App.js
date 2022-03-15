import React, { useState } from "react";
import "./styles.css";
var emojis = {
  "😀": "Grinning face",
  "😁": "Beaming face with smiling eyes",
  "😂": "Face with tears of joy",
  "🤣": "Rolling on floor laughing",
  "😃": "Grinning face with big eyes",
  "😄": "Grinning face with smiling eyes",
  "😅": "Grinning face with sweat",
  "😆": "Grinning squinting face",
  "😉": "Winking face",
  "😊": "Smiling face with smiling eyes",
  "😋": "Face savouring food",
  "😎": "Smiling face with sunglasses",
  "😍": "Smiling face with heart eyes",
  "😘": "Face blowing a kiss",
  "😜": "Winking face with tongue",
  "😝": "Squinting face with tongue",
  "🤤": "Drooling face",
  "😒": "Uamused face",
  "😓": "Downcast face with sweat",
  "😔": "Pensive face",
  "😕": "Confused face",
  "🙃": "Upside down face",
  "🤑": "Money mouth face",
  "😲": "Astonished face",
  "☹️": "Frowning face",
  "🙁": "Slightly frowning face",
  "😖": "Confounded face",
  "😞": "Disappointed face",
  "😟": "Worried face",
  "😤": "Face with steam from nose",
  "😢": "Crying face",
  "😭": "Loudly crying face",
  "😦": "Frowning face with mouth open",
  "😧": "Anguished face",
  "😨": "Fearfull face",
  "😩": "Weary face",
  "🤯": "Exploding head",
  "😬": "Grimacing face",
  "😮‍💨": "Face exahling",
  "😰": "Anxious face with sweat",
  "😱": "Face screaming in fear",
  "🥵": "Hot face",
  "🥶": "Cold face",
  "😳": "Flushed face",
  "🤪": "Zany face",
  "😵": "Knocked out face",
  "😵‍💫": "Dizzy face",
  "🥴": "Woozy face",
  "😠": "Angry face",
  "🥺": "Pleading face",
  "🤠": "Cowboy hat face",
  "🤥": "Lying face",
  "🤫": "Shushing face",
  "🤭": "Face with handover mouth",
  "🧐": "Face with monocle",
  "🤓": "Nerd face",
  "👻": "Ghost",
  "🐷": "Pig",
  "🦓": "Zebra",
  "🦄": "Unicorn",
  "🐫": "Camel",
  "🐵": "Monkey",
  "🐶": "Dog",
  "🖤": "black heart",
  "❤": "Red Heart",
  "💔": "broken Heart",
  "💋": "kiss mark",
  "🐼": "panda face",
  "👌": "kaimm",
};
var ekeys = Object.keys(emojis);
function Interpreter() {
  const [inputMeaning, emojiMeaning] = useState("");
  function eInput(e) {
    var Input = e.target.value;
    var meaning = emojis[Input];
    if (meaning === undefined) {
      meaning = "Not Found";
    }
    emojiMeaning(meaning);

  }
  function emojiClickHandler(emoji) {
    var meaning = emojis[emoji];
    emojiMeaning(meaning);
  }


  return (
    <div className="container">
      <b><p>Enter here : </p></b>
      <input onChange={eInput} />
      <p>{inputMeaning}</p>
      <b><p>You Can Choose from here 🙃 </p></b>
      {ekeys.map(function (keys) {
        return (
          <span onClick={() => emojiClickHandler(keys)}>{keys}</span>
        );
      })}
    </div>
  );
}
export default Interpreter;