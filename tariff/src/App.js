import './App.css';
import TariffCard from './components/TariffCard/TariffCard';
import DataCard from './data.json';


function App() {
  return (
    <div className="App">
     {DataCard.map((tariff) => (
        <TariffCard
          name={tariff.name}
          rate={tariff.rate}
          speed={tariff.speed}
          content={tariff.content}
          other={tariff.other}
          color={tariff.color}
          nextcolor={tariff.nextcolor}
        />
      ))}
    </div>
  );
}

export default App;
