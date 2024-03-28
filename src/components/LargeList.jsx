import React, { Suspense, useMemo } from "react";
import { FixedSizeList } from "react-window";
import ListItem from "./ListItem"; // Statically import ListItem component

const LargeList = () => {
  // Generate a large list of items (dummy data)
  const largeList = useMemo(() => {
    const items = [];
    for (let i = 0; i < 10000; i++) {
      items.push(`Item ${i}`);
    }
    return items;
  }, []);

  // Render list items using virtualization
  const renderRow = ({ index, style }) => {
    return <ListItem style={style} item={largeList[index]} />;
  };

  return (
    <div>
      <h3>Large List of 10000 values makes easier to display using useMemo</h3>
      <Suspense fallback={<div>Loading...</div>}>
        <FixedSizeList
          height={400} // Height of the list
          width={300} // Width of the list
          itemCount={largeList.length} // Total number of items in the list
          itemSize={50} // Height of each item
        >
          {renderRow}
        </FixedSizeList>
      </Suspense>
    </div>
  );
};

export default LargeList;
