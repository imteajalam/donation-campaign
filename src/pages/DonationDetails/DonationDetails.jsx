import { Link, useLoaderData, useParams } from "react-router-dom";
import { getStoredDonation, saveDonation } from "../../components/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationDetails = () => {
  const data = JSON.parse(useLoaderData());
  const { id } = useParams();
  const card = data.find(c => parseInt(c.id) === parseInt(id));
  const { title, description, titleColor, image, amount } = card || {};

  const addAsDonated = () => {
    const prevDonation = getStoredDonation();
    const isExisting = prevDonation.find(item => card.id === item.id);

    if (!isExisting) {
      toast.success("Thanks.Your Donation Succesfull!");
      saveDonation(card);
    }
    else toast.error("Sorry.You have already Donated!");
  }

  return (
    <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
      <div className="mb-10">
        <div className="w-full relative xl:my-10 md:my-5 my-5">
          <img src={image} alt="cover-image" className="inline-block w-full rounded-xl" />
          <div className="bg-[#00000080] absolute left-0 bottom-0 w-full rounded-b-xl p-5">
            <Link> <button onClick={addAsDonated} style={{ backgroundColor: titleColor }} className="btn text-white normal-case border-none">Donate ${amount}</button></Link>
          </div>
        </div>
        <div>
          <h2 className="xl:text-4xl md:text-3xl text-3xl font-semibold mb-5">{title}</h2>
          <p className="text-[#0B0B0BB2]">{description}</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DonationDetails;