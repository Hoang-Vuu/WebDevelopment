function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function Random({ min, max }) {
  return (
    <div>
        Random value between {min} and {max} =&gt; <p>{getRandomInt(min, max)}</p>
    </div>
  );
}
export default Random