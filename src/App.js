import React from 'react';
import Card from './components/Card';
import OuterCard from './components/OuterCard';

const dummyData = [
  {companyName: 'Company1', duration: '2 months', location: 'online', lastDateToApply: '25th'},
  {companyName: 'Company2', duration: '3 months', location: 'online', lastDateToApply: '26th'},
  {companyName: 'Company3', duration: '4 months', location: 'online', lastDateToApply: '24th'},
]

function App() {

  return (
    <div>
      {
        dummyData.map((company)=><Card name={company.companyName} duration={company.duration} location={company.location} lastDateToApply={company.lastDateToApply} />)
      }
    </div>
  );
}

export default App;
