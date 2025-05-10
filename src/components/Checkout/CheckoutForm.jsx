import React from "react";
import Input from "./Input";

const CheckoutForm = ({ onChange }) => {
  return (
    <div className="space-y-6">
      <Input
        onChange={onChange}
        label={"Full Name"}
        labelFor={"name"}
        name={"name"}
        isRequire={true}
      />
      <Input
        onChange={onChange}
        label={"Street Address"}
        labelFor={"address"}
        name={"address"}
        isRequire={true}
      />
      <Input
        onChange={onChange}
        label={"Apartment, floor, etc (optional)"}
        labelFor={"house"}
        name={"house"}
      />
      <Input
        onChange={onChange}
        label={"Town/City"}
        labelFor={"city"}
        isRequire={true}
        name={"city"}
      />
      <Input
        onChange={onChange}
        label={"Pincode"}
        isRequire={true}
        labelFor={"pincode"}
        name={"pincode"}
      />
      <Input
        onChange={onChange}
        label={"Mobile Number"}
        labelFor={"mobile"}
        name={"mobile"}
        isRequire={true}
      />
      <Input
        onChange={onChange}
        label={"Email Address"}
        labelFor={"email"}
        name={"email"}
        isRequire={true}
      />
    </div>
  );
};

export default CheckoutForm;
