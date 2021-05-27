import * as React from 'react'; 
import { process } from '@progress/kendo-data-query';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

import products from './products.json';

const KendoGrid: React.FC = () => {
  const [products, setProducts] = React.useState([
    {"ProductID": 1, "ProductName": "Tea", "CategoryID": 1, "QuantityPerUnit": "10 boxes x 20 bags", "UnitPrice": 18.0, "UnitsInStock": 39, "Discontinued": false },
    {"ProductID": 7, "ProductName": "Dried Pears", "CategoryID": 7, "QuantityPerUnit": "12 - 1 lb pkgs.", "UnitPrice": 30.0, "UnitsInStock": 15, "Discontinued": false },
    {"ProductID": 8, "ProductName": "Cranberry Sauce", "CategoryID": 2, "QuantityPerUnit": "12 - 12 oz jars", "UnitPrice": 40.0, "UnitsInStock": 6, "Discontinued": false },
    {"ProductID": 9, "ProductName": "Mishi Kobe Niku", "CategoryID": 6, "QuantityPerUnit": "18 - 500 g pkgs.", "UnitPrice": 97.0, "UnitsInStock": 29, "Discontinued": true },
    {"ProductID": 14, "ProductName": "Tofu", "CategoryID": 7, "QuantityPerUnit": "40 - 100 g pkgs.", "UnitPrice": 23.25, "UnitsInStock": 35, "Discontinued": false },
    {"ProductID": 17, "ProductName": "Alice Mutton", "CategoryID": 6, "QuantityPerUnit": "20 - 1 kg tins", "UnitPrice": 39.0, "UnitsInStock": 0, "Discontinued": false},
  ]);

  const gridRef = React.useRef(null);
  const textAreaRef = React.useRef(null);

  const removeAllSpaces = (string) => {
    let newString = string;
    
    for(let i = 0; i < string.length; i++) {
      if(string.charCodeAt(i) === 9 || string.charAt(" ")) {
        let char = string.charAt(i);
        newString = string.replaceAll(char, ",");
      }
    }
    return newString;
  }

  "Tea	10	18	false	"

  const parsePastFromUser = () => {
    let textAreaValue = textAreaRef.current.value;
  }

  const handleRowInsertion = (event) => {
    if(event.nativeEvent.keyCode === 91 && event.nativeEvent.keyCode === 86){ 
      textAreaRef.current.focus()

      let value = textAreaRef.current.value;
      value = removeAllSpaces(value);
      value = value.trim().split(",");
      
      const product = [products[0]]
      product[0].ProductName = value[0];
      product[0].QuantityPerUnit = value[1];
      product[0].UnitPrice = value[2];
      product[0].Discontinued = value[3];

      const productsCopy = [...products];
      console.log(product);
      productsCopy.push(...product);

      setProducts([...productsCopy]);
     
    }
  }
  return (
    <div>
      <Grid
        ref={gridRef}
        onKeyDown={handleRowInsertion}
        navigatable
        selectable={{enabled: true, mode: "multiple"}}
        data={products}
      >
        <GridColumn field="ProductName" />
        <GridColumn field="UnitPrice" />
        <GridColumn field="UnitsInStock" />
        <GridColumn field="Discontinued" />
      </Grid>
      <textarea ref={textAreaRef} id="text-area" style={{ opacity: 1 }} />
    </div>
  );
}

export default KendoGrid;