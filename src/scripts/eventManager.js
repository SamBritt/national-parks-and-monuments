const handleDelete = () => {
  console.log("delete button clicked", event.target.id.split("--")[1]);
  let parkId = event.target.id.split("--")[1];

  deletePark(parkId)
  .then(() => listNationalParks())
};

const handleDeleteMonument = () => {
  let monumentId = event.target.id.split("--")[1];

  deleteMonument(monumentId)
  .then(() => listMonuments())
};

const handleVisited = () => {
  let parkId = event.target.id.split('--')[1];
   let visitedparkObject = {
     visited: true
   }
   putPark(parkId, visitedparkObject)
   .then(() => listNationalParks())
}
