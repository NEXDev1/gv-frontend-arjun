import CardFour from './CardFour.tsx';
// import CardOne from '../../components/CardOne.tsx';
import CardThree from './CardThree.tsx';
import CardTwo from './CardTwo.tsx';
import ChartOne from './ChartOne.tsx';
// import ChartThree from '../../components/ChartThree.tsx';
// import ChartTwo from '../../components/ChartTwo.tsx';
// import ChatCard from '../../components/ChatCard.tsx';
// import MapOne from '../../components/MapOne.tsx';
// import TableOne from '../../components/TableOne.tsx';

const Dashboard = () => {
  return (
    <>
    <div  className="p-6 bg-gray-100 rounded-lg shadow-md" >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
      {/* className="p-6 bg-gray-100 rounded-lg shadow-md" */}
     {/* className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5" */}
        {/* <CardOne /> */}
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className="mt-4 grid grid-cols-8 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        {/* <ChartTwo /> */}
        {/* <ChartThree /> */}
        {/* <MapOne /> */}
        {/* <div className="col-span-12 xl:col-span-8"> */}
          {/* <TableOne /> */}
        {/* </div> */}
        {/* <ChatCard /> */}
      </div>
      </div>
    </>
  );
};

export default Dashboard;
