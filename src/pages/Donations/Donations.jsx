import { useEffect, useState } from "react";
import { getStoredDonation } from "../../components/localStorage";
import DonatedCard from "../../components/DonatedCard";


const Donations = () => {
  const [allDonatated, setAllDonated] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  const [isShowAll, setIsShowAll] = useState(false);

  useEffect(() => {
    const data = getStoredDonation();
    setAllDonated(data);
  }, [])

  const handleIsShowAll = () => {
    if (dataLength === 4) {
      setDataLength(allDonatated.length);
    } else {
      setDataLength(4);
    }
    setIsShowAll(!isShowAll);
  }


  const showAllToggleBtn = <>
    <div className="text-center mb-10">
      <button onClick={handleIsShowAll} className="btn bg-[#009444] hover:bg-[#009444] text-white px-7 normal-case">{!isShowAll ? "See All" : "See Less"}</button>
    </div>
  </>
  const noDonationsYet = <>
    <div className="text-center py-20">
      <img src="https://salemcommon.org/wp-content/uploads/2019/03/donate.png" alt="donation" className="w-20 inline-block" />
      <h2 className="text-3xl">No donations yet!</h2>
    </div>
  </>


  return (
    <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5 my-10">
        {
          allDonatated.length !== 0 && allDonatated.slice(0, dataLength).map(donation => <DonatedCard key={donation.id} donation={donation}> </DonatedCard>)
        }
      </div>
      {allDonatated.length === 0 && noDonationsYet}
      {
        allDonatated.length > 4 && showAllToggleBtn
      }
    </div>
  );
};

export default Donations;