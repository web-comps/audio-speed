import './App.css';
// 资源只能在 src 下的限制，复制一份进来
import './package/src';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <wcs-audio-speed source="https://www.w3school.com.cn/i/song.mp3" />
      </header>
    </div>
  );
}

export default App;
