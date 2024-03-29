import { faCoffee,faSackDollar,faPercent,faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const CardTwo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-meta-10 dark:bg-gray-200 ">
       
     <FontAwesomeIcon icon={faHandHoldingDollar} /> 
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-lg  dark:bg-white text-black font-extrabold">
            452
          </h4>
          <span className="text-sm font-medium text-slate-400">Total Commission</span>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
