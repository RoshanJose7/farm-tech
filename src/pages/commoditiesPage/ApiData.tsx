interface iProps {
  data: FoodItem[];
  filterName: string;
  limit: number;
}

function ApiData(props: iProps) {
  let matches: FoodItem[] = [];

  function mapData() {
    if (props.data !== null) {
      const removeDuplicateUsingSet = (arr: FoodItem[]) => {
        return Array.from(new Set(arr));
      };

      const newData = removeDuplicateUsingSet(props.data);

      if (props.filterName === null || props.filterName === "") {
        return newData.slice(0, props.limit).map((item: FoodItem, idx) => (
          <div className="table-row" key={idx}>
            <span
              style={{
                width: "30%",
              }}
              className="table-data"
            >
              {item.commodity}
            </span>
            <span className="table-data">
              {item.district}
              ||
              {item.state}
            </span>
            <span className="table-data">
              {item.min_price / 100}₹ / {item.min_price}₹
            </span>
            <span className="table-data">
              {item.max_price / 100}₹ / {item.max_price}₹
            </span>
            <span className="table-data">
              {item.modal_price / 100}₹ / {item.modal_price}₹
            </span>
          </div>
        ));
      } else {
        newData.filter((item) => {
          return item.commodity.toLowerCase() === props.filterName.toLowerCase()
            ? matches.push(item)
            : null;
        });

        matches = removeDuplicateUsingSet(matches);

        return matches.map((item, index) => {
          return item.commodity.toLowerCase() ===
            props.filterName.toLowerCase() ? (
            <div className="table-row" key={index}>
              <span
                style={{
                  width: "30%",
                }}
                className="table-data"
              >
                {item.commodity}
              </span>
              <span className="table-data">
                {item.district}
                ||
                {item.state}
              </span>
              <span className="table-data">
                {item.min_price / 100}₹ / {item.min_price}₹
              </span>
              <span className="table-data">
                {item.max_price / 100}₹ / {item.max_price}₹
              </span>
              <span className="table-data">
                {item.modal_price / 100}₹ / {item.modal_price}₹
              </span>
            </div>
          ) : null;
        });
      }
    } else {
      return <h1>Loading</h1>;
    }
  }

  return <div>{mapData()}</div>;
}

export default ApiData;
