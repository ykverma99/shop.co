import React, { useState } from "react";
import Title from "./Title";
import Text from "./Text";

const Filter = () => {
  const [isShow, setisShow] = useState(true);
  return (
    <div>
      <Title
        title={"Filters"}
        isShow={isShow}
        handleIsShow={() => setisShow(!isShow)}
      />
      {isShow && (
        <div className="mb-5">
          <Text text={"Shop"} />
          <Text text={"Shop"} />
          <Text text={"Shop"} />
          <Text text={"Shop"} />
        </div>
      )}
    </div>
  );
};

export default Filter;
