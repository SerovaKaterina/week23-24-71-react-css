import React, {useState} from 'react';
import './App.css';
import TariffCard from './components/TariffCard/TariffCard';
import DataCard from './data.json';


function App() {
  const [selectedTariff, setSelectedTariff] = useState(null);

  const handleTariffSelect = (tariffName) => {
    setSelectedTariff(tariffName === selectedTariff ? null : tariffName);
  };

  return (
    <div className="App">
     {DataCard.map((tariff) => (
        <TariffCard
          key = {tariff.name}
          name={tariff.name}
          rate={tariff.rate}
          speed={tariff.speed}
          content={tariff.content}
          color={tariff.color}
          nextcolor={tariff.nextcolor}
          isSelected = {tariff.name === selectedTariff}
          onSelect = {handleTariffSelect}
        />
      ))}
    </div>
  );
}

export default App;
