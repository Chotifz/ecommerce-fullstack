import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Label } from "../ui/label";

export default function AddressCard({
  addressInfo,
  handleDeleteAddress,
  handleEditAddress,
  setCurrentSelectedAddress,
  setCurrentEditedId,
  // selectedId,
}) {
  return (
    <Card
      //   onClick={
      //     setCurrentSelectedAddress
      //       ? () => setCurrentSelectedAddress(addressInfo)
      //       : null
      //   }
      className={`cursor-pointer border-red-700 ${
        // selectedId?._id === addressInfo?._id
        //   ? "border-red-900 border-[4px]"
        //   :
        "border-black"
      }`}
    >
      <CardContent className="grid p-4 gap-4">
        <Label>Address: {addressInfo?.address}</Label>
        <Label>City: {addressInfo?.city}</Label>
        <Label>pincode: {addressInfo?.pincode}</Label>
        <Label>Phone Number: {addressInfo?.phone}</Label>
        <Label>Notes: {addressInfo?.notes}</Label>
      </CardContent>
      <CardFooter className="p-3 flex justify-between">
        <Button
          onClick={() => {
            handleEditAddress(addressInfo);
            setCurrentEditedId(addressInfo._id);
          }}
        >
          Edit
        </Button>
        <Button onClick={() => handleDeleteAddress(addressInfo)}>Delete</Button>
      </CardFooter>
    </Card>
  );
}