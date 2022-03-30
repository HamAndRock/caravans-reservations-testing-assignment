import { useState } from "react";
import { Checkbox, Divider } from "antd";
import styled from "styled-components";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { Label } from "./PriceSlider";

const TypesCheckboxStyled = styled.div`
  display: flex;
  margin: 12px 20px;
  flex-direction: column;
  border-style: solid;
  border-width: 3px 0px;
  padding-top: 12px;
  border-color: #610d46;
`;

const CheckboxParts = styled.div`
  display: flex;
  align-items: center;
  margin: 16px;
  align-self: start;
`;

const CheckboxGroupStyled = styled(Checkbox.Group as any)`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const CaravanTypesCheckbox = () => {
  const [selectedValues, setSelectedValues] = useState<CheckboxValueType[]>([]);
  const [indeterminate, setIndeterminate] = useState<boolean>(false);
  const [checkAll, setCheckAll] = useState<boolean>(false);

  const options: string[] = ["Campervan", "Intergrated", " BuiltIn", "Alcove"];

  const onChange = (checkedValues: CheckboxValueType[]) => {
    setSelectedValues(checkedValues);
    setIndeterminate(
      !!checkedValues.length && checkedValues.length < options.length
    );
    setCheckAll(checkedValues.length === options.length);
  };

  const onCheckAllChange = (e: any) => {
    setSelectedValues(e.target.checked ? options : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <TypesCheckboxStyled>
      <Label>Caravan types: </Label>
      <CheckboxParts>
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          Check all
        </Checkbox>
        <br />
        <CheckboxGroupStyled
          options={options}
          onChange={onChange}
          value={selectedValues}
        />
      </CheckboxParts>
    </TypesCheckboxStyled>
  );
};

export default CaravanTypesCheckbox;
