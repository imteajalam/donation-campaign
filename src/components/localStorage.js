const getStoredDonation = () => {
  const storedDonation = localStorage.getItem('donation');
  if (storedDonation) {
    return JSON.parse(storedDonation);
  }
  return [];
}

const saveDonation = item => {
  const storedDonations = getStoredDonation();
  // console.log(storedDonations)
  const exists = storedDonations.find(donate => donate.id === item.id);
  // console.log(id )
  if (!exists) {
    storedDonations.push(item);
    localStorage.setItem('donation', JSON.stringify(storedDonations))
  }
}

export { getStoredDonation,saveDonation}